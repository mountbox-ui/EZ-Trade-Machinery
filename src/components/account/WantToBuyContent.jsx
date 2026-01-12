import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import WantToBuyCard from './WantToBuyCard'

const WantToBuyContent = ({ className = '' }) => {
  const navigate = useNavigate()
  // Sample "Want to Buy" requests data
  const wantToBuyRequests = [
    {
      id: 1,
      equipmentName: 'Caterpillar 320',
      tags: ['Equipment', 'Active'],
      category: 'Excavator',
      description: 'Looking for a reliable excavator for construction projects',
      yearRange: '2018-2020',
      quantity: '1',
      planningToBuy: 'Immediately',
      offersCount: 3,
      priceLimit: '$150,000 Price Limit',
      views: 45,
      expiresDate: '20/12/2025'
    },
    {
      id: 2,
      equipmentName: 'Bucket Attachments',
      tags: ['Parts', 'Active'],
      category: 'Attachments',
      description: 'Need bucket attachments for wheel loader',
      yearRange: '2018-2020',
      quantity: '1',
      planningToBuy: 'Immediately',
      offersCount: 2,
      priceLimit: '$150,000 Price Limit',
      views: 45,
      expiresDate: '20/12/2025'
    },
    {
      id: 3,
      equipmentName: 'Special Deal Package',
      tags: ['Deals', 'Active'],
      category: 'Package Deal',
      description: 'Looking for special deals on construction equipment',
      yearRange: '2018-2020',
      quantity: '1',
      planningToBuy: 'Immediately',
      offersCount: 5,
      priceLimit: '$150,000 Price Limit',
      views: 45,
      expiresDate: '20/12/2025'
    },
    {
      id: 4,
      equipmentName: 'John Deere 644K',
      tags: ['Equipment', 'Active'],
      category: 'Wheel Loader',
      description: 'Need bucket attachments for wheel loader',
      yearRange: '2018-2020',
      quantity: '1',
      planningToBuy: 'Immediately',
      offersCount: 1,
      priceLimit: '$150,000 Price Limit',
      views: 45,
      expiresDate: '20/12/2025'
    }
  ]

  const handlePostWantToBuy = () => {
    // Navigate to Post A Want-To-Buy page
    navigate('/account/want-to-buy/post')
  }

  return (
    <div className={className}>
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-[32px] font-bold text-[#131214] font-inter">Want to Buy</h1>
        <Button
          variant="primary"
          onClick={handlePostWantToBuy}
          className="w-full sm:w-auto whitespace-nowrap rounded-full !font-bold"
        >
          Post A Want-To-Buy
        </Button>
      </div>

    

      {/* Want to Buy Requests List */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {wantToBuyRequests.map((request) => (
          <WantToBuyCard
            key={request.id}
            request={request}
          />
        ))}
      </div>
    </div>
  )
}

export default WantToBuyContent

