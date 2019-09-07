import PropTypes from 'prop-types'

export const formPropTypes = PropTypes.shape({
  name: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
})

export const fieldPropTypes = PropTypes.shape({
  dirty: PropTypes.bool,
  errors: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleReset: PropTypes.func,
  handleSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  isSubmitting: PropTypes.bool,
  isValid: PropTypes.bool,
  isValidating: PropTypes.bool,
  registerField: PropTypes.func,
  resetForm: PropTypes.func,
  setError: PropTypes.func,
  setErrors: PropTypes.func,
  setFieldError: PropTypes.func,
  setFieldTouched: PropTypes.func,
  setFieldValue: PropTypes.func,
  setFormikState: PropTypes.func,
  setStatus: PropTypes.func,
  setSubmitting: PropTypes.func,
  setTouched: PropTypes.func,
  setValues: PropTypes.func,
  status: PropTypes.any,
  submitCount: PropTypes.number,
  submitForm: PropTypes.func,
  touched: PropTypes.object,
  unregisterField: PropTypes.func,
  validateField: PropTypes.func,
  validateForm: PropTypes.func,
  validateOnBlur: PropTypes.bool,
  validateOnChange: PropTypes.bool,
  values: PropTypes.object,
})

export default { formPropTypes, fieldPropTypes }
