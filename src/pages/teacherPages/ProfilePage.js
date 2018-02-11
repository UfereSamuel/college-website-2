import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//  Components
import TeacherPhoto from './../../components/TeacherDashBoard/Photo';
import WorkList from './../../components/TeacherDashBoard/WorkList';
import TechnicalList from './../../components/TeacherDashBoard/TechnicalList';
import CommitteList from './../../components/TeacherDashBoard/CommitteList';
import SpecialisationList from './../../components/TeacherDashBoard/SpecialistionList';
import EducationList from './../../components/TeacherDashBoard/EducationList';

const StudentProfilePage = ({ teacher, history, secondary }) => (
  <div>
    <h2>My Profile</h2>
    {teacher ? (
      <div>
        {teacher.name ? '' : history.push('/teacher/editprofile')}
        <Link to="/teacher/editprofile">Edit Profile</Link>
        <TeacherPhoto {...teacher} />
        <EducationList {...secondary} />
        <WorkList {...secondary} edit />
        <TechnicalList {...secondary} edit />
        <CommitteList {...secondary} edit />
        <SpecialisationList {...secondary} />
        <Link to="/teacher/addwork">Add Work </Link>
        <Link to="/teacher/addtechnicalskill">Add Tech</Link>
        <Link to="/teacher/addcommitte">Add Committe </Link>
        <Link to="/teacher/addeducation">Add Education</Link>
        <Link to="/teacher/addspecialisation">Add Specialisation</Link>
      </div>
    ) : (
      <p>Loading ...</p>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  teacher: state.teacherPrimary,
  secondary: state.teacherSecondary,
});

export default connect(mapStateToProps)(StudentProfilePage);
