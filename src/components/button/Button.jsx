import React from 'react'
import PropTypes from 'prop-types'

const BASE =
  'border rounded py-2 sm:py-3 px-8 sm:px-16 text-sm font-semibold tracking-wider'

const CLASSES = {
  disabled: 'bg-gray-600 text-white cursor-not-allowed',
  primary: 'bg-teal-500 hover:bg-green-500 text-white',
}

const Button = ({ children, className, disabled, loading, onClick }) => {
  const isDisabled = disabled || loading

  return (
    <button
      disabled={isDisabled}
      className={`${BASE} ${
        CLASSES[isDisabled ? 'disabled' : 'primary']
      } ${className}`}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  children: '',
  className: '',
  disabled: false,
  loading: false,
  onClick: () => {},
}

export default Button
