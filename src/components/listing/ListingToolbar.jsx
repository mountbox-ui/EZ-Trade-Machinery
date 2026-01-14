import React, { Fragment, useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Input from '../Input'
import Button from '../Button'
import searchIcon from '../../assets/account-icons/Search_Icon.svg'
import layoutColumnIcon from '../../assets/listing/layout-column.svg'
import layoutListIcon from '../../assets/listing/layout-list.svg'

const ListingToolbar = ({
  searchValue = '',
  onSearchChange,
  onSearch,
  sortValue = 'Most Relevant',
  onSortChange,
  viewMode = 'grid',
  onViewModeChange,
  resultCount = 0,
  variant = 'full-width',
  className = '',
  ...props
}) => {
  const sortOptions = [
    'Most Relevant',
    'Price: Low to High',
    'Price: High to Low',
    'Newest First',
    'Oldest First',
    'Most Popular'
  ]

  const baseClasses = variant === 'compact' 
    ? 'flex flex-col gap-3' 
    : 'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'

  return (
    <div className={`bg-white rounded-[8px] shadow-sm p-4 ${baseClasses} ${className}`} {...props}>
      {/* Result Count */}
      <div className="flex items-center">
        <h2 className="font-inter text-[14px] font-normal">
          <span className="text-[#6E7375]">Showing </span>
          <span className="text-[#131214] font-bold">{resultCount.toLocaleString()}</span>
          <span className="text-[#6E7375]"> results</span>
        </h2>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Sort Dropdown */}
        <div className="relative">
          <Listbox value={sortValue} onChange={onSortChange}>
            <ListboxButton className="relative w-full sm:w-auto min-w-[140px] h-10 px-4 pr-10 rounded-[8px] bg-white border border-[#E6E9EB] text-[#131214] font-inter text-[14px] font-normal text-left focus:outline-none focus:border-[#6E7375] cursor-pointer">
              <span className="block truncate">{sortValue}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDownIcon className="w-4 h-4 text-[#6E7375]" aria-hidden="true" />
              </span>
            </ListboxButton>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-[8px] bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-[#E6E9EB]">
                {sortOptions.map((option) => (
                  <ListboxOption
                    key={option}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 px-4 ${
                        active ? 'bg-[#F4F6F7] text-[#131214]' : 'text-[#131214]'
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {option}
                        </span>
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </Listbox>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 border border-[#E6E9EB] rounded-[8px] p-1 bg-white">
          <button
            type="button"
            onClick={() => onViewModeChange && onViewModeChange('grid')}
            className={`p-2 rounded-[6px] transition-all ${
              viewMode === 'grid'
                ? 'bg-gray-100 text-[#131214] shadow-sm'
                : 'text-[#6E7375] hover:bg-gray-50'
            }`}
            aria-label="Grid view"
          >
            <img src={layoutColumnIcon} alt="Grid view" className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange && onViewModeChange('list')}
            className={`p-2 rounded-[6px] transition-all ${
              viewMode === 'list'
                ? 'bg-gray-100 text-[#131214] shadow-sm'
                : 'text-[#6E7375] hover:bg-gray-50'
            }`}
            aria-label="List view"
          >
            <img src={layoutListIcon} alt="List view" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListingToolbar
