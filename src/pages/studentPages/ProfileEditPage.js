import React from 'react';
import { connect } from 'react-redux';

// Component
import FormikStudentRegistrationForm from './../../components/registration/studentRegistrationForm';

// Actions
import {
  startEditStudent,
  startRemoveStudent,
} from './../../actions/studentPrimary';

const StudentEditProfilePage = ({
  student,
  editStudent,
  deleteStudent,
  history,
}) => (
  <div>
    <FormikStudentRegistrationForm
      edit
      {...student}
      onSubmit={editStudent}
      onRemove={deleteStudent}
      history={history}
    />
  </div>
);

const mapStateToProps = (state) => ({
  student: state.studentPrimary,
});

const mapDispatchToProps = (dispatch) => ({
  editStudent: (data) => dispatch(startEditStudent(data)),
  deleteStudent: () => dispatch(startRemoveStudent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  StudentEditProfilePage
);
