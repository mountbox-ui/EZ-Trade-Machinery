import React, { useState } from 'react'
import SearchInput from './SearchInput'
import FilterButtons from './FilterButtons'
import ContactList from './ContactList'

const Sidebar = ({
  contacts = [],
  activeContactId,
  onContactClick,
  variant = 'expanded',
  className = '',
  ...props
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'VIP List', 'Tags', 'Buying', 'Selling']

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.messagePreview.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesFilter = 
      activeFilter === 'All' ||
      (activeFilter === 'VIP List' && contact.isVIP) ||
      (activeFilter === 'Buying' && contact.type === 'buying') ||
      (activeFilter === 'Selling' && contact.type === 'selling') ||
      (activeFilter === 'Tags' && contact.tags?.length > 0)
    
    return matchesSearch && matchesFilter
  })

  const sidebarWidth = variant === 'compact' ? 'w-16' : 'w-full lg:w-[440px]'

  return (
    <aside
      className={`${sidebarWidth} flex flex-col border-r border-gray-200 bg-[#F9FAFB] border border-x-[#DADDDE] ${className}`}
      {...props}
    >
      {variant === 'expanded' && (
        <>
          {/* Search Input */}
          <div className="px-3 sm:px-4 py-4 sm:py-6">
            <SearchInput
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Buttons */}
          <div className="px-3 sm:px-4 py-2">
            <FilterButtons
              filters={filters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>

          {/* Contact List */}
          <div className="flex-1 overflow-y-auto">
            <div>
              <ContactList
                contacts={filteredContacts}
                activeContactId={activeContactId}
                onContactClick={onContactClick}
              />
            </div>
          </div>
        </>
      )}

      {variant === 'compact' && (
        <div className="flex flex-col items-center py-4 space-y-4">
          {/* Compact icons only */}
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      )}
    </aside>
  )
}

export default Sidebar

