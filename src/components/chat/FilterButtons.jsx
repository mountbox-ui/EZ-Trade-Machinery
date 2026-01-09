import React, { useState, Fragment } from 'react'
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const FilterButtons = ({
  filters = ['All'],
  activeFilter,
  onFilterChange,
  className = '',
  tags = ['Parts', 'Deals'],
  ...props
}) => {
  const [selectedTag, setSelectedTag] = useState(null)

  const handleTagSelect = (tag) => {
    setSelectedTag(tag)
    onFilterChange('Tags')
    // You can add additional logic here to filter by the selected tag
  }

  return (
    <div className={`flex flex-wrap gap-1.5 sm:gap-2 ${className}`} {...props}>
      {filters.map((filter) => {
        if (filter === 'Tags') {
          return (
            <Menu key={filter} as="div" className="relative inline-block text-left">
              <MenuButton
                className={`inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 rounded font-inter text-xs sm:text-sm font-medium leading-none tracking-normal transition-colors ${
                  activeFilter === filter
                    ? 'bg-[var(--semantic-accent-intense,#1F2224)] text-[var(--semantic-accent-on-accent,#FFF)]'
                    : 'bg-gray-100 text-[#53575A] hover:bg-gray-200'
                }`}
                style={{ borderRadius: '4px' }}
              >
                {selectedTag ? selectedTag : filter}
                <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
              </MenuButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 border border-gray-200">
                  <div className="py-1">
                    {tags.map((tag) => (
                      <MenuItem key={tag}>
                        {({ focus }) => (
                          <button
                            onClick={() => handleTagSelect(tag)}
                            className={`${
                              focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } block w-full text-left px-4 py-2 text-sm transition-colors ${
                              selectedTag === tag ? 'font-semibold' : ''
                            }`}
                          >
                            {tag}
                          </button>
                        )}
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Transition>
            </Menu>
          )
        }

        return (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded font-inter text-xs sm:text-sm font-medium leading-none tracking-normal transition-colors ${
              activeFilter === filter
                ? 'bg-[var(--semantic-accent-intense,#1F2224)] text-[var(--semantic-accent-on-accent,#FFF)]'
                : filter === 'All'
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'bg-gray-100 text-[#53575A] hover:bg-gray-200'
            }`}
            style={{ borderRadius: '4px' }}
          >
            {filter}
          </button>
        )
      })}
    </div>
  )
}

export default FilterButtons

