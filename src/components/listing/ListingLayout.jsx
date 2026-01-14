import React, { useState } from 'react'
import FilterSidebar from './FilterSidebar'
import ListingToolbar from './ListingToolbar'
import ListingGrid from './ListingGrid'
import Pagination from './Pagination'

const ListingLayout = ({
  listings = [],
  filters = {},
  onFilterChange,
  onSearch,
  onCardClick,
  onWishlistToggle,
  className = '',
  ...props
}) => {
  const [searchValue, setSearchValue] = useState('')
  const [sortValue, setSortValue] = useState('Most Relevant')
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 12
  const totalPages = Math.ceil(listings.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedListings = listings.slice(startIndex, endIndex)

  const handleSearch = (value) => {
    if (onSearch) {
      onSearch(value)
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`w-full ${className}`} {...props}>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar - Hidden on mobile, shown on desktop */}
        <aside className="hidden lg:block">
          <FilterSidebar
            filters={filters}
            onFilterChange={onFilterChange}
            variant="desktop"
          />
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <ListingToolbar
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            onSearch={handleSearch}
            sortValue={sortValue}
            onSortChange={setSortValue}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            resultCount={listings.length}
            variant="full-width"
            className="mb-6"
          />

          {/* Listing Grid */}
          <ListingGrid
            listings={paginatedListings}
            columns={{ mobile: 1, tablet: 2, desktop: 4 }}
            gapX={2}
            gapY={40}
            onCardClick={onCardClick}
            onWishlistToggle={onWishlistToggle}
            className="mb-8"
          />

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              variant="numbers"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ListingLayout
