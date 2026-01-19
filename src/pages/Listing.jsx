import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileBottomNav from '../components/MobileBottomNav'
import ListingLayout from '../components/listing/ListingLayout'
import FilterSidebar from '../components/listing/FilterSidebar'
import Caterpillar from '../assets/Auction-Img/Caterpillar_D6N.jpg'
// Mock data - Replace with actual API data
const mockListings = [
  {
    id: 1,
    title: 'Caterpillar 320D Excavator',
    price: 199000,
    year: 2010,
    condition: 'Fair condition',
    location: 'California, USA',
    image: Caterpillar,
    sellerName: 'ABC',
    hoursUsed: 3500,
    variant: 'default',
    isFavorite: true
  },
  {
    id: 2,
    title: 'Komatsu PC210LC-10 Excavator',
    price: 250000,
    year: 2015,
    condition: 'Good condition',
    location: 'Texas, USA',
    image: Caterpillar,
    sellerName: 'XYZ Equipment',
    hoursUsed: 2800,
    variant: 'default',
    isNegotiable: true
  },
  {
    id: 3,
    title: 'John Deere 2R00000000000000',
    price: 45000,
    year: 2018,
    condition: 'Excellent condition',
    location: 'Florida, USA',
    image: Caterpillar,
    sellerName: 'Farm Equipment Co',
    hoursUsed: 1200,
    variant: 'default'
  },
  {
    id: 4,
    title: 'Hitachi ZX350LC-5 Excavator',
    price: 140000,
    year: 2012,
    condition: 'Good condition',
    location: 'New York, USA',
    image: Caterpillar,
    sellerName: 'Construction Supplies',
    hoursUsed: 4200,
    variant: 'default',
    isNegotiable: true,
    isFavorite: true
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
    sellerName: 'XYZ Equipment',
    hoursUsed: 2800,
    variant: 'default',
    isFavorite: true
  },
  {
    id: 7,
    title: 'John Deere 2R00000000000000',
    price: 45000,
    year: 2018,
    condition: 'Excellent condition',
    location: 'Florida, USA',
    image: Caterpillar,
    sellerName: 'Farm Equipment Co',
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
    sellerName: 'Construction Supplies',
    hoursUsed: 4200,
    variant: 'default',
    isFavorite: true
  },
  {
    id: 9,
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
    id: 10,
    title: 'Komatsu PC210LC-10 Excavator',
    price: 250000,
    year: 2015,
    condition: 'Good condition',
    location: 'Texas, USA',
    image: Caterpillar,
    sellerName: 'XYZ Equipment',
    hoursUsed: 2800,
    variant: 'default'
  },
  {
    id: 11,
    title: 'John Deere 2R00000000000000',
    price: 45000,
    year: 2018,
    condition: 'Excellent condition',
    location: 'Florida, USA',
    image: Caterpillar,
    sellerName: 'Farm Equipment Co',
    hoursUsed: 1200,
    variant: 'default'
  },
  {
    id: 12,
    title: 'Hitachi ZX350LC-5 Excavator',
    price: 140000,
    year: 2012,
    condition: 'Good condition',
    location: 'New York, USA',
    image: Caterpillar,
    sellerName: 'Construction Supplies',
    hoursUsed: 4200,
    variant: 'default'
  }
]

const Listing = () => {
  const navigate = useNavigate()
  const [filters, setFilters] = useState({
    category: [],
    condition: [],
    priceRange: [0, 500000],
    manufacturer: [],
    yearRange: [1990, 2024],
    location: [],
    hoursUsed: [0, 10000]
  })
  const [listings, setListings] = useState(mockListings.map(listing => ({ ...listing, isFavorite: listing.isFavorite || false })))
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    // In a real app, you would trigger a new API call here
  }

  const handleSearch = (searchTerm) => {
    // In a real app, you would trigger a search API call here
    console.log('Searching for:', searchTerm)
  }

  const handleCardClick = (listing) => {
    // Navigate to listing detail page
    navigate(`/equipment/${listing.id}`)
  }

  const handleWishlistToggle = (listingId, isFavorite) => {
    // Update favorite status
    setListings(prevListings =>
      prevListings.map(listing =>
        listing.id === listingId ? { ...listing, isFavorite } : listing
      )
    )
    // In a real app, you would make an API call here to save the favorite status
    console.log('Wishlist toggled:', listingId, isFavorite)
  }

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

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
      <Navbar />
      
      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
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

        <ListingLayout
          listings={listings}
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
          onCardClick={handleCardClick}
          onWishlistToggle={handleWishlistToggle}
        />
      </main>

      <Footer />
      <MobileBottomNav navLinks={navLinks} topLinks={topLinks} />
    </div>
  )
}

export default Listing
