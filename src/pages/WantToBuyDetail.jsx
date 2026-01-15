import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AccountLayout from '../components/account/AccountLayout'
import WantToBuyDetailContent from '../components/account/WantToBuyDetailContent'

const WantToBuyDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [user] = useState({
    name: 'Anwar',
    avatar: null,
    joinedDate: 'Jan 2023',
    isVerified: true
  })

  // Sample data - in real app, fetch based on id
  const [post] = useState({
    id: id || 1,
    equipmentName: 'Caterpillar 320',
    tags: ['Equipment', 'Active'],
    category: 'Excavators',
    description: 'Looking for a reliable excavator for construction projects',
    yearRange: '2018-2020',
    quantity: '1',
    planningToBuy: 'Immediately',
    offersCount: 3,
    priceLimit: '$150,000 Price Limit',
    views: 45,
    expiresDate: '20/12/2026',
    postedDate: '20/11/2005',
    responses: [
      {
        id: 1,
        userName: 'Mike Johnson',
        userAvatar: null,
        timeAgo: '5 hours ago',
        equipmentName: '2019 Caterpillar 320 Excavator',
        description: 'I have exactly what you are looking for. Equipment is in excellent condition with only 2500 hours.',
        price: '$145,000'
      },
      {
        id: 2,
        userName: 'Mike Johnson',
        userAvatar: null,
        timeAgo: '5 hours ago',
        equipmentName: '2019 Caterpillar 320 Excavator',
        description: 'I have exactly what you are looking for. Equipment is in excellent condition with only 2500 hours.',
        price: '$145,000'
      }
    ]
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
            <span className="text-[#1A1C1E] font-medium">{post.equipmentName}</span>
          </nav>
        </div>
      </div>

      {/* Account layout with sidebar + Detail content */}
      <AccountLayout
        sidebarProps={{
          user,
          activeItem: 'want-to-buy',
          onEditStore: handleEditStore,
          onLogout: handleLogout
        }}
      >
        <WantToBuyDetailContent post={post} />
      </AccountLayout>
    </div>
  )
}

export default WantToBuyDetail

