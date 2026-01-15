import React from 'react'
import Button from '../Button'
import chatIcon from '../../assets/account-icons/chat-icon.svg'

/**
 * Response card component for displaying offers/responses to a "Want to Buy" post
 */
const WantToBuyResponseCard = ({
  response,
  className = ''
}) => {
  const {
    userName,
    userAvatar,
    timeAgo,
    equipmentName,
    description,
    price,
    onChatClick
  } = response

  return (
    <div className={`bg-white rounded-[12px] border border-[#E8EBEB] px-3 py-4 sm:px-4 sm:py-6 ${className}`}>
      <div className="relative">
        {/* Top Row: Avatar, User Info, and Price */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="flex items-start gap-3 flex-1">
            {/* User Avatar */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#F4F6F7] flex items-center justify-center border border-[#E8EBEB] overflow-hidden">
                {userAvatar ? (
                  <img src={userAvatar} alt={userName} className="w-full h-full rounded-full object-cover" />
                ) : (
                  <span className="text-[#6E7375] font-inter text-sm font-medium">
                    {userName?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                )}
              </div>
            </div>

            {/* User Name and Time */}
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[#131214] font-inter text-sm sm:text-[16px] font-medium">
                {userName}
              </span>
              <span className="text-[#6E7375] font-inter text-xs sm:text-[14px] font-medium">
                {timeAgo}
              </span>
            </div>
          </div>

          {/* Price in top right */}
          <div className="flex-shrink-0 sm:ml-auto">
            <span className="text-[#131214] font-inter text-sm sm:text-base font-bold">
              {price}
            </span>
          </div>
        </div>

        {/* Equipment Name, Description, and Chat Button - Start from under avatar (aligned with avatar's left edge) */}
        <div className="ml-0 flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0">
          {/* Equipment Name and Description */}
          <div className="flex-1">
            <h4 className="text-[#131214] font-inter text-sm sm:text-base font-bold mb-2">
              {equipmentName}
            </h4>
            <p className="text-[#6E7375] font-inter text-xs sm:text-sm font-normal leading-5 mb-4 sm:mb-0 lg:mb-4">
              {description}
            </p>
          </div>

          {/* Chat Button */}
          <div className="flex justify-start lg:justify-end">
            <Button
              variant="primary"
              onClick={onChatClick}
              className="flex items-center gap-2 rounded-[48px] !font-bold w-full sm:w-auto"
            >
              <img src={chatIcon} alt="Chat" className="w-4 h-4" />
              Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WantToBuyResponseCard

