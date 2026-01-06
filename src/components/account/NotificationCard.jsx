import React from 'react'

const NotificationCard = ({
  icon,
  iconBgColor = 'bg-blue-500',
  heading,
  message,
  timestamp,
  isUnread = false,
  variant, // 'read' or 'unread'
  className = ''
}) => {
  // Determine variant: use explicit variant prop, or derive from isUnread for backward compatibility
  const notificationVariant = variant || (isUnread ? 'unread' : 'read')
  
  // Variant-based styling
  const variantStyles = {
    unread: {
      container: 'bg-[#FFFFFF] rounded-[14px] border border-[#DADDDE]',
      heading: 'text-[#2C2C2C] font-inter text-base font-bold leading-[1.2] tracking-normal',
      message: 'text-[#4A5565] font-inter text-sm font-normal leading-[1.5] tracking-normal',
      timestamp: 'text-[#6A7282] font-inter text-sm font-normal leading-5 tracking-[-0.15px]'
    },
    read: {
      container: 'rounded-[14px] border border-[#F3F4F6] bg-[#F4F6F7]',
      heading: 'text-[#2C2C2C] font-inter text-base font-bold leading-[1.2] tracking-normal',
      message: 'text-[#4A5565] font-inter text-sm font-normal leading-[1.5] tracking-normal',
      timestamp: 'text-[#6A7282] font-inter text-sm font-normal leading-5 tracking-[-0.15px]'
    }
  }
  
  const styles = variantStyles[notificationVariant]
  
  return (
    <div className={`flex items-start gap-4 p-4 rounded-lg border hover:shadow-md transition-shadow relative cursor-pointer ${styles.container} ${className}`}>
      {/* Icon */}
      <div className={`flex-shrink-0 w-10 h-10 rounded-full ${iconBgColor} flex items-center justify-center`}>
        {icon}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        {heading && (
          <h3 className={`text-sm mb-1 ${styles.heading}`}>{heading}</h3>
        )}
        <p className={`text-sm leading-relaxed ${styles.message}`}>{message}</p>
      </div>
      
      {/* Timestamp and Unread Indicator - Right side */}
      <div className="flex-shrink-0 flex items-start gap-2">
        <p className={`text-xs whitespace-nowrap ${styles.timestamp}`}>{timestamp}</p>
        {notificationVariant === 'unread' && (
          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#FFB703] mt-1"></div>
        )}
      </div>
    </div>
  )
}

export default NotificationCard

