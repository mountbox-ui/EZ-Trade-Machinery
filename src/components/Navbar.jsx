import React, { useState } from 'react'
import Button from './Button'
import logo from '../assets/EZ-Trade-Logo.svg'
import favoritesIcon from '../assets/Nav-Icons/Favorites.png'
import messagesIcon from '../assets/Nav-Icons/Messages.png'
import alertsIcon from '../assets/Nav-Icons/Alerts.png'
import profileIcon from '../assets/Nav-Icons/Profile.png'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('Home')

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
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-[#99A1AF]">Ship to:</span>
                <select className="bg-[#1A1A1A] text-white border-none outline-none cursor-pointer hover:text-yellow-500">
                  <option>United States</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#99A1AF]">Currency:</span>
                <select className="bg-[#1A1A1A] text-white border-none outline-none cursor-pointer hover:text-yellow-500">
                  <option>USD</option>
                </select>
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

              {/* Mobile Profile Icon (Optional if user wanted but let's stick to their request) */}
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
                className="w-full h-11 lg:h-12 pt-1 pr-14 lg:pr-24 pb-1 pl-12 flex items-center rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
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

              {/* Profile */}
              <button className="flex flex-col items-center hover:opacity-80 transition-opacity">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-[32px] w-[32px] rounded-full bg-[#FFB703] flex items-center justify-center">
                    <img src={profileIcon} alt="Profile" className="h-[15px] w-[15px]" />
                  </div>
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Sell Equipment Button */}
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="flex w-[162px] h-10 px-6 py-2 justify-center items-center gap-2 rounded bg-[#FFB703] text-gray-900 font-medium transition-colors"
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
            <button className="flex items-center space-x-2 pr-4 py-2 transition-colors rounded-md mr-4">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>All Categories</span>
            </button>

            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => setActiveNav(link)}
                  className={`px-4 py-2 rounded-md transition-colors ${activeNav === link
                    ? 'text-yellow-500'
                    : ''
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

