import React from 'react'

const Label = ({
  children,
  htmlFor,
  className = '',
  required = false,
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`form-label mb-2 block ${className}`}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  )
}

export default Label

