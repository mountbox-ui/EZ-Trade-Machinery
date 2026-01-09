import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AccountLayout from '../components/account/AccountLayout'
import TermsAndConditionsContent from '../components/account/TermsAndConditionsContent'
import Navbar from '../components/Navbar'

const TermsAndConditions = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: 'Anwar',
    avatar: null,
    joinedDate: 'Jan 2023',
    isVerified: true
  })

  const handleEditStore = () => {
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
            <Link to="/account" className="text-gray-600 hover:text-[#FFB703] transition-colors">
              My Account
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#1A1C1E] font-medium">Terms and Conditions</span>
          </nav>
        </div>
      </div>

      {/* Account Layout */}
      <AccountLayout
        sidebarProps={{
          user: {
            name: user.name,
            avatar: user.avatar,
            joinedDate: user.joinedDate,
            isVerified: user.isVerified
          },
          activeItem: 'terms',
          onEditStore: handleEditStore,
          onLogout: handleLogout
        }}
      >
        <TermsAndConditionsContent />
      </AccountLayout>
    </div>
  )
}

export default TermsAndConditions

