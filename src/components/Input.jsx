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
  const baseStyles = 'w-full h-12 px-4 rounded-[8px] transition-all placeholder:text-gray-400 focus:outline-none'

  // Variant styles - base state styles
  const variants = {
    // Enabled variant styled according to semantic tokens design spec
    enabled: 'bg-[var(--global-grey-10,#F4F6F7)] border border-[var(--semantic-border-subtle,#E6E9EB)] text-[var(--semantic-fg-subtle,#898D8F)] font-inter text-[16px] font-medium leading-[1]',
    // Hover variant styled according to semantic tokens design spec
    hover: 'bg-white border border-[var(--semantic-border-muted,#DADDDE)] text-[var(--semantic-fg-subtle,#898D8F)] font-inter text-[16px] font-medium leading-[1]',
    // Focus variant styled according to semantic tokens design spec
    focus: 'bg-[var(--semantic-bg-canvas,#FFF)] border-2 border-[var(--semantic-accent-moderate,#6E7375)] shadow-[0_0_0_4px_#E9E9E9] text-[var(--semantic-fg-base,#131214)] font-inter text-[16px] font-medium leading-[1]',
    // Filled variant styled according to semantic tokens design spec
    filled: 'border border-[var(--semantic-border-subtle,#E6E9EB)] text-[var(--semantic-fg-base,#131214)] font-inter text-[16px] font-medium leading-[1]',
    // Error variant styled according to semantic tokens design spec
    error: 'border-2 border-[var(--semantic-border-error,#FF9175)] bg-[var(--semantic-bg-error,#FFF3F0)] text-[var(--semantic-fg-subtle,#898D8F)] font-inter text-[16px] font-medium leading-[1]',
    disabled: 'bg-[#DADDDE] border border-[#C1C4C6] text-[#898D8F] cursor-not-allowed',
    search: 'h-12 rounded-full bg-[#F4F6F7] flex items-center px-4 py-[14px] gap-4 w-auto lg:w-[480px]'
  }

  // Interactive states (hover and focus are automatic via CSS)
  const interactiveStates = {
    // Enabled: hover moves toward hover styling, focus toward focus styling using semantic tokens
    enabled: 'hover:border-[var(--semantic-border-muted,#DADDDE)] hover:bg-white focus:border-2 focus:border-[var(--semantic-accent-moderate,#6E7375)] focus:shadow-[0_0_0_4px_#E9E9E9]',
    // Hover variant: small enhancement on hover if needed
    hover: 'hover:border-[var(--semantic-border-muted,#DADDDE)]',
    // Focus variant is already focused, no additional states needed
    focus: '',
    // Filled: same interaction semantics as enabled, but starting from filled base
    filled: 'hover:border-[var(--semantic-border-muted,#DADDDE)] focus:border-2 focus:border-[var(--semantic-accent-moderate,#6E7375)] focus:shadow-[0_0_0_4px_#E9E9E9]',
    // Error focus state uses the same semantic error tokens
    error: 'focus:ring-2 focus:ring-[var(--semantic-border-error,#FF9175)] focus:border-[var(--semantic-border-error,#FF9175)]',
    // No interactive states for disabled
    disabled: '',
    search: 'focus:ring-2 focus:ring-[#F4F6F7] focus:border-[#F4F6F7] border border-[#F4F6F7]'
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
