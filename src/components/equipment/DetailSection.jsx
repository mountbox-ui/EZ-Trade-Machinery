import React from 'react'

/**
 * Reusable collapsible detail section component
 * @param {string} title - The section title
 * @param {boolean} isExpanded - Whether the section is expanded
 * @param {function} onToggle - Function to call when section is toggled
 * @param {React.ReactNode} children - Content to display when expanded
 */
const DetailSection = ({ title, isExpanded, onToggle, children }) => {
  return (
    <div className="border-b border-[#E6E9EB]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 hover:bg-[#F4F6F7] transition-colors"
      >
        <span className="font-inter font-bold text-lg text-[#131214]">{title}</span>
        <svg
          className={`w-6 h-6 text-[#6E7375] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isExpanded && (
        <div className="p-4 pt-0 border-t border-[#E6E9EB]">
          {children}
        </div>
      )}
    </div>
  )
}

export default DetailSection

