import React from 'react'

const LookingForButton = ({
  value,
  label,
  isActive,
  onClick,
  className = ''
}) => {
  const baseStyles = 'flex-1 px-6 py-2 rounded-lg text-sm font-inter transition-colors'
  
  const activeStyles = 'bg-[#F6B8001A] rounded-[4px] border-2 border-[#F6B800] text-[#2C2C2C]'
  const inactiveStyles = 'rounded-[4px] border-2 border-[#E5E7EB] text-[#4A5565] hover:bg-[#E6E9EB]'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles} ${className}`}
    >
      {label}
    </button>
  )
}

export default LookingForButton

