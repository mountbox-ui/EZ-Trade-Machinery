import React from 'react'

const Card = ({
  children,
  className = '',
  padding = true,
  ...props
}) => {
  const paddingClasses = padding ? 'px-0 lg:px-6 py-6' : ''
  
  return (
    <div
      className={`bg-white rounded-[8px] ${paddingClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card

