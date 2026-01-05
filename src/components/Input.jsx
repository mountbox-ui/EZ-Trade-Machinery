import React from 'react'

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  variant = 'enabled',
  disabled = false,
  readOnly = false,
  ...props
}) => {
  const baseStyles = 'w-full h-12 px-4 rounded-[8px] transition-all text-[#1A1C1E] placeholder:text-gray-400 focus:outline-none'

  // Variant styles - base state styles
  const variants = {
    enabled: 'bg-white border border-gray-300',
    hover: 'bg-white border border-gray-400',
    focus: 'bg-white border border-[#FFB703] ring-2 ring-[#FFB703]',
    filled: 'bg-[#F4F6F7] border border-gray-300 text-[#131214]',
    error: 'bg-white border border-red-500',
    disabled: 'bg-[#DADDDE] border border-[#C1C4C6] text-[#898D8F] cursor-not-allowed'
  }

  // Interactive states (hover and focus are automatic via CSS)
  const interactiveStates = {
    enabled: 'hover:border-gray-400 focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703]',
    hover: 'hover:border-gray-500', // More prominent hover for hover variant
    focus: '', // Focus variant is already focused, no additional states needed
    filled: 'hover:border-gray-400 focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703]',
    error: 'focus:ring-2 focus:ring-red-500 focus:border-red-500',
    disabled: '' // No interactive states for disabled
  }

  // Handle read-only state (overrides variant)
  if (readOnly) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`${baseStyles} bg-[#DADDDE] border border-[#C1C4C6] text-[#898D8F] cursor-default ${className}`}
        {...props}
      />
    )
  }

  // Handle disabled state (overrides variant)
  if (disabled || variant === 'disabled') {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={true}
        className={`${baseStyles} ${variants.disabled} ${className}`}
        {...props}
      />
    )
  }

  // Combine base variant with interactive states
  const variantClasses = `${variants[variant] || variants.enabled} ${interactiveStates[variant] || interactiveStates.enabled}`

  const inputClasses = `${baseStyles} ${variantClasses} ${className}`

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      readOnly={readOnly}
      className={inputClasses}
      {...props}
    />
  )
}

export default Input
