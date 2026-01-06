import React, { useState } from 'react'
import { FaSearch, FaChevronDown } from 'react-icons/fa'
import { 
  FaComment, 
  FaDollarSign, 
  FaCheck, 
  FaHeart, 
  FaStar 
} from 'react-icons/fa'
import Card from '../Card'
import Input from '../Input'
import NotificationCard from './NotificationCard'

const NotificationsContent = ({ className = '' }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState('All')

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: 'message',
      icon: <FaComment className="w-5 h-5 text-white" />,
      iconBgColor: 'bg-blue-500',
      heading: 'New message from David Chen',
      message: "Hi, I'm interested in your Caterpillar 3200 Excavator. Is it still available?",
      timestamp: '5 minutes ago',
      isUnread: true
    },
    {
      id: 2,
      type: 'offer',
      icon: <FaDollarSign className="w-5 h-5 text-white" />,
      iconBgColor: 'bg-green-500',
      heading: 'New offer received',
      message: "Someone made an offer of $45,000 on your Komatsu WA320 Wheel Loader",
      timestamp: '1 hour ago',
      isUnread: true
    },
    {
      id: 3,
      type: 'price',
      icon: <FaDollarSign className="w-5 h-5 text-white" />,
      iconBgColor: 'bg-purple-500',
      heading: 'Price alert',
      message: "Volvo EC2100 Excavator price dropped to $38,500 (-12%)",
      timestamp: '3 hours ago',
      isUnread: false
    },
    {
      id: 4,
      type: 'approval',
      icon: <FaCheck className="w-5 h-5 text-white" />,
      iconBgColor: 'bg-green-500',
      heading: 'Listing approved',
      message: 'Your listing "JCB 3CX Backhoe Loader" has been approved and is now live',
      timestamp: '5 hours ago',
      isUnread: false
    },
    {
      id: 5,
      type: 'favorite',
      icon: <FaHeart className="w-5 h-5 text-white" />,
      iconBgColor: 'bg-red-500',
      heading: 'Added to favorites',
      message: 'Your Caterpillar D8T Bulldozer was added to favorites',
      timestamp: 'Yesterday',
      isUnread: false
    },
    {
      id: 6,
      type: 'verification',
      icon: <FaCheck className="w-5 h-5 text-white" />,
      iconBgColor: 'bg-yellow-500',
      heading: 'Account verified',
      message: 'Congratulations! Your seller account has been verified',
      timestamp: '2 days ago',
      isUnread: false
    },
    {
      id: 7,
      type: 'message',
      icon: <FaComment className="w-5 h-5 text-white" />,
      iconBgColor: 'bg-blue-500',
      heading: 'Message from Sarah Johnson',
      message: 'Can you provide more photos of the undercarriage?',
      timestamp: '2 days ago',
      isUnread: false
    },
    {
      id: 8,
      type: 'milestone',
      icon: <FaStar className="w-5 h-5 text-white" />,
      iconBgColor: 'bg-green-500',
      heading: 'Milestone reached',
      message: 'Your Bobcat S650 Skid Steer has reached 100 views!',
      timestamp: '3 days ago',
      isUnread: false
    }
  ]

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#131214] font-inter">Notifications</h1>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative ">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="search"
            className="pl-10"
          />
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="h-12 px-4 pr-4 rounded-[8px] border border-gray-300 bg-white text-[#1A1C1E] focus:outline-none focus:ring-0.5 focus:ring-[#D1D5DC] focus:border-[#D1D5DC] appearance-none cursor-pointer"
          >
            <option value="All">All</option>
            <option value="Messages">Messages</option>
            <option value="Offers">Offers</option>
            <option value="Price Alerts">Price Alerts</option>
            <option value="Approvals">Approvals</option>
            <option value="Favorites">Favorites</option>
            <option value="Verification">Verification</option>
          </select>
          <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            icon={notification.icon}
            iconBgColor={notification.iconBgColor}
            heading={notification.heading}
            message={notification.message}
            timestamp={notification.timestamp}
            isUnread={notification.isUnread}
          />
        ))}
      </div>
    </div>
  )
}

export default NotificationsContent

