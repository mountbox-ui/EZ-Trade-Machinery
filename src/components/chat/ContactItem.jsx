import React from 'react'
import Avatar from '../Avatar'
import starIcon from '../../assets/account-icons/star.png'

const ContactItem = ({
  name,
  messagePreview,
  time,
  avatar,
  equipmentName,
  unreadCount = 0,
  isActive = false,
  isVIP = false,
  variant = 'default',
  onClick,
  className = '',
  ...props
}) => {
  // Variant system - all variants use same design for now
  // Clients can customize variants by modifying the variantStyles object
  const variants = {
    default: {
      container: isActive ? 'bg-[#F4F6F7]' : 'hover:bg-gray-50',
      badge: null
    },
    vip: {
      container: isActive ? 'bg-[#F4F6F7]' : 'hover:bg-gray-50',
      badge: null
    },
    buying: {
      container: isActive ? 'bg-[#F4F6F7]' : 'hover:bg-gray-50',
      badge: null
    },
    selling: {
      container: isActive ? 'bg-[#F4F6F7]' : 'hover:bg-gray-50',
      badge: null
    }
  }

  // Determine variant (priority: explicit variant > isVIP > type)
  let activeVariant = variant
  if (activeVariant === 'default' && isVIP) {
    activeVariant = 'vip'
  }

  const variantStyles = variants[activeVariant] || variants.default

  return (
    <div
      onClick={onClick}
      className={`flex items-start gap-3 py-5 px-4 border-b border-black/10 cursor-pointer transition-colors ${variantStyles.container} ${className}`}
      {...props}
    >
      <div className="relative flex-shrink-0">
        <Avatar src={avatar} alt={name} variant="chat" size="chat" />
        {(isVIP || activeVariant === 'vip') && (
          <div className="absolute bottom-0 right-0">
            <img 
              src={starIcon} 
              alt="VIP" 
              className="w-5 h-5"
            />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            {equipmentName && (
              <h2 className={`text-base font-bold font-inter leading-none tracking-normal truncate mb-1 ${
                isActive ? 'text-[#6E7375] font-medium' : 'text-[#131214]'
              }`}>
                {equipmentName}
              </h2>
            )}
            <h3 className="text-xs font-inter font-medium leading-none tracking-normal text-[#6E7375] truncate pb-[10px]">
              {name}
            </h3>
          </div>
          <span className="text-xs text-[#D67507] font-inter font-normal leading-none tracking-normal flex-shrink-0 ml-2">
            {time}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-inter font-medium text-[#6E7375] truncate">
            {messagePreview}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactItem

