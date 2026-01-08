import React from 'react'

const NotificationBadge = ({
  count,
  type = 'dot',
  variant = 'default',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-red-500',
    warning: 'bg-yellow-500',
    success: 'bg-green-500',
    info: 'bg-blue-500',
    highlighted: 'bg-[#FFB703]'
  }

  if (type === 'dot') {
    return (
      <span
        className={`absolute inline-flex rounded-full ${variants[variant]} ${className}`}
        style={{ width: '8px', height: '8px', top: '-2px', right: '-2px' }}
        {...props}
      />
    )
  }

  if (type === 'count') {
    if (!count || count === 0) return null
    
    return (
      <span
        className={`absolute inline-flex items-center justify-center rounded-full ${variants[variant]} text-white text-xs font-semibold ${className}`}
        style={{ 
          minWidth: '18px', 
          height: '18px', 
          padding: '0 5px',
          top: '-6px', 
          right: '-6px',
          fontSize: '10px'
        }}
        {...props}
      >
        {count > 99 ? '99+' : count}
      </span>
    )
  }

  if (type === 'highlighted') {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-full ${variants[variant]} text-white text-xs font-semibold px-2 py-0.5 ${className}`}
        {...props}
      >
        {count || ''}
      </span>
    )
  }

  return null
}

export default NotificationBadge

