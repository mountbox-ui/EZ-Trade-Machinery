import React, { useState } from 'react'

const CheckboxGroup = ({
  options = [],
  selectedValues = [],
  onChange,
  className = '',
  searchable = false,
  searchPlaceholder = 'Search...',
  ...props
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredOptions = searchable
    ? options.filter(option =>
        typeof option === 'string'
          ? option.toLowerCase().includes(searchTerm.toLowerCase())
          : (option.label || option.value || option).toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options

  const handleToggle = (value) => {
    const newSelected = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value]
    onChange(newSelected)
  }

  const getLabel = (option) => {
    if (typeof option === 'string') return option
    return option.label || option.value || option
  }

  const getValue = (option) => {
    if (typeof option === 'string') return option
    return option.value || option
  }

  return (
    <div className={className} {...props}>
      {searchable && (
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-10 px-3 rounded-[8px] bg-[#F4F6F7] border border-[#E6E9EB] text-[#131214] font-inter text-[14px] mb-3 focus:outline-none focus:border-2 focus:border-[#6E7375] focus:shadow-[0_0_0_4px_#E9E9E9]"
        />
      )}
      <div>
        {filteredOptions.map((option, index) => {
          const value = getValue(option)
          const label = getLabel(option)
          const isSelected = selectedValues.includes(value)

          return (
            <label
              key={index}
              className="flex items-center justify-between cursor-pointer group"
            >
              <span className="text-[#131214] font-inter text-[16px] font-medium leading-[100%] tracking-[0] group-hover:text-[#6E7375] transition-colors py-4">
                {label}
              </span>
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleToggle(value)}
                className="w-6 h-6 rounded border-[#E6E9EB] text-[#FFB703] focus:ring-2 focus:ring-[#FFB703] focus:ring-offset-0 cursor-pointer"
              />
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default CheckboxGroup
