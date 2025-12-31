import React, { useState, useEffect } from 'react'
import banner1 from '../assets/Banner-Img/Banner-1.jpg'

// import banner3 from '../assets/Banner-Img/Banner-3.jpg'

const slides = [
  {
    id: 1,
    titleTop: 'HIRES HEAVY',
    titleHighlight: "EQUIPMENT'S",
    subtitle: 'AND SUPPLY',
    description: 'CONSTRUCTION MATERIALS',
    imageUrl: banner1,
  },
  {
    id: 2,
    titleTop: 'BUY & SELL',
    titleHighlight: 'HEAVY MACHINERY',
    subtitle: 'ACROSS THE GLOBE',
    description: 'TRUSTED TRADERS & VERIFIED DEALERS',
    imageUrl: banner1,
  },
  {
    id: 3,
    titleTop: 'EASY FINANCING',
    titleHighlight: 'FAST DELIVERY',
    subtitle: 'NATIONWIDE SUPPORT',
    description: 'GET EQUIPMENT WHEREVER YOU OPERATE',
    imageUrl: banner1,
  },
]

const AUTO_SLIDE_INTERVAL = 6000

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, AUTO_SLIDE_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const activeSlide = slides[currentIndex]

  return (
    <section className="w-full flex justify-center md:pt-[40px] pt-4 pb-4">
      <div className="relative w-full overflow-hidden rounded-md">
        {/* Background image - content is already in the images */}
        <div
          className="h-[260px] sm:h-[280px] md:h-[320px] lg:h-[360px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${activeSlide.imageUrl})`,
          }}
        />

        {/* Content overlay - uncomment if needed */}
        {/* <div className="absolute inset-0 flex items-center px-6 md:px-12">
          <div className="max-w-lg text-white">
            <p className="text-lg sm:text-xl font-semibold tracking-wide">
              {activeSlide.titleTop}
            </p>
            <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              <span className="block text-[#FFB703]">{activeSlide.titleHighlight}</span>
            </h2>
            <div className="mt-4 h-[2px] w-24 bg-white" />
            <p className="mt-4 text-lg sm:text-xl font-semibold text-[#FFB703]">
              {activeSlide.subtitle}
            </p>
            <p className="text-xs sm:text-sm tracking-[0.12em] uppercase text-gray-100">
              {activeSlide.description}
            </p>
          </div>
        </div> */}

        {/* Navigation arrows */}
        <button
          type="button"
          onClick={goToPrev}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-r rounded-l-none
 bg-white shadow text-gray-700 hover:bg-gray-100"
        >
          <span className="sr-only">Previous</span>
          &#8249;
        </button>

        <button
          type="button"
          onClick={goToNext}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-l rounded-r-none
 bg-white shadow text-gray-700 hover:bg-gray-100"
        >
          <span className="sr-only">Next</span>
          &#8250;
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-6 bg-[#FFB703]' : 'w-2 bg-white/60'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSlider