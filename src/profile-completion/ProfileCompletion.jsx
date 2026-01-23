import React from 'react'
import { Link } from 'react-router-dom'
import ProfileCompletionContent from './ProfileCompletionContent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileBottomNav from '../components/MobileBottomNav'

const ProfileCompletion = () => {
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
            <span className="text-[#1A1C1E] font-medium">Profile completion</span>
          </nav>
        </div>
      </div>
      <h1 className="font-inter text-center font-bold text-2xl sm:text-3xl lg:text-[32px] text-[#131214] mb-4 sm:mb-6 lg:mb-8 pt-4 sm:pt-6">
      Profile completion
        </h1>

      {/* Content (no sidebar) */}
      <div className="max-w-[790px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 sm:pb-8">
        <div className="bg-white rounded-[16px] shadow-[0_0_1px_rgba(20,20,20,0.12),_0_8px_16px_8px_rgba(20,20,20,0.04)] p-4 sm:p-6">
         
          <ProfileCompletionContent />
        </div>
      </div>
      {/* Footer and Mobile Bottom Nav */}
      <Footer />
      <MobileBottomNav 
        navLinks={['Home', 'Auctions', 'Categories', 'Deals', 'Want to Buy', 'Financing', 'Shipping']}
        topLinks={['Track Order', 'Help & Support', 'Get Verified']}
      />
    </div>
  )
}

export default ProfileCompletion
