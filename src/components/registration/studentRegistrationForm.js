import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import media from 'theme/media';

const Button = styled.button`
  color: rgba(0, 0, 0, 0.8);
  background: none;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.22);
  transition: all 0.1s;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
    background: #c14545;
    color: #fff;
    border: 1px solid #c14545;
  }

  ${media.phone`
    font-size: 4vw;
  `};
`;

const Wrapper = styled.div`
  display: inline-block;
`;

const StyledForm = styled(Form)`
  > label {
    display: block;
    padding: 15px 0px 5px 0px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
  }
  > input {
    width: 100%;
    padding: 7px;
    ${media.phone`
      padding: 5px 0px 5px 5px;
      width: 97%;
    `};
    font-family: 'Open Sans', sans-serif;
    border-radius: 3px;
    border: solid 1px rgba(0, 0, 0, 0.27);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    line-height: 1.5;
    &:focus {
      border: solid 1px red;
      box-shadow: 0 0 0 0.2rem rgba(179, 0, 0, 0.3);
    }
  }
  > select {
    width: 103%;
    padding: 7px;
    ${media.phone`
      padding: 5px 0px;
      width: 100%;
    `};
    font-family: 'Open Sans', sans-serif;
    border-radius: 3px;
    border: solid 1px rgba(0, 0, 0, 0.27);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    line-height: 1.5;
    &:focus {
      border: solid 1px red;
      box-shadow: 0 0 0 0.2rem rgba(179, 0, 0, 0.3);
    }
  }
  > button {
    background: none;
    border: solid 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    padding: 10px 50px;
    color: rgba(0, 0, 0, 0.6);
    margin: 30px 0px;
    margin-left: ${({ left }) => left || '0'};
    border-radius: 3px;
    transition: all 0.15s ease-in-out;
    border: solid 1px rgba(179, 0, 0, 0.7);
    color: rgba(179, 0, 0, 0.7);
    &:hover {
      color: white;
      background: rgba(179, 0, 0, 0.7);
    }
  }
`;

const ErrorAlert = styled.p`
  color: red;
  font-family: 'Open Sans', sans-serif;
`;

const FeildWrapper = styled.div`
  width: 103%;
  ${media.phone`
    width: 100%;  
  `};
  > p {
    display: block;
    padding: 15px 0px 5px 0px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
  }
  > div {
    > input {
      margin: 7px 3%;
      width: 40%;
      padding: 7px;
      ${media.phone`
      margin: 7px 0%;
      padding: 5px 0px 5px 5px;
      width: 97%;
    `};
      font-family: 'Open Sans', sans-serif;
      border-radius: 3px;
      border: solid 1px rgba(0, 0, 0, 0.27);
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      line-height: 1.5;
      &:focus {
        border: solid 1px red;
        box-shadow: 0 0 0 0.2rem rgba(179, 0, 0, 0.3);
      }
    }
  }
`;

const thisYearStart = moment()
  .startOf('year')
  .add(7, 'months');

const giveAddmissionYear = (thisYear) => {
  const now = moment();
  if (now < thisYear) {
    return {
      firYear: moment()
        .startOf('year')
        .add(7, 'months')
        .subtract(1, 'year'),
      secYear: moment()
        .startOf('year')
        .add(7, 'months')
        .subtract(2, 'year'),
      thirdYear: moment()
        .startOf('year')
        .add(7, 'months')
        .subtract(3, 'year'),
      forthYear: moment()
        .startOf('year')
        .add(7, 'months')
        .subtract(4, 'year'),
    };
  }
  return {
    firYear: moment()
      .startOf('year')
      .add(7, 'months'),
    secYear: moment()
      .startOf('year')
      .add(7, 'months')
      .subtract(1, 'year'),
    thirdYear: moment()
      .startOf('year')
      .add(7, 'months')
      .subtract(2, 'year'),
    forthYear: moment()
      .startOf('year')
      .add(7, 'months')
      .subtract(3, 'year'),
  };
};

const admissionYearStart = giveAddmissionYear(thisYearStart);

const StudentRegistration = ({
  values,
  errors,
  touched,
  isSubmitting,
  handleBlur,
  handleChange,
  setErrors,
}) => (
  <StyledForm>
    {errors.error && <ErrorAlert>{errors.error}</ErrorAlert>}
    <label htmlFor="name">Name:</label>
    {touched.name && errors.name && <ErrorAlert>{errors.name}</ErrorAlert>}
    <Field
      type="text"
      name="name"
      id="name"
      placeholder="Enter your name here..."
      required
    />
    <label htmlFor="rollNo">Roll Number:</label>
    {touched.rollNo &&
      errors.rollNo && <ErrorAlert>{errors.rollNo}</ErrorAlert>}
    <Field
      type="text"
      name="rollNo"
      placeholder="Roll Number"
      id="rollNo"
      required
    />
    <label htmlFor="email">Email:</label>
    {touched.email && errors.email && <ErrorAlert>{errors.email}</ErrorAlert>}
    <Field type="email" name="email" placeholder="Email" id="email" required />
    <label htmlFor="location">Location:</label>
    {touched.location &&
      errors.location && <ErrorAlert>{errors.location}</ErrorAlert>}
    <Field
      type="text"
      name="location"
      placeholder="Location"
      id="location"
      required
    />
    <label htmlFor="dateOfBirth">Date of Birth:</label>
    {touched.dateOfBirth &&
      errors.dateOfBirth && <ErrorAlert>{errors.dateOfBirth}</ErrorAlert>}
    <Field
      type="date"
      name="dateOfBirth"
      placeholder="Date of Birth"
      id="dateOfBirth"
      required
    />
    <label htmlFor="admittedIn">Admitted in:</label>
    {touched.admittedIn &&
      errors.admittedIn && <ErrorAlert>{errors.admittedIn}</ErrorAlert>}
    <select
      name="admittedIn"
      id="admittedIn"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.admittedIn}
      required
    >
      <option value={new Date(admissionYearStart.firYear)}>
        {moment(admissionYearStart.firYear).format('YYYY')}
      </option>
      <option value={new Date(admissionYearStart.secYear)}>
        {moment(admissionYearStart.secYear).format('YYYY')}
      </option>
      <option value={new Date(admissionYearStart.thirdYear)}>
        {moment(admissionYearStart.thirdYear).format('YYYY')}
      </option>
      <option value={new Date(admissionYearStart.forthYear)}>
        {moment(admissionYearStart.forthYear).format('YYYY')}
      </option>
    </select>
    <label htmlFor="branch">Branch :</label>
    {touched.branch &&
      errors.branch && <ErrorAlert>{errors.branch}</ErrorAlert>}
    <select
      name="branch"
      id="branch"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.branch}
      required
    >
      <option value="" disabled>
        Select the branch.
      </option>
      <option value="it">I.T.</option>
      <option value="civil">Civil</option>
      <option value="env">Environment</option>
    </select>
    <label htmlFor="gender">Gender:</label>
    {touched.gender &&
      errors.gender && <ErrorAlert>{errors.gender}</ErrorAlert>}
    <select
      name="gender"
      id="gender"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.gender}
      required
    >
      <option value="" disabled>
        Select your gender.
      </option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <label htmlFor="bio">Bio:</label>
    {touched.bio && errors.bio && <ErrorAlert>{errors.bio}</ErrorAlert>}
    <Field
      type="textarea"
      name="bio"
      placeholder="Enter your Bio"
      id="bio"
      required
    />
    {!values.edit && <label htmlFor="otp">Registeration Key:</label>}
    {!values.edit &&
      touched.branch &&
      errors.branch && <ErrorAlert>{errors.branch}</ErrorAlert>}
    {!values.edit && (
      <Field
        type="otp"
        name="otp"
        placeholder="Enter your registeration key"
        id="otp"
        required
      />
    )}
    {values.edit && (
      <FeildWrapper>
        <p>Links:</p>
        <div>
          <Field
            type="text"
            name="profile0"
            placeholder="eg. Google, LinkedIn, Portfolio"
          />
          <Field
            type="text"
            name="url0"
            placeholder="www.example.com/myprofile"
          />
        </div>
        <div>
          <Field
            type="text"
            name="profile1"
            placeholder="eg. Google, LinkedIn, Portfolio"
          />
          <Field
            type="text"
            name="url1"
            placeholder="www.example.com/myprofile"
          />
        </div>

        <div>
          <Field
            type="text"
            name="profile2"
            placeholder="eg. Google, LinkedIn, Portfolio"
          />
          <Field
            type="text"
            name="url2"
            placeholder="www.example.com/myprofile"
          />
        </div>

        <div>
          <Field
            type="text"
            name="profile3"
            placeholder="eg. Google, LinkedIn, Portfolio"
          />
          <Field
            type="text"
            name="url3"
            placeholder="www.example.com/myprofile"
          />
        </div>

        <div>
          <Field
            type="text"
            name="profile4"
            placeholder="eg. Google, LinkedIn, Portfolio"
          />
          <Field
            type="text"
            name="url4"
            placeholder="www.example.com/myprofile"
          />
        </div>
      </FeildWrapper>
    )}
    <button disabled={!!isSubmitting}> Submit </button>
    {values.edit && (
      <Wrapper>
        <Button
          left="20px"
          type="button"
          onClick={() => {
            values
              .onRemove()
              .then(() => {
                values.history.push('/');
                values.logout();
                values.setSecondary();
              })
              .catch((err) => {
                setErrors({ error: `Cannot Delete ${err}` });
              });
          }}
        >
          Delete Profile
        </Button>
      </Wrapper>
    )}
  </StyledForm>
);

const FormikStudentRegistration = withFormik({
  mapPropsToValues({
    edit,
    name = '',
    rollNo = '',
    email = '',
    location = '',
    dateOfBirth = '',
    gender = '',
    bio = '',
    branch = '',
    admittedIn = '',
    linkedProfiles = [],
    onRemove = '',
    history = '',
    logout = '',
    setSecondary = '',
  } = {}) {
    const profile0 = linkedProfiles[0] ? linkedProfiles[0].provider : '';
    const url0 = linkedProfiles[0] ? linkedProfiles[0].url : '';
    const profile1 = linkedProfiles[1] ? linkedProfiles[1].provider : '';
    const url1 = linkedProfiles[1] ? linkedProfiles[1].url : '';
    const profile2 = linkedProfiles[2] ? linkedProfiles[2].provider : '';
    const url2 = linkedProfiles[2] ? linkedProfiles[2].url : '';
    const profile3 = linkedProfiles[3] ? linkedProfiles[3].provider : '';
    const url3 = linkedProfiles[3] ? linkedProfiles[3].url : '';
    const profile4 = linkedProfiles[4] ? linkedProfiles[4].provider : '';
    const url4 = linkedProfiles[4] ? linkedProfiles[4].url : '';

    return {
      name: name || '',
      rollNo: rollNo || '',
      email: email || '',
      location: location || '',
      dateOfBirth: dateOfBirth ? moment(dateOfBirth).format('YYYY-MM-DD') : '',
      gender: gender || '',
      bio: bio || '',
      branch: branch || '',
      admittedIn: admittedIn ? new Date(moment(admittedIn)) : '',
      edit: edit || '',
      profile0,
      url0,
      profile1,
      url1,
      profile2,
      url2,
      profile3,
      url3,
      profile4,
      url4,
      onRemove: onRemove || '',
      history,
      logout,
      otp: '',
      setSecondary,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required for registration'),
    email: Yup.string()
      .email('Email is not a valid email.')
      .required('Email is required for registration.'),
    rollNo: Yup.string()
      .required('Roll number is required for registration.')
      .min(11, 'Roll number length is not correct.')
      .max(11, 'Roll number length is not correct'),
    location: Yup.string(),
    dateOfBirth: Yup.date().required('Date of birth is required.'),
    admittedIn: Yup.date().required('Your Admission year is required.'),
    branch: Yup.string().required('Branch is required.'),
    gender: Yup.string().required('Gender is required.'),
    bio: Yup.string()
      .min(25)
      .required('Bio is required (Min 25 charachters).'),
  }),
  handleSubmit(val, { props, setErrors, setSubmitting }) {
    const data = {
      ...props,
      ...val,
    };
    props
      .onSubmit(data)
      .then(() => {
        if (!props.edit) return props.setPrimary();
        return Promise.resolve();
      })
      .then(() => {
        if (!props.edit) return props.setSecondary();
        return Promise.resolve();
      })
      .then(() => {
        if (!props.edit) {
          props.login();
          return props.history.push('/student/myprofile');
        }
        setSubmitting(false);
        return props.history.push('/student/myprofile');
      })
      .catch((error) => {
        setErrors({ error });
        alert(error);
        window.scrollTo(0, 0);
        setSubmitting(false);
      });
  },
})(StudentRegistration);

export default FormikStudentRegistration;
