import React from 'react'

const Card = ({
  children,
  variant = 'default',
  className = '',
  padding = true,
  ...props
}) => {
  const baseStyles = 'rounded-[16px]'
  
  const variants = {
    default: 'bg-[#fff] shadow-[0_0_1px_rgba(20,20,20,0.12),_0_8px_16px_8px_rgba(20,20,20,0.04)]',
    outlined: 'bg-[#fff] border border-[#E6E9EB]',
    elevated: 'bg-[#fff] shadow-lg'
  }

  const paddingClasses = padding ? 'p-6' : ''

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${paddingClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card

