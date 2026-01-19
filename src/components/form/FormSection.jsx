import React from 'react'

const FormSection = ({
  title,
  description,
  children,
  className = ''
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      {title && (
        <h3 className="font-inter font-bold text-md text-[#131214] mb-3">
          {title}
        </h3>
      )}
      {description && (
        <p className="font-inter text-sm text-[#6E7375] mb-4">
          {description}
        </p>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}

export default FormSection

