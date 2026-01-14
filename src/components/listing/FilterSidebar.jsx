import React, { useState } from 'react'
import Accordion from './Accordion'
import CheckboxGroup from './CheckboxGroup'
import RangeSlider from './RangeSlider'
import filterIcon from '../../assets/listing/filter.svg'
import searchIcon from '../../assets/account-icons/Search_Icon.svg'
import Input from '../Input'

const FilterSidebar = ({
  filters = {},
  onFilterChange,
  variant = 'desktop',
  className = '',
  ...props
}) => {
  const categories = [
    'Motor Grader',
    'Dozer',
    'Excavator',
    'Backhoe',
    'Forklift',
    'Tractor',
    'Wheel Loader',
    'Dump Truck'
  ]

  const conditions = [
    'New',
    'Used',
    'Salvaged',
    'Refurbished',
    'For Parts'
  ]

  const manufacturers = [
    'Caterpillar',
    'John Deere',
    'Komatsu',
    'Hitachi',
    'Volvo',
    'Kubota'
  ]

  const locations = [
    'United States',
    'Canada',
    'Mexico',
    'Europe',
    'Asia'
  ]

  const handleCategoryChange = (selected) => {
    onFilterChange({ ...filters, category: selected })
  }

  const handleConditionChange = (selected) => {
    onFilterChange({ ...filters, condition: selected })
  }

  const handleManufacturerChange = (selected) => {
    onFilterChange({ ...filters, manufacturer: selected })
  }

  const handleLocationChange = (selected) => {
    onFilterChange({ ...filters, location: selected })
  }

  const handlePriceRangeChange = (range) => {
    onFilterChange({ ...filters, priceRange: range })
  }

  const handleYearRangeChange = (range) => {
    onFilterChange({ ...filters, yearRange: range })
  }

  const handleHoursRangeChange = (range) => {
    onFilterChange({ ...filters, hoursUsed: range })
  }

  const [searchValue, setSearchValue] = useState('')

  const baseClasses = variant === 'mobile-drawer'
    ? 'fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto'
    : 'w-full lg:w-[280px] shrink-0'

  return (
    <aside className={`${baseClasses} ${className}`} {...props}>
      <div className="bg-white rounded-[8px] bg-white shadow-[0_0_1px_0_rgba(20,20,20,0.12),_0_4px_12px_2px_rgba(20,20,20,0.08)] p-6">
        <h2 className="text-black font-['Inter'] text-[18px] font-bold leading-[120%] tracking-[0] mb-4 flex items-center gap-2">
          <img src={filterIcon} alt="Filter" className="w-5 h-5" />
          Filters
        </h2>

        {/* Search Bar */}
        <div className="relative mb-6">
          <img 
            src={searchIcon} 
            alt="Search" 
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 z-10 pointer-events-none" 
          />
          <Input
            type="text"
            placeholder="Search in results..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            variant="enabled"
            className="pl-9 !h-10 text-[14px]"
          />
        </div>

        <div className="space-y-0 border-t border-[#F3F4F6]">
          {/* Category Filter */}
          <Accordion title="Category" defaultOpen>
            <CheckboxGroup
              options={categories}
              selectedValues={filters.category || []}
              onChange={handleCategoryChange}
            />
          </Accordion>

          {/* Condition Filter */}
          <Accordion title="Condition" defaultOpen>
            <CheckboxGroup
              options={conditions}
              selectedValues={filters.condition || []}
              onChange={handleConditionChange}
            />
          </Accordion>

          {/* Price Range Filter */}
          <Accordion title="Price Range" defaultOpen>
            <RangeSlider
              min={0}
              max={500000}
              value={filters.priceRange || [0, 500000]}
              onChange={handlePriceRangeChange}
              formatValue={(val) => `$${val.toLocaleString()}`}
            />
          </Accordion>

          {/* Manufacturer Filter */}
          <Accordion title="Manufacturer" defaultOpen>
            <CheckboxGroup
              options={manufacturers}
              selectedValues={filters.manufacturer || []}
              onChange={handleManufacturerChange}
            />
          </Accordion>

          {/* Year Filter */}
          <Accordion title="Year" defaultOpen>
            <RangeSlider
              min={1990}
              max={2024}
              value={filters.yearRange || [1990, 2024]}
              onChange={handleYearRangeChange}
              variant="text"
            />
          </Accordion>

          {/* Location Filter */}
          <Accordion title="Location" defaultOpen>
            <CheckboxGroup
              options={locations}
              selectedValues={filters.location || []}
              onChange={handleLocationChange}
            />
          </Accordion>

          {/* Hours Used Filter */}
          <Accordion title="Hours Used" defaultOpen>
            <RangeSlider
              min={0}
              max={10000}
              value={filters.hoursUsed || [0, 10000]}
              onChange={handleHoursRangeChange}
              variant="text"
            />
          </Accordion>
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
