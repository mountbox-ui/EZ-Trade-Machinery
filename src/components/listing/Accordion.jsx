import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Accordion = ({
  title,
  children,
  defaultOpen = false,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`border-t border-[#E6E9EB] ${className}`} {...props}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
      >
        <span className="text-[#131214] font-inter text-[18px] font-bold">
          {title}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 text-[#6E7375] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4">
          {children}
        </div>
      )}
    </div>
  )
}

export default Accordion
