import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Button from '../Button'

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  variant = 'numbers',
  className = '',
  ...props
}) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && onPageChange) {
      onPageChange(page)
    }
  }

  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  if (variant === 'load-more') {
    return (
      <div className={`flex justify-center ${className}`} {...props}>
        {currentPage < totalPages && (
          <Button
            variant="primary"
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-8"
          >
            Load More
          </Button>
        )}
      </div>
    )
  }

  if (totalPages <= 1) return null

  const pageNumbers = getPageNumbers()

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`} {...props}>
      {/* Previous Button */}
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-[8px] border border-[#E6E9EB] transition-colors ${
          currentPage === 1
            ? 'bg-[#F4F6F7] text-[#C1C4C6] cursor-not-allowed'
            : 'bg-white text-[#131214] hover:bg-[#F4F6F7] cursor-pointer'
        }`}
        aria-label="Previous page"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-[#6E7375] font-inter text-[14px]"
              >
                ...
              </span>
            )
          }

          const isActive = page === currentPage

          return (
            <button
              key={page}
              type="button"
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-[8px] font-inter text-[14px] font-medium transition-colors ${
                isActive
                  ? 'bg-[#FFB703] text-[#2C2C2C]'
                  : 'bg-white text-[#131214] border border-[#E6E9EB] hover:bg-[#F4F6F7]'
              }`}
              aria-label={`Page ${page}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </button>
          )
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-[8px] border border-[#E6E9EB] transition-colors ${
          currentPage === totalPages
            ? 'bg-[#F4F6F7] text-[#C1C4C6] cursor-not-allowed'
            : 'bg-white text-[#131214] hover:bg-[#F4F6F7] cursor-pointer'
        }`}
        aria-label="Next page"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  )
}

export default Pagination
