import React from 'react'

const Badge = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    verified: 'text-[#008557]'
  }

  // Verified badge uses rounded rectangle, others use rounded-full
  const shapeClass = variant === 'verified' ? 'rounded' : 'rounded-full'

  return (
    <span
      className={`inline-flex items-center gap-1 py-1 ${shapeClass} text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge

