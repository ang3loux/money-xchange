import React from 'react'
import PropTypes from 'prop-types'
import { formPropTypes, fieldPropTypes } from '../../utils/formikFieldPropType'

const Input = ({
  form: { touched, errors, setFieldTouched, setFieldValue },
  field: { value, name },
  className,
  inputClassName,
  errorLabelClassName,
  placeholder,
  type,
  showErrors,
  normalize,
  format,
  ...inputProps
}) => {
  const handleChange = event => {
    const text = event.target.value
    if (!touched[name]) setFieldTouched(name)
    setFieldValue(name, normalize(text, value))
  }

  const handleTouch = () => {
    if (!touched[name]) setFieldTouched(name)
  }

  return (
    <div className={`py-2 px-3 sm:mx-6 md:mx-12 ${className}`}>
      <input
        id={name}
        className={`block w-full py-2 px-4 bg-white focus:outline-none focus:shadow-outline border 
          border-gray-300 rounded-lg appearance-none leading-normal ${inputClassName}`}
        type={type}
        value={format(value)}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleTouch}
        {...inputProps}
      />

      {showErrors && touched[name] && !!errors[name] && (
        <p
          className={`mt-2 text-xs italic text-red-600 ${errorLabelClassName}`}
        >
          {errors[name]}
        </p>
      )}
    </div>
  )
}

Input.propTypes = {
  form: formPropTypes.isRequired,
  field: fieldPropTypes.isRequired,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  errorLabelClassName: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  showErrors: PropTypes.bool,
  normalize: PropTypes.func,
  format: PropTypes.func,
}

Input.defaultProps = {
  className: '',
  inputClassName: '',
  errorLabelClassName: '',
  placeholder: '',
  type: 'text',
  showErrors: true,
  normalize: text => text,
  format: text => text,
}

export default Input
