import React from 'react'
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

/**
 * Reusable Favorite Icon component that shows outline or filled heart based on isFavorite state.
 * 
 * @param {boolean} isFavorite - Whether the item is favorited (defaults to false)
 * @param {string} className - Additional CSS classes
 * @param {string} variant - Icon variant: 'outline' (white outline) or 'filled' (red filled) - auto-selected based on isFavorite
 * @param {boolean} showDropShadow - Whether to show drop shadow (defaults to true)
 */
const FavoriteIcon = ({
  isFavorite = false,
  className = '',
  variant,
  showDropShadow = true,
  ...props
}) => {
  // Auto-select variant based on isFavorite if variant not explicitly provided
  const iconVariant = variant || (isFavorite ? 'filled' : 'outline')

  const baseClasses = 'w-5 h-5 transition-all duration-200'
  const dropShadowClass = showDropShadow ? 'drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]' : ''
  
  const iconClasses = `${baseClasses} ${dropShadowClass} ${className}`

  if (iconVariant === 'filled') {
    return (
      <HeartSolidIcon 
        className={`${iconClasses} text-red-500`}
        {...props}
      />
    )
  }

  return (
    <HeartOutlineIcon 
      className={`${iconClasses} stroke-2 text-white`}
      {...props}
    />
  )
}

export default FavoriteIcon
