import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AccountLayout from '../components/account/AccountLayout'
import VerificationBanner from '../components/account/VerificationBanner'
import logo from '../assets/EZ-Trade-logo-full.svg'
import profileIcon from '../assets/Nav-Icons/ProfileS.svg'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Navbar from '../components/Navbar'

const MyAccount = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: 'Anwar',
    firstName: 'Alex',
    lastName: 'Paul',
    email: 'alexpaul@gmail.com',
    phone: '+61 93847299898',
    avatar: null,
    joinedDate: 'Jan 2023',
    isVerified: false // Set to false to show verification banner (frontend demo)
  })

  const handleEditStore = () => {
    // Handle edit store action
    console.log('Edit store clicked')
    // Navigate to store edit page or open modal
  }

  const handleLogout = () => {
    // Handle logout action
    console.log('Logout clicked')
    // Clear authentication, redirect to home
    navigate('/')
  }

  const handlePhotoUpload = async (file) => {
    // Handle photo upload
    console.log('Photo upload:', file)
    // TODO: Upload to API
    // Example API call:
    // const formData = new FormData()
    // formData.append('avatar', file)
    // const response = await fetch('/api/user/avatar', {
    //   method: 'POST',
    //   body: formData
    // })
    // const data = await response.json()
    // setUser(prev => ({ ...prev, avatar: data.avatarUrl }))
  }

  const handlePersonalInfoSave = async (data) => {
    // Handle personal info save
    console.log('Personal info save:', data)
    // TODO: Save to API
    // Example API call:
    // const response = await fetch('/api/user/profile', {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })
    // const updatedData = await response.json()
    setUser(prev => ({
      ...prev,
      firstName: data.firstName,
      lastName: data.lastName
    }))
  }

  const handleVerificationStart = () => {
    // Handle verification start
    console.log('Verification start clicked')
    // Navigate to verification page
    // navigate('/account/verify')
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
            <span className="text-[#1A1C1E] font-medium">My Account</span>
          </nav>
        </div>
      </div>

      {/* Mobile Verification Banner - Show at top in mobile view only */}
      <div className="lg:hidden px-4 py-3">
        <VerificationBanner
          status={user.isVerified ? 'complete' : 'incomplete'}
          message="Verify your account to publish listings and access all features."
          buttonText="Start Now"
          onClick={handleVerificationStart}
        />
      </div>

      {/* Account Layout */}
      <AccountLayout
        sidebarProps={{
          user: {
            name: user.name,
            avatar: user.avatar,
            joinedDate: user.joinedDate,
            isVerified: true // Show verified badge in sidebar
          },
          activeItem: '', // Set active item based on current route
          onEditStore: handleEditStore,
          onLogout: handleLogout
        }}
        contentProps={{
          user: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            avatar: user.avatar,
            isVerified: false // Show verification banner in content area
          },
          onPhotoUpload: handlePhotoUpload,
          onPersonalInfoSave: handlePersonalInfoSave,
          onVerificationStart: handleVerificationStart
        }}
      />
    </div>
  )
}

export default MyAccount

