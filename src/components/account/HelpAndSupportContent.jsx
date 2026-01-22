import React, { useState } from 'react'
import { 
  FaRegComment, 
  FaCheckCircle,
  FaChevronRight,
} from 'react-icons/fa'
import { CiSearch } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiPhone , FiDollarSign , FiCheckCircle} from "react-icons/fi";
import { PiQuestion } from "react-icons/pi";
import { LiaTruckSolid } from "react-icons/lia";
import { MdOutlineShield } from "react-icons/md";
import noteIcon from '../../assets/note.svg'
import Button from '../Button'

const HelpAndSupportContent = ({ className = '' }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search functionality
    console.log('Searching for:', searchQuery)
  }

  const handleStartChat = () => {
    // Handle start chat
    console.log('Start chat clicked')
  }

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Learn the basics of buying and selling',
      icon: PiQuestion,
      color: 'bg-[#DBEAFE]',
      iconColor: 'text-[#155DFC]',
    },
    {
      id: 'pricing-payments',
      title: 'Pricing & Payments',
      description: 'Payment methods and pricing info',
      icon: FiDollarSign,
      color: 'bg-[#DCFCE7]',
      iconColor: 'text-[#00A63E]'
    },
    {
      id: 'shipping-delivery',
      title: 'Shipping & Delivery',
      description: 'Transportation and logistics help',
      icon: LiaTruckSolid,
      color: 'bg-[#F3E8FF]',
      iconColor: 'text-[#9810FA]'
    },
    {
      id: 'safety-security',
      title: 'Safety & Security',
      description: 'Protect yourself from scams',
      icon: MdOutlineShield,
      color: 'bg-[#FFE2E2]',
    iconColor: 'text-[#E7000B]'
    },
    {
      id: 'account-settings',
      title: 'Account & Settings',
      description: 'Manage your account preferences',
      icon: noteIcon,
      color: 'bg-[#FEF9C2]',
      iconColor: 'text-yellow-600',
    },
    {
      id: 'verification',
      title: 'Verification',
      description: 'Get verified as a trusted seller',
      icon: FiCheckCircle,
      color: 'bg-[rgba(246,184,0,0.2)]',
      iconColor: 'text-[#2C2C2C]'
    }
  ]

  return (
    <div className={className}>
      {/* Title Section with Search Bar */}
      <div className="mb-8 rounded-[8px] bg-gradient-to-b from-[#2C2C2C] to-[#1A1A1A] px-4 py-6 md:px-8 md:py-10 lg:px-[50px] lg:py-12">
        <h1 className="text-xl md:text-2xl font-bold text-[#FFFFFF] font-inter mb-2">
          Help & Support Center
        </h1>
        <p className="text-sm md:text-md font-inter font-normal leading-[1.5] text-[#D1D5DC] mb-4 md:mb-6">
          Find answers to your questions or get in touch with our support team
        </p>
        
        {/* Search Bar inside dark container */}
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for help articles, FAQs, or topics..."
            className="w-full lg:w-[596px] h-[48px] md:h-[56px] px-4 py-3 pl-12 pr-4 bg-white rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:ring-offset-2 focus:ring-offset-[#2C2C2C] text-[#131214] font-inter placeholder:text-[#717182] placeholder:text-sm"
          />
          <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#99A1AF] w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
        </form>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10">
        {/* Live Chat */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#DBEAFE] rounded-[14px] flex items-center justify-center">
              <FaRegComment className="text-[#155DFC] w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
            </div>
          </div>
          <h3 className="text-base md:text-lg font-bold text-[#131214] font-inter mb-2">
            Live Chat
          </h3>
          <p className="text-xs md:text-sm font-normal text-[#4A5565] font-inter mb-4">
          Chat with our support team in real-time
          </p>
          <Button
            variant="primary"
            onClick={handleStartChat}
            className="w-full rounded-[48px] bg-[#FFB703] !font-bold !text-[#131214] text-sm md:text-base"
          >
            Start Chat
          </Button>
        </div>

        {/* Email Support */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#DCFCE7] rounded-[14px] flex items-center justify-center">
              <FaRegEnvelope className="text-[#00A63E] w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
            </div>
          </div>
          <h3 className="text-base md:text-lg font-bold text-[#131214] font-inter mb-2">
            Email Support
          </h3>
          <p className="text-xs md:text-sm font-normal text-[#4A5565] font-inter mb-4">
            Get a response within 24 hours
          </p>
          <button className="w-full px-4 py-2 bg-[#E8EBEB] text-[#53575A] rounded-[48px] hover:bg-gray-200 transition-colors font-inter text-sm md:text-base font-bold">
            support@eztrade.com
          </button>
        </div>

        {/* Phone Support */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[rgba(246,184,0,0.2)] rounded-[14px] flex items-center justify-center">
              <FiPhone className="text-[#2C2C2C] w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
            </div>
          </div>
          <h3 className="text-base md:text-lg font-bold text-[#131214] font-inter mb-2">
            Phone Support
          </h3>
          <p className="text-xs md:text-sm font-normal text-[#4A5565] font-inter mb-4">
            Mon-Fri, 9AM-6PM CST
          </p>
          <button className="w-full px-4 py-2 bg-[#E8EBEB] text-[#53575A] rounded-[48px] hover:bg-gray-200 transition-colors font-inter text-sm md:text-base font-bold">
            1-800-555-1234
          </button>
        </div>
      </div>

      {/* Browse by Category */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-[#2C2C2C] font-inter mb-4 md:mb-6">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.id}
                className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group flex items-start gap-3 md:gap-4 relative"
              >
                {/* Icon on the left */}
                <div className={`w-10 h-10 md:w-12 md:h-12 ${category.color} rounded-[14px] flex items-center justify-center flex-shrink-0 ${category.borderColor || ''}`}>
                  {typeof IconComponent === 'string' ? (
                    <img src={IconComponent} alt={category.title} className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />
                  ) : (
                    <IconComponent className={`${category.iconColor} w-[20px] h-[20px] md:w-[24px] md:h-[24px]`} />
                  )}
                </div>
                
                {/* Content in the middle - can wrap under chevron */}
                <div className="flex-1 min-w-0 pr-5 md:pr-6">
                  <h3 className="text-sm md:text-md font-normal text-[#2C2C2C] font-inter mb-1">
                    {category.title}
                  </h3>
                  <p className="text-xs md:text-sm font-normal text-[#4A5565] font-inter">
                    {category.description}
                  </p>
                </div>
                
                {/* Chevron on the right - positioned absolutely, aligned with title */}
                <FaChevronRight className="absolute right-4 md:right-6 top-4 md:top-6 text-[#99A1AF] group-hover:text-[#FFB703] transition-colors flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HelpAndSupportContent
