import React from 'react'

const Checkbox = ({
  label,
  checked,
  onChange,
  variant = 'checkbox',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseCheckboxStyles = 'w-5 h-5 rounded border-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer'
  
  const checkboxVariants = {
    checkbox: checked
      ? 'bg-[#FFB703] border-[#FFB703] focus:ring-[#FFB703]'
      : 'bg-white border-[#E6E9EB] hover:border-[#DADDDE] focus:ring-[#6E7375]',
    toggle: 'hidden' // Toggle variant uses different styling
  }

  const toggleStyles = variant === 'toggle'
    ? `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? 'bg-[#FFB703]' : 'bg-[#E6E9EB]'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`
    : ''

  if (variant === 'toggle') {
    return (
      <label className={`flex items-center gap-3 ${className}`}>
        <div className={toggleStyles}>
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className="sr-only"
            {...props}
          />
          <span
            className={`inline-block h-4 w-4 transform rounded-full transition-transform ${
              checked 
                ? 'bg-white translate-x-6' 
                : 'bg-[#C1C4C6] translate-x-1'
            }`}
          />
        </div>
        {label && (
          <span className={`font-inter text-[#4A5565] text-sm font-medium leading-[20px] tracking-[-0.15px] ${disabled ? 'opacity-50' : ''}`}>
            {label}
          </span>
        )}
      </label>
    )
  }

  return (
    <label className={`flex items-center gap-3 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`${baseCheckboxStyles} ${checkboxVariants.checkbox} ${disabled ? 'cursor-not-allowed' : ''}`}
          {...props}
        />
        {checked && (
          <svg
            className="absolute top-0.5 left-0.5 w-4 h-4 text-white pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      {label && (
        <span className={`font-inter text-sm ${checked ? 'text-[#131214] font-medium' : 'text-[#6E7375]'}`}>
          {label}
        </span>
      )}
    </label>
  )
}

export default Checkbox

