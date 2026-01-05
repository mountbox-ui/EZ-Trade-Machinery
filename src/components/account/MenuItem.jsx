import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const MenuItem = ({
  icon,
  label,
  to,
  onClick,
  isActive = false,
  variant, // New variant prop: 'active' or 'inactive'
  className = ''
}) => {
  const location = useLocation()
  const active = isActive || (to && location.pathname === to)

  const IconComponent = icon

  const baseClasses = 'flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors font-inter text-base font-medium leading-[1] tracking-normal'
  
  // Variant styles
  const variants = {
    active: 'bg-[#FFB703]/10 text-[#6E7375]',
    inactive: 'text-[#6E7375] hover:bg-gray-100'
  }

  // Determine which variant to use: explicit variant prop > active state > default inactive
  const activeClasses = variant === 'active' 
    ? variants.active 
    : variant === 'inactive' 
      ? variants.inactive 
      : active 
        ? variants.active 
        : variants.inactive

  const renderIcon = () => {
    if (!IconComponent) return null
    
    if (typeof IconComponent === 'function') {
      // React Icon component
      return <IconComponent className="w-5 h-5" />
    } else if (typeof IconComponent === 'string') {
      // SVG/image import (returns a string URL)
      return <img src={IconComponent} alt={label} className="w-5 h-5" />
    } else {
      // Fallback for other types
      return icon
    }
  }

  const content = (
    <div className={`${baseClasses} ${activeClasses} ${className}`}>
      <div className="flex items-center gap-3">
        {IconComponent && (
          <span className="flex-shrink-0">
            {renderIcon()}
          </span>
        )}
        <span>{label}</span>
      </div>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  )

  if (onClick) {
    return (
      <button onClick={onClick} className="w-full text-left">
        {content}
      </button>
    )
  }

  if (to) {
    return <Link to={to}>{content}</Link>
  }

  return content
}

export default MenuItem

