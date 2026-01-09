import React from 'react'

/**
 * Reusable Divider component
 * 
 * @param {string} className - Additional CSS classes
 * @param {string} color - Divider color (default: #DADDDE)
 * @param {string} spacing - Vertical padding (default: py-8)
 * @param {string} thickness - Divider thickness (default: h-px)
 */
const Divider = ({
  className = '',
  color = '#DADDDE',
  spacing = 'py-8',
  thickness = 'h-px',
  ...props
}) => {
  return (
    <div className={`${spacing} ${className}`} {...props}>
      <div className={`${thickness} w-full`} style={{ backgroundColor: color }} />
    </div>
  )
}

export default Divider

