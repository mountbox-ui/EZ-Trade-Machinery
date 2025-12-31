import React, { useState, Fragment } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import Button from './Button'
import logo from '../assets/EZ-Trade-Logo.svg'
import favoritesIcon from '../assets/Nav-Icons/FavoritesS.svg'
import messagesIcon from '../assets/Nav-Icons/MessagesS.svg'
import alertsIcon from '../assets/Nav-Icons/AlertsS.svg'
import profileIcon from '../assets/Nav-Icons/ProfileS.svg'

const countries = [
  { id: 1, name: 'United States' },
  { id: 2, name: 'Canada' },
  { id: 3, name: 'United Kingdom' },
  { id: 4, name: 'Australia' },
  { id: 5, name: 'Germany' },
]

const currencies = [
  { id: 1, name: 'USD', symbol: '$' },
  { id: 2, name: 'EUR', symbol: '€' },
  { id: 3, name: 'GBP', symbol: '£' },
  { id: 4, name: 'AUD', symbol: 'A$' },
]

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('Home')
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])

  // Hover states
  const [isCountryOpen, setIsCountryOpen] = useState(false)
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const navLinks = [
    'Home',
    'Auctions',
    'Categories',
    'Deals',
    'Want to Buy',
    'Financing',
    'Shipping'
  ]

  return (
    <nav className="bg-[#1A1A1A] text-white">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block border-b border-gray-700">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              {/* Ship to Dropdown */}
              <div className="flex items-center space-x-2">
                <span className="text-[#99A1AF]">Ship to:</span>
                <div
                  className="relative"
                  onMouseEnter={() => setIsCountryOpen(true)}
                  onMouseLeave={() => setIsCountryOpen(false)}
                >
                  <Listbox value={selectedCountry} onChange={setSelectedCountry}>
                    <ListboxButton className="relative w-full cursor-pointer flex items-center gap-1 bg-transparent text-white text-left focus:outline-none hover:text-[#FFB703] transition-colors">
                      <span className="block truncate">{selectedCountry.name}</span>
                      <ChevronDownIcon className="h-4 w-4 text-[#99A1AF]" aria-hidden="true" />
                    </ListboxButton>
                    <Transition
                      show={isCountryOpen}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <ListboxOptions static className="absolute z-50 mt-1 max-h-60 w-48 overflow-auto rounded-md bg-[#2C2C2C] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-gray-700">
                        {countries.map((country) => (
                          <ListboxOption
                            key={country.id}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-[#FFB703] text-gray-900' : 'text-gray-200'
                              }`
                            }
                            value={country}
                          >
                            {({ selected, active }) => (
                              <>
                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                  {country.name}
                                </span>
                                {selected ? (
                                  <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-gray-900' : 'text-[#FFB703]'}`}>
                                    <CheckIcon className="h-4 w-4" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </Transition>
                  </Listbox>
                </div>
              </div>

              {/* Currency Dropdown */}
              <div className="flex items-center space-x-2">
                <span className="text-[#99A1AF]">Currency:</span>
                <div
                  className="relative"
                  onMouseEnter={() => setIsCurrencyOpen(true)}
                  onMouseLeave={() => setIsCurrencyOpen(false)}
                >
                  <Listbox value={selectedCurrency} onChange={setSelectedCurrency}>
                    <ListboxButton className="relative w-full cursor-pointer flex items-center gap-1 bg-transparent text-white text-left focus:outline-none hover:text-[#FFB703] transition-colors">
                      <span className="block truncate">{selectedCurrency.name}</span>
                      <ChevronDownIcon className="h-4 w-4 text-[#99A1AF]" aria-hidden="true" />
                    </ListboxButton>
                    <Transition
                      show={isCurrencyOpen}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <ListboxOptions static className="absolute z-50 mt-1 max-h-60 w-32 overflow-auto rounded-md bg-[#2C2C2C] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-gray-700">
                        {currencies.map((currency) => (
                          <ListboxOption
                            key={currency.id}
                            className={({ active }) =>
                              `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-[#FFB703] text-gray-900' : 'text-gray-200'
                              }`
                            }
                            value={currency}
                          >
                            {({ selected, active }) => (
                              <>
                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                  {currency.name}
                                </span>
                                {selected ? (
                                  <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-gray-900' : 'text-[#FFB703]'}`}>
                                    <CheckIcon className="h-4 w-4" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </Transition>
                  </Listbox>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-yellow-500 transition-colors">Track Order</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Help & Support</a>
              <a href="#" className="hover:text-yellow-500 transition-colors">Get Verified</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#2C2C2C]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
            {/* Logo & Search Container */}
            <div className="flex items-center justify-between w-full lg:w-auto gap-4">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="/" className="flex items-center">
                  <img src={logo} alt="EZ Trade Machinery" className="h-8 sm:h-10 lg:h-12 w-auto" />
                </a>
              </div>

              {/* Profile - Visible on mobile/tablet here */}
              <div
                className="lg:hidden relative"
                onMouseEnter={() => setIsProfileOpen(true)}
                onMouseLeave={() => setIsProfileOpen(false)}
              >
                <Menu as="div">
                  <MenuButton className="flex flex-col items-center hover:opacity-80 transition-opacity focus:outline-none">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-[32px] w-[32px] rounded-full bg-[#FFB703] flex items-center justify-center">
                        <img src={profileIcon} alt="Profile" className="h-[15px] w-[15px]" />
                      </div>
                      <ChevronDownIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                  </MenuButton>
                  <Transition
                    show={isProfileOpen}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems static className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-[#2C2C2C] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 border border-gray-700">
                      <MenuItem>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm ${active ? 'bg-[#FFB703] text-gray-900' : 'text-gray-200'
                              }`}
                          >
                            My Orders
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm ${active ? 'bg-[#FFB703] text-gray-900' : 'text-gray-200'
                              }`}
                          >
                            Help
                          </a>
                        )}
                      </MenuItem>
                      <div className="border-t border-gray-700 my-1"></div>
                      <MenuItem>
                        {({ active }) => (
                          <button
                            className={`block w-full text-left px-4 py-2 text-sm ${active ? 'bg-red-500 text-white' : 'text-red-400'
                              }`}
                          >
                            Logout
                          </button>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>

            {/* Search Bar - Responsive */}
            <div className="w-full lg:w-[550px] relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search equipment, category..."
                className="w-full h-11 lg:h-12 pt-1 pr-14 lg:pr-24 pb-1 pl-12 flex items-center rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FFB703] shadow-sm"
              />
              <button
                type="button"
                className="absolute flex items-center justify-center gap-2 w-10 lg:w-[78px] h-9 px-2 lg:px-4 py-2 right-1 top-[4px] lg:top-[6px] rounded bg-[#FFB703] text-gray-900 font-medium transition-colors hover:bg-[#FFB703]/90"
              >
                <span className="hidden lg:inline">Search</span>
                <svg className="h-5 w-5 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* User Actions - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-[34px] flex-shrink-0">
              {/* Favorites */}
              <button className="flex flex-col items-center hover:opacity-80 transition-opacity">
                <img src={favoritesIcon} alt="Favorites" className="h-6 w-6 mb-1" />
                <span className="text-xs text-white">Favorites</span>
              </button>

              {/* Messages */}
              <button className="flex flex-col items-center hover:opacity-80 transition-opacity relative">
                <div className="relative">
                  <img src={messagesIcon} alt="Messages" className="h-6 w-6 mb-1" />
                  <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                </div>
                <span className="text-xs text-white">Messages</span>
              </button>

              {/* Alerts */}
              <button className="flex flex-col items-center hover:opacity-80 transition-opacity">
                <img src={alertsIcon} alt="Alerts" className="h-6 w-6 mb-1" />
                <span className="text-xs text-white">Alerts</span>
              </button>

              {/* Profile - Visible on desktop here */}
              <div
                className="hidden lg:block relative"
                onMouseEnter={() => setIsProfileOpen(true)}
                onMouseLeave={() => setIsProfileOpen(false)}
              >
                <Menu as="div">
                  <MenuButton className="flex flex-col items-center hover:opacity-80 transition-opacity focus:outline-none">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-[32px] w-[32px] rounded-full bg-[#FFB703] flex items-center justify-center">
                        <img src={profileIcon} alt="Profile" className="h-[15px] w-[15px]" />
                      </div>
                      <ChevronDownIcon className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                  </MenuButton>
                  <Transition
                    show={isProfileOpen}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems static className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-[#2C2C2C] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 border border-gray-700">
                      <MenuItem>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm ${active ? 'bg-[#FFB703] text-gray-900 hover:bg-[#FFB703]' : 'text-gray-200'
                              }`}
                          >
                            My Orders
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm ${active ? 'bg-[#FFB703] text-gray-900' : 'text-gray-200'
                              }`}
                          >
                            Help
                          </a>
                        )}
                      </MenuItem>
                      <div className="border-t border-gray-700 my-1"></div>
                      <MenuItem>
                        {({ active }) => (
                          <button
                            className={`block w-full text-left px-4 py-2 text-sm ${active ? 'bg-red-500 text-white' : 'text-red-400'
                              }`}
                          >
                            Logout
                          </button>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>

              {/* Sell Equipment Button */}
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="flex w-[162px] h-10 px-6 py-2 justify-center items-center gap-2 rounded bg-[#FFB703] text-gray-900 font-normal transition-colors hover:bg-[#FFB703]/90"
                >
                  Sell Equipment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Hidden on mobile */}
      <div className="hidden lg:block border-b border-gray-700">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12">
            {/* All Categories Menu */}
            <button className="flex items-center space-x-2 pr-4 py-2 transition-colors rounded-md mr-4 hover:text-[#FFB703]">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="font-normal">All Categories</span>
            </button>

            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => setActiveNav(link)}
                  className={`px-4 py-2 rounded-md transition-colors font-normal ${activeNav === link
                    ? 'text-[#FFB703]'
                    : 'hover:text-[#FFB703]'
                    }`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

