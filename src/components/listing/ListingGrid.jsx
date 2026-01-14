import React from 'react'
import ListingCard from './ListingCard'

const ListingGrid = ({
  listings = [],
  columns = { mobile: 1, tablet: 2, desktop: 4 },
  gapX = 2,
  gapY = 40,
  onCardClick,
  onWishlistToggle,
  className = '',
  ...props
}) => {
  // Map column numbers to Tailwind classes
  const colClassMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4'
  }

  const gridCols = {
    mobile: colClassMap[columns.mobile] || 'grid-cols-1',
    tablet: `md:${colClassMap[columns.tablet] || 'grid-cols-2'}`,
    desktop: `lg:${colClassMap[columns.desktop] || 'grid-cols-4'}`
  }

  // Gap mapping
  const gapXClasses = {
    2: 'gap-x-1',
    4: 'gap-x-4',
    6: 'gap-x-6',
    8: 'gap-x-8',
    10: 'gap-x-10',
    40: 'gap-x-10' // 40px = gap-x-10 (2.5rem)
  }

  const gapYClasses = {
    2: 'gap-y-2',
    4: 'gap-y-4',
    6: 'gap-y-6',
    8: 'gap-y-8',
    40: 'gap-y-10' // 40px = gap-y-10 (2.5rem)
  }

  const gridClasses = `grid ${gridCols.mobile} ${gridCols.tablet} ${gridCols.desktop} ${gapXClasses[gapX] || 'gap-x-2'} ${gapYClasses[gapY] || 'gap-y-2'}`

  return (
    <div className={`${gridClasses} ${className}`} {...props}>
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          listing={listing}
          variant={listing.variant || 'default'}
          onWishlistToggle={onWishlistToggle}
          onClick={() => onCardClick && onCardClick(listing)}
        />
      ))}
    </div>
  )
}

export default ListingGrid
