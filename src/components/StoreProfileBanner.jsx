import React from 'react'
import storeLogo from '../assets/listing/store-logo.png'
import bgStore from '../assets/listing/bg-store.png'
import verifiedIcon from '../assets/listing/verify.svg'

/**
 * Store Profile Banner component for displaying seller/store information
 */
const StoreProfileBanner = ({
  sellerName = 'Abc seller',
  memberSince = 'Jan 2023',
  isVerified = true,
  className = '',
  ...props
}) => {
  const sellerInitials = sellerName
    ? sellerName
        .split(' ')
        .map((word) => word[0])
        .join('')
        .slice(0, 1)
        .toUpperCase()
    : 'A'

  return (
    <div
      className={`w-full h-[186px] px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative ${className}`}
      style={{ backgroundImage: `url(${bgStore})` }}
      {...props}
    >
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between gap-4">
        {/* Left: Store Logo and Info */}
        <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0 lg:relative lg:top-[48px] lg:left-[60px]">
          {/* Store Logo */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[130px] lg:h-[130px] rounded-full bg-[#133E87] flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img 
              src={storeLogo} 
              alt="Store logo" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Seller Info */}
          <div className="flex-1 min-w-0">
            <h1 className="text-white font-inter text-[16px] sm:text-[20px] lg:text-[24px] font-bold mb-1 lg:mt-2">
              {sellerName}
            </h1>
            <div className="flex flex-col items-start gap-1">
              <span className="text-white/70 font-inter text-[14px] sm:text-[16px] lg:text-[18px] font-normal">
                Member since {memberSince}
              </span>
              {isVerified && (
                <span className="inline-flex items-center gap-1 text-white/70 text-[12px] sm:text-[14px] font-normal">
                  <img src={verifiedIcon} alt="Verified" className="w-3 h-3 sm:w-[14px] sm:h-[14px]" />
                  Verified
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right: User Avatar */}
       
      </div>
    </div>
  )
}

export default StoreProfileBanner
