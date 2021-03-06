import React from 'react';
import { withFormik, Field } from 'formik';
import Yup from 'yup';

import { StyledForm, FormError } from 'theme/Components';

const CommitteForm = ({ values, errors, touched, isSubmitting }) => (
  <StyledForm>
    {errors.error && <FormError>{errors.error} </FormError>}
    <label htmlFor="name">Committe Name:</label>
    {touched.name && errors.name && <FormError>{errors.name}</FormError>}
    <Field
      autoFocus
      type="text"
      id="name"
      name="name"
      placeholder="Enter the committe name like: Cultural"
      required
    />
    <label htmlFor="designation">Designation:</label>
    {touched.designation &&
      errors.designation && <FormError>{errors.designation}</FormError>}
    <Field
      type="text"
      id="designation"
      name="designation"
      placeholder="enter the designation"
      required
    />
    <label htmlFor="status">Status:</label>
    {touched.status && errors.status && <FormError>{errors.status}</FormError>}
    <Field
      type="text"
      id="status"
      name="status"
      placeholder="Enter your status in committee."
      required
    />
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
    {values.edit && (
      <button
        type="button"
        onClick={() => {
          values
            .remove(values._id)
            .then(() => values.history.push('/teacher/myprofile'));
        }}
      >
        Remove
      </button>
    )}
  </StyledForm>
);

const FormikCommitteForm = withFormik({
  mapPropsToValues({
    _id = '',
    edit = '',
    name = '',
    status = '',
    designation = '',
    remove = '',
    history = '',
  } = {}) {
    return {
      name,
      designation,
      status,
      remove,
      history,
      _id,
      edit,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Oops! Seems like you forgot the name.'),
    designation: Yup.string().required('Designation is required.'),
    status: Yup.string().required('Status is required.'),
  }),
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    props
      .onSubmit(val)
      .then(() => {
        resetForm();
        setSubmitting(false);
        props.history.push('/teacher/myprofile');
      })
      .catch((error) => {
        setErrors({ error: 'Something Went Wrong.' });
        alert(error);
        window.scrollTo(0, 0);
        setSubmitting(false);
      });
  },
})(CommitteForm);
export default FormikCommitteForm;
