import React from 'react'

/**
 * Reusable detail row component for equipment details tables
 * @param {string} label - The label text (left side)
 * @param {string|number} value - The value text (right side)
 * @param {string} className - Additional CSS classes
 */
const DetailRow = ({ label, value, className = '' }) => {
  return (
    <div className={`flex items-center gap-6 my-2 ${className}`}>
      <div className="flex-1">
      <span className="font-inter text-md font-medium text-[#6E7375] my-1">{label}</span>
      </div>
      <div className="flex-1">
      <span className="font-inter text-md font-medium text-[#131214] my-1">{value}</span>
      </div>
    </div>
  )
}

export default DetailRow

