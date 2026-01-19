import React from 'react'
import FavoriteIcon from '../FavoriteIcon'
import EllipseIcon from '../../assets/social_media_icons/Ellipse.svg'

/**
 * Reusable card for "My Ads" listings matching the account design.
 *
 * Variants:
 * - default: standard active ad
 * - highlighted: visually emphasized (e.g., promoted / featured)
 * - pending: softer, pending-review style
 */
const MyAdsCard = ({
  listing,
  variant = 'default',
  isNegotiable = false,
  className = '',
  onWishlistToggle,
  ...props
}) => {
  const isFavorite = listing?.isFavorite || false

  const handleFavoriteClick = (e) => {
    e.stopPropagation() // Prevent card click from triggering
    const newFavoriteState = !isFavorite
    if (onWishlistToggle) {
      onWishlistToggle(listing.id, newFavoriteState)
    }
  }
  const variants = {
    default: 'bg-white',
    highlighted: 'bg-white',
    pending: 'bg-[#F4F6F7]'
  }

  const containerClasses = `rounded-[12px] p-4 ${variants[variant] || variants.default} ${className}`

  const {
    title,
    year,
    condition,
    location,
    price,
    image,
    sellerName = 'Abc seller'
  } = listing

  const sellerInitials = sellerName
    ? sellerName
        .split(' ')
        .map((word) => word[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'AS'

  return (
    <div className={containerClasses} {...props}>
      {/* Seller header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#133E87] flex items-center justify-center text-[10px] font-bold text-white">
            {sellerInitials}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#131214]">{sellerName}</span>
            <button
              type="button"
              className="text-[11px] font-medium text-[var(--semantic-fg-link,#6E7375)] text-left"
            >
              Visit store
            </button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative rounded-[8px] overflow-hidden mb-3">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover aspect-[4/3] rounded-[8px]"
          />
        )}
        
        {/* Favorite Icon - Always visible, toggles between outline and filled */}
        <button
          type="button"
          onClick={handleFavoriteClick}
          className="absolute top-2 right-3 z-20 p-2 hover:bg-white rounded-full transition-all duration-200 hover:scale-110"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <FavoriteIcon 
            isFavorite={isFavorite}
            showDropShadow={true}
          />
        </button>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1">
        <h3 className="font-inter font-bold text-base text-[#131214] line-clamp-1">
          {title}
        </h3>
        <div className="flex flex-wrap items-center text-xs font-inter text-[#6E7375] gap-1">
          {year && <span>{year}</span>}
          {year && (condition || location) && (
            <img src={EllipseIcon} alt="" className="mx-1" />
          )}
          {condition && <span>{condition}</span>}
          {condition && location && (
            <img src={EllipseIcon} alt="" className="mx-1" />
          )}
          {location && <span>{location}</span>}
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="font-bold text-[#131214] text-base">
            {price ? `$${price}` : ''}
          </span>
          {isNegotiable && (
            <div className="flex items-center gap-1 text-green-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-xs font-medium">Negotiable</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyAdsCard

