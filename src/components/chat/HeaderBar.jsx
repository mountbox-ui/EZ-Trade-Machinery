import React from 'react'

const HeaderBar = ({
  title,
  price,
  image,
  icons = [],
  variant = 'default',
  statusIndicator,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`flex items-center justify-between p-4 border-b border-gray-200 bg-white ${className}`}
      {...props}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-[70px] h-[50px] object-cover flex-shrink-0"
          />
        )}
        <div className="flex-1 min-w-0">
          <h2 className="text-sm font-semibold text-gray-900 truncate">
            {title}
          </h2>
          {price && (
            <p className="text-sm font-normal text-[#131214]">{price}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 flex-shrink-0">
        {statusIndicator && variant === 'withStatusIndicator' && (
          <div className="flex items-center gap-2 mr-2">
            <div
              className={`w-2 h-2 rounded-full ${
                statusIndicator === 'online' ? 'bg-green-500' : 'bg-gray-400'
              }`}
            />
            <span className="text-xs text-gray-500">
              {statusIndicator === 'online' ? 'Online' : 'Offline'}
            </span>
          </div>
        )}

        {icons.map((icon, index) => (
          <button
            key={index}
            onClick={icon.onClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-gray-900"
            aria-label={icon.label || 'Action'}
          >
            {icon.component || (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={icon.path || 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'}
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default HeaderBar

