import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileBottomNav from '../components/MobileBottomNav'
import StoreProfileBanner from '../components/StoreProfileBanner'
import FilterSidebar from '../components/listing/FilterSidebar'
import ListingToolbar from '../components/listing/ListingToolbar'
import StoreGrid from '../components/store/StoreGrid'
import Pagination from '../components/listing/Pagination'
import Caterpillar from '../assets/Auction-Img/Caterpillar_D6N.jpg'

// Mock data - Replace with actual API data
const mockListings = [
  {
    id: 1,
    title: 'Caterpillar 320D Excavator',
    price: 115000,
    year: 2018,
    condition: 'Like new',
    location: 'Florida, USA',
    image: Caterpillar,
    sellerName: 'ABC',
    hoursUsed: 3500,
    variant: 'default',
    isNegotiable: true
  },
  {
    id: 2,
    title: 'Komatsu PC210LC-10 Excavator',
    price: 116000,
    year: 2019,
    condition: 'Excellent condition',
    location: 'Texas, USA',
    image: Caterpillar,
    sellerName: 'ABC',
    hoursUsed: 2800,
    variant: 'default'
  },
  {
    id: 3,
    title: 'John Deere 310 Backhoe Loader',
    price: 45300,
    year: 2020,
    condition: 'Good condition',
    location: 'California, USA',
    image: Caterpillar,
    sellerName: 'ABC',
    hoursUsed: 1200,
    variant: 'default',
    isNegotiable: true
  },
  {
    id: 4,
    title: 'Hitachi ZX330LC-5 Excavator',
    price: 180200,
    year: 2017,
    condition: 'Fair condition',
    location: 'New York, USA',
    image: Caterpillar,
    sellerName: 'ABC',
    hoursUsed: 4200,
    variant: 'default'
  },
  {
    id: 5,
    title: 'Caterpillar 320D Excavator',
    price: 199000,
    year: 2010,
    condition: 'Fair condition',
    location: 'California, USA',
    image: Caterpillar,
    sellerName: 'ABC',
    hoursUsed: 3500,
    variant: 'default'
  },
  {
    id: 6,
    title: 'Komatsu PC210LC-10 Excavator',
    price: 250000,
    year: 2015,
    condition: 'Good condition',
    location: 'Texas, USA',
    image: Caterpillar,
    sellerName: 'ABC',
    hoursUsed: 2800,
    variant: 'default'
  },
  {
    id: 7,
    title: 'John Deere 310 Backhoe Loader',
    price: 45000,
    year: 2018,
    condition: 'Excellent condition',
    location: 'Florida, USA',
    image: Caterpillar,
    sellerName: 'ABC',
    hoursUsed: 1200,
    variant: 'default'
  },
  {
    id: 8,
    title: 'Hitachi ZX350LC-5 Excavator',
    price: 140000,
    year: 2012,
    condition: 'Good condition',
    location: 'New York, USA',
    image: Caterpillar,
    sellerName: 'ABC',
    hoursUsed: 4200,
    variant: 'default'
  }
]

const MyStore = () => {
  const [filters, setFilters] = useState({
    category: [],
    condition: [],
    priceRange: [0, 500000],
    manufacturer: [],
    yearRange: [1990, 2024],
    location: [],
    hoursUsed: [0, 10000]
  })
  const [listings] = useState(mockListings)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [sortValue, setSortValue] = useState('Most Relevant')
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)

  const navLinks = [
    'Home',
    'Auctions',
    'Categories',
    'Deals',
    'Want to Buy',
    'Financing',
    'Shipping'
  ]
  const topLinks = [
    'Track Order',
    'Help & Support',
    'Get Verified'
  ]

  const itemsPerPage = 12
  const totalPages = Math.ceil(listings.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedListings = listings.slice(startIndex, endIndex)

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value
    }))
    setCurrentPage(1) // Reset to first page when filters change
  }

  const handleSearch = (value) => {
    // Handle search logic
    console.log('Search:', value)
  }

  const handleCardClick = (id) => {
    // Handle card click navigation
    console.log('Card clicked:', id)
  }

  const handleWishlistToggle = (id, isFavorite) => {
    // Handle wishlist toggle
    console.log('Wishlist toggled:', id, isFavorite)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      <Navbar />

      {/* Store Profile Banner */}
      <StoreProfileBanner
        sellerName="Abc seller"
        memberSince="Jan 2023"
        isVerified={true}
      />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-[60px]">
        {/* Mobile Filter Toggle - Only visible on mobile */}
        <div className="lg:hidden mb-4">
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(true)}
            className="w-full py-3 px-4 bg-[#F4F6F7] border border-[#E6E9EB] rounded-[8px] text-[#131214] font-inter text-[14px] font-medium flex items-center justify-between"
          >
            <span>Filters</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>

        {/* Mobile Filter Drawer */}
        {isMobileFilterOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)} />
            <div className="absolute inset-y-0 left-0 w-full max-w-xs bg-white shadow-xl">
              <div className="flex items-center justify-between p-4 border-b border-[#E6E9EB]">
                <h2 className="text-[#131214] font-inter text-[20px] font-bold">Filters</h2>
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-2 hover:bg-[#F4F6F7] rounded-[8px]"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="overflow-y-auto h-[calc(100%-80px)]">
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  variant="mobile-drawer"
                  className="!relative !w-full !max-w-none shadow-none"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar - Hidden on mobile, shown on desktop */}
          <aside className="hidden lg:block">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
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

            {/* Store Grid */}
            <StoreGrid
              listings={paginatedListings}
              columns={{ mobile: 1, tablet: 2, desktop: 4 }}
              gapX={2}
              gapY={40}
              onCardClick={handleCardClick}
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
      </main>

      <Footer />
      <MobileBottomNav navLinks={navLinks} topLinks={topLinks} />
    </div>
  )
}

export default MyStore

