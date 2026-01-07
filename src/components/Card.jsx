import React from 'react'

const Card = ({
  children,
  className = '',
  padding = true,
  fullWidth = false,
  ...props
}) => {
  const paddingClasses = padding ? 'px-0 lg:px-6 py-6' : ''
  const widthClasses = fullWidth ? 'w-full' : 'w-auto lg:w-[580px]'

  return (
    <div
      className={`bg-white rounded-[8px] ${widthClasses} ${paddingClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card

