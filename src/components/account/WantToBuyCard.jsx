import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ClockIcon } from '@heroicons/react/24/outline'

/**
 * Reusable card for "Want to Buy" listings matching the account design.
 * 
 * Displays equipment requests with tags, description, details, offers, price limit, views, and expiry.
 */
const WantToBuyCard = ({
  request,
  className = '',
  disableClick = false,
  ...props
}) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    if (!disableClick && request.id) {
      navigate(`/account/want-to-buy/${request.id}`)
    }
  }
  const {
    equipmentName,
    tags = [],
    category,
    description,
    yearRange,
    quantity,
    planningToBuy,
    offersCount = 0,
    priceLimit,
    views = 0,
    expiresDate
  } = request

  // Get badge styling based on variant
  const getBadgeStyle = (tag) => {
    const badgeVariants = {
      'Active': 'bg-[#DCFCE7] text-[#008236] font-inter text-sm font-normal leading-5 tracking-[-0.15px] inline-flex items-center whitespace-nowrap rounded-[4px]',
      'Equipment': 'bg-[#F6B80033] rounded-[4px]  text-[#2C2C2C] font-inter text-sm font-normal leading-5 tracking-[-0.15px] inline-flex items-center whitespace-nowrap',
      'Parts': 'bg-[#E8F1FF] text-[#133E87] font-inter text-sm font-normal leading-5 tracking-[-0.15px] inline-flex items-center whitespace-nowrap rounded-[4px]',
      'Deals': 'bg-[#FFF1F1] text-[#D32F2F] font-inter text-sm font-normal leading-5 tracking-[-0.15px] inline-flex items-center whitespace-nowrap rounded-[4px]',
      'Auction': 'bg-[#F3E8FF] text-[#7B1FA2] font-inter text-sm font-normal leading-5 tracking-[-0.15px] inline-flex items-center whitespace-nowrap rounded-[4px]',
      'Default': 'bg-[#F4F6F7] text-[#6E7375] font-inter text-sm font-normal leading-5 tracking-[-0.15px] inline-flex items-center whitespace-nowrap rounded-[4px]'
    }

    return badgeVariants[tag] || badgeVariants['Default']
  }

  // Parse price limit to extract amount and label
  const parsePriceLimit = (priceLimit) => {
    if (!priceLimit) return { amount: null, label: null }
    
    // Extract amount (everything before "Price Limit")
    const match = priceLimit.match(/^([^P]+?)\s*Price\s*Limit$/i)
    if (match) {
      return {
        amount: match[1].trim(),
        label: 'Price Limit'
      }
    }
    
    // Fallback: return as is
    return {
      amount: priceLimit,
      label: null
    }
  }

  const priceInfo = parsePriceLimit(priceLimit)

  return (
    <div 
      className={`bg-white rounded-[12px] p-3 sm:p-4 border border-[#E8EBEB] transition-shadow ${disableClick ? '' : 'hover:shadow-md cursor-pointer'} ${className}`} 
      onClick={handleCardClick}
      {...props}
    >
      {/* Equipment Name, Tags, and Price on Same Line */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
        {/* Left: Equipment Name and Tags */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-[1.375rem] flex-1">
          {/* Equipment Name */}
          <h3 className="text-lg sm:text-xl font-bold text-[#131214] font-inter">
            {equipmentName}
          </h3>
          
          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap sm:flex-shrink-0">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`${getBadgeStyle(tag)} px-2 sm:px-3 py-1 text-xs sm:text-sm`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Price Limit */}
        {priceInfo.amount && (
          <div className="flex flex-col items-start sm:items-end flex-shrink-0">
            <span className="text-sm sm:text-base font-bold text-[#131214] font-inter">
              {priceInfo.amount}
            </span>
            {priceInfo.label && (
              <span className="text-xs text-[#898D8F] font-inter">
                {priceInfo.label}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Category Heading */}
      {category && (
        <p className="text-[#6E7375] font-inter text-xs sm:text-sm font-medium leading-none tracking-normal mb-1">
          {category}
        </p>
      )}

      {/* Description */}
      <p className="text-[#131214] font-inter text-sm sm:text-base font-normal leading-5 sm:leading-6 tracking-normal mb-3 sm:mb-4 line-clamp-2">
        {description}
      </p>

      {/* Details Grid: Year, Quantity, Planning to Buy */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3 mb-3">
        {yearRange && (
          <div>
            <span className="text-[#6E7375] font-inter text-xs sm:text-sm font-medium leading-none tracking-normal block mb-1">Year:</span>
            <span className="text-[#131214] font-inter text-sm sm:text-base font-normal leading-5 sm:leading-6 tracking-normal">{yearRange}</span>
          </div>
        )}
        {quantity && (
          <div>
            <span className="text-[#6E7375] font-inter text-xs sm:text-sm font-medium leading-none tracking-normal block mb-1">Quantity:</span>
            <span className="text-[#131214] font-inter text-sm sm:text-base font-normal leading-5 sm:leading-6 tracking-normal">{quantity}</span>
          </div>
        )}
        {planningToBuy && (
          <div>
            <span className="text-[#6E7375] font-inter text-xs sm:text-sm font-medium leading-none tracking-normal block mb-1">Planning to Buy:</span>
            <span className="text-[#131214] font-inter text-sm sm:text-base font-normal leading-5 sm:leading-6 tracking-normal">{planningToBuy}</span>
          </div>
        )}

        {offersCount > 0 && (
          <div>
            <span className="text-[#6E7375] font-inter text-xs sm:text-sm font-medium leading-none tracking-normal block mb-1">Responses:</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00A63E]"></div>
              <span className="text-[#131214] font-inter text-sm sm:text-base font-bold leading-none tracking-normal">
                {offersCount} {offersCount === 1 ? 'offer' : 'offers'}
              </span>
            </div>
          </div>
        )}

        
      </div>

      {/* Offers Count with Green Dot */}
      

      {/* Footer: Expires (left) and Views (right) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 pt-3 sm:pt-4 border-t border-[#E8EBEB]">
        {expiresDate && (
          <div className="flex items-center gap-2">
            <ClockIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#898D8F]" />
            <span className="text-xs text-[#898D8F] font-inter">
              Expires: {expiresDate}
            </span>
          </div>
        )}
        <span className="text-xs text-[#898D8F] font-inter">
          {views} {views === 1 ? 'view' : 'views'}
        </span>
      </div>
    </div>
  )
}

export default WantToBuyCard

