import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AccountLayout from '../components/account/AccountLayout'
import PostWantToBuyContent from '../components/account/PostWantToBuyContent'

const PostWantToBuy = () => {
  const navigate = useNavigate()

  const [user] = useState({
    name: 'Anwar',
    avatar: null,
    joinedDate: 'Jan 2023',
    isVerified: true
  })

  const handleEditStore = () => {
    // Placeholder for edit store action
    console.log('Edit store clicked')
  }

  const handleLogout = () => {
    console.log('Logout clicked')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="mt-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-[#FFB703] transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              to="/account"
              className="text-gray-600 hover:text-[#FFB703] transition-colors"
            >
              My Account
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              to="/account/want-to-buy"
              className="text-gray-600 hover:text-[#FFB703] transition-colors"
            >
              Want to Buy
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#1A1C1E] font-medium">Post A Want-To-Buy</span>
          </nav>
        </div>
      </div>

      {/* Account layout with sidebar + Post Want to Buy content */}
      <AccountLayout
        sidebarProps={{
          user,
          activeItem: 'want-to-buy',
          onEditStore: handleEditStore,
          onLogout: handleLogout
        }}
      >
        <PostWantToBuyContent />
      </AccountLayout>
    </div>
  )
}

export default PostWantToBuy

