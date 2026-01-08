import React from 'react'

const Avatar = ({
  src,
  alt = 'Avatar',
  size = 'md',
  variant = 'circle',
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-16 h-16',
    xl: 'w-16 h-16',
    chat: 'w-16 h-16' // 64px for chat contacts
  }

  const variants = {
    circle: 'rounded-full',
    square: 'rounded',
    chat: 'rounded' // 4px border radius
  }


  // Chat variant specific styling
  if (variant === 'chat') {
    return (
      <div
        className={`w-16 h-16 rounded-[4px] overflow-hidden flex items-center justify-center bg-[#E6E9EB] ${className}`}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-[#E6E9EB] flex items-center justify-center">
            <svg className="w-1/2 h-1/2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
    )
  }

  // Default circular/square variants
  return (
    <div
      className={`${sizes[size]} ${variants[variant]} overflow-hidden bg-gray-200 flex items-center justify-center ${className}`}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <svg className="w-1/2 h-1/2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  )
}

export default Avatar

