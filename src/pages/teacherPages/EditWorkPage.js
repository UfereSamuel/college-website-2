import React from 'react';
import { connect } from 'react-redux';

// Components
import { Page, Container, FormWrapper, H2ResAuto } from 'theme/Components';
import WorkForm from './../../components/TeacherDashBoard/WorkForm';

// actions
import {
  startEditWork,
  startRemoveWork,
} from './../../actions/teacherSecondary';

const EditWork = ({ editWork, removeWork, history, work }) => (
  <Page>
    <Container>
      <H2ResAuto> Edit Work </H2ResAuto>
      <FormWrapper>
        {work ? (
          <WorkForm
            onSubmit={editWork}
            remove={removeWork}
            history={history}
            edit
            {...work}
          />
        ) : (
          <p>Loading</p>
        )}
      </FormWrapper>
    </Container>
  </Page>
);

const mapStateToProps = (state, props) => ({
  work: state.teacherSecondary.work.find(
    (work) => work._id === props.match.params._id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editWork: (val) => dispatch(startEditWork(val)),
  removeWork: (_id) => dispatch(startRemoveWork(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWork);
