import React from 'react'
import EllipseIcon from '../../assets/social_media_icons/Ellipse.svg'

/**
 * Reusable card for listing items matching the design system.
 *
 * Variants:
 * - default: standard listing card
 * - featured: visually emphasized (e.g., promoted / featured)
 * - sold: sold state with overlay
 * - hovered: hover effects
 */
const ListingCard = ({
  listing,
  variant = 'default',
  className = '',
  ...props
}) => {

  const variants = {
    default: 'bg-[#F9FAFB]',
    featured: 'bg-white',
    sold: 'bg-white opacity-60 relative',
    hovered: 'bg-white'
  }

  const containerClasses = `group cursor-pointer md:b-card-hover hover:b-card-hover-none rounded-[12px] p-4 ${variants[variant] || variants.default} ${className}`

  const {
    id,
    title,
    price,
    year,
    condition,
    location,
    image,
    sellerName = 'ABC',
    isNegotiable = false
  } = listing || {}

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
            className="w-full h-full object-cover aspect-[4/3] rounded-[8px] transition-transform duration-300 group-hover:scale-105"
          />
        )}
        
        {/* Sold Badge */}
        {variant === 'sold' && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold font-inter z-10">
            SOLD
          </div>
        )}

        {/* Featured Badge */}
        {variant === 'featured' && (
          <div className="absolute top-3 left-3 bg-[#FFB703] text-[#2C2C2C] px-3 py-1 rounded-full text-xs font-bold font-inter z-10">
            FEATURED
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1">
        <h3 className="font-inter font-bold text-base text-[#131214] line-clamp-1">
          {title}
        </h3>
        <div className="flex flex-wrap items-center text-xs font-inter text-[#6E7375] gap-1">
          {year && <span>{year}</span>}
          {year && (condition || location) && (
            <img src={EllipseIcon} alt="" className="mx-0.5" />
          )}
          {condition && <span>{condition}</span>}
          {condition && location && (
            <img src={EllipseIcon} alt="" className="mx-0.5" />
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

export default ListingCard
