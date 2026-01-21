import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileBottomNav from '../components/MobileBottomNav'
import FeedItem from '../components/FeedItem'
import Caterpillar from '../assets/Auction-Img/Caterpillar_D6N.jpg'
import JohnDeere from '../assets/Auction-Img/Johan_Deere_650K.jpg'
import Komatsu from '../assets/Auction-Img/Komatsu_PC360LC.jpg'
import Volvo from '../assets/Auction-Img/Volvo_EEC380.jpg'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import ChevronDownSvg from '../assets/chevron-down.svg'
import ChevronUpSvg from '../assets/chevron-up.svg'

const Feed = () => {
  const navigate = useNavigate()
  const feedContainerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

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

  // Sample feed items - replace with actual data
  const feedItems = [
    {
      id: 1,
      title: 'Caterpillar 320D Excavator',
      year: '2019',
      condition: 'Excellent condition',
      location: 'California, USA',
      price: '120,000',
      image: Caterpillar,
      views: 43,
      likes: 12,
      isLiked: false
    },
    {
      id: 2,
      title: 'John Deere 850K Dozer',
      year: '2014',
      condition: 'Good condition',
      location: 'Nevada, USA',
      price: '65,000',
      image: JohnDeere,
      views: 28,
      likes: 8,
      isLiked: false
    },
    {
      id: 3,
      title: 'Komatsu D65 Dozer',
      year: '2018',
      condition: 'Excellent condition',
      location: 'Arizona, USA',
      price: '35,000',
      image: Komatsu,
      views: 56,
      likes: 15,
      isLiked: false
    },
    {
      id: 4,
      title: 'Volvo EC950F Crawler',
      year: '2020',
      condition: 'Like new',
      location: 'Texas, USA',
      price: '185,000',
      image: Volvo,
      views: 67,
      likes: 22,
      isLiked: false
    }
  ]

  const scrollToIndex = (index) => {
    if (feedContainerRef.current) {
      const item = feedContainerRef.current.children[index]
      if (item) {
        item.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setCurrentIndex(index)
      }
    }
  }

  const handleNext = () => {
    if (currentIndex < feedItems.length - 1) {
      scrollToIndex(currentIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1)
    }
  }

  const handleWheel = (e) => {
    e.preventDefault()
    if (e.deltaY > 0) {
      handleNext()
    } else {
      handlePrevious()
    }
  }

  // Track scroll position to update currentIndex
  const handleScroll = () => {
    if (feedContainerRef.current) {
      const container = feedContainerRef.current
      const scrollTop = container.scrollTop
      const children = Array.from(container.children)

      // Find which item is most visible
      let maxVisible = 0
      let maxIndex = 0

      children.forEach((child, index) => {
        const rect = child.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
        const visibleHeight = Math.min(rect.bottom, containerRect.bottom) - Math.max(rect.top, containerRect.top)
        const visibleRatio = visibleHeight / rect.height

        if (visibleRatio > maxVisible) {
          maxVisible = visibleRatio
          maxIndex = index
        }
      })

      setCurrentIndex(maxIndex)
    }
  }

  return (
    <>
      <div className="flex flex-col h-[100dvh] lg:h-auto lg:block bg-black lg:bg-[#FFF]">
        <div className="flex-shrink-0 z-50 relative bg-[#2C2C2C] lg:bg-transparent">
          <Navbar />
        </div>

        <div
          ref={feedContainerRef}
          className="flex-1 flex flex-col h-full lg:h-auto lg:gap-6 overflow-y-auto snap-y snap-mandatory scrollbar-hide w-full lg:max-w-[1440px] mx-auto lg:px-4 lg:px-8 lg:py-[60px] relative"
          onScroll={handleScroll}
          onWheel={handleWheel}
        >
          {feedItems.map((item, index) => (
            <div key={item.id} className="snap-start snap-always flex justify-center h-full lg:h-auto w-full shrink-0">
              <div className="relative w-full h-full lg:w-auto lg:h-auto">
                <FeedItem
                  item={item}
                  isActive={index === currentIndex}
                  onNavigate={() => navigate(`/equipment/${item.id}`)}
                />

                {/* Navigation Arrows - Far Right (only show for active item) */}
                {index === currentIndex && (
                  <div className="absolute right-[-190px] top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 hidden lg:flex">
                    {index > 0 && (
                      <button
                        onClick={handlePrevious}
                        className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all shadow-lg"
                        aria-label="Previous item"
                      >
                        <img src={ChevronUpSvg} alt="" className="w-6 h-6" />
                      </button>
                    )}
                    {index < feedItems.length - 1 && (
                      <button
                        onClick={handleNext}
                        className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all shadow-lg"
                        aria-label="Next item"
                      >
                        <img src={ChevronDownSvg} alt="" className="w-6 h-6" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
      <MobileBottomNav navLinks={navLinks} topLinks={topLinks} />
    </>
  )
}

export default Feed

