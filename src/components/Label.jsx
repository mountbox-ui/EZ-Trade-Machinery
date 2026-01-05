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
      className={`text-sm font-bold text-[#1A1C1E] font-inter ${className}`}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  )
}

export default Label

