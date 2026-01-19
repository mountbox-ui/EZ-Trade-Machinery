import React, { useRef } from 'react'

const UploadButton = ({
  label,
  subtext,
  variant = 'outlined',
  icon,
  onFileSelect,
  accept,
  className = '',
  disabled = false,
  ...props
}) => {
  const fileInputRef = useRef(null)

  const baseStyles = 'w-full rounded-[8px] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer'

  const variants = {
    secondary: 'bg-[#F4F6F7] rounded-[8px] hover:bg-[#E8EBEB] hover:border-[#DADDDE] focus:ring-[#6E7375] ',
    outlined: 'bg-white border-2 border-dashed border-[#E6E9EB] hover:border-[#DADDDE] hover:bg-[#F4F6F7] focus:ring-[#6E7375]',
    'with-icon': 'bg-white border border-[#E6E9EB] hover:bg-[#F4F6F7] hover:border-[#DADDDE] focus:ring-[#6E7375]'
  }

  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file && onFileSelect) {
      onFileSelect(file)
    }
  }

  return (
    <div className={className}>
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled}
        className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} p-4 flex flex-row items-center justify-center gap-3`}
        {...props}
      >
        {icon && (
          <div className="flex-shrink-0">
            {typeof icon === 'string' ? (
              <img src={icon} alt="" className="w-8 h-8" />
            ) : (
              icon
            )}
          </div>
        )}
        {!icon && variant === 'outlined' && (
          <svg
            className="w-8 h-8 text-[#6E7375]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        )}
        <div className="text-left">
          <span className="font-inter  block text-[#2C2C2C] text-center text-base font-normal leading-6 tracking-[-0.312px]">
            {label}
          </span>
          {subtext && (
            <span className="font-inter text-sm text-[#6A7282] block mt-1">
              {subtext}
            </span>
          )}
        </div>
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled}
      />
    </div>
  )
}

export default UploadButton

