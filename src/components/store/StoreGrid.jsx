import React from 'react'
import StoreCard from './StoreCard'

const StoreGrid = ({
  listings = [],
  columns = { mobile: 1, tablet: 2, desktop: 4 },
  gapX = 10,
  gapY = 2,
  onCardClick,
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

  // Gap mapping: gap-10 = 2.5rem = 40px, gap-2 = 0.5rem = 8px
  const gapXClasses = {
    2: 'gap-x-2',
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
    40: 'gap-y-10'
  }

  const gridClasses = `grid ${gridCols.mobile} ${gridCols.tablet} ${gridCols.desktop} ${gapXClasses[gapX] || 'gap-x-10'} ${gapYClasses[gapY] || 'gap-y-2'}`

  return (
    <div className={`${gridClasses} ${className}`} {...props}>
      {listings.map((listing) => (
        <StoreCard
          key={listing.id}
          listing={listing}
          variant={listing.variant || 'default'}
          onClick={() => onCardClick && onCardClick(listing.id)}
        />
      ))}
    </div>
  )
}

export default StoreGrid

