import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import WantToBuyStatusBanner from './WantToBuyStatusBanner'
import WantToBuyResponseCard from './WantToBuyResponseCard'
import WantToBuyCard from './WantToBuyCard'

/**
 * Detail content component for a specific "Want to Buy" post
 */
const WantToBuyDetailContent = ({ 
  post,
  className = '' 
}) => {
  const navigate = useNavigate()

  const {
    id,
    equipmentName,
    tags = [],
    category,
    description,
    yearRange,
    quantity,
    planningToBuy,
    offersCount = 0,
    priceLimit,
    views = 0,
    expiresDate,
    postedDate,
    responses = []
  } = post

  // Calculate days until expiration
  const calculateDaysUntilExpiration = (expiresDate) => {
    if (!expiresDate) return '0 days'
    // Simple calculation - in real app, use proper date parsing
    const today = new Date()
    const expire = new Date(expiresDate.split('/').reverse().join('-'))
    const diffTime = expire - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? `${diffDays} days` : 'Expired'
  }

  const expiresIn = calculateDaysUntilExpiration(expiresDate)

  const handleEdit = () => {
    navigate(`/account/want-to-buy/${id}/edit`)
  }

  const handleChat = (responseId) => {
    navigate(`/chat?response=${responseId}`)
  }

  return (
    <div className={className}>
      {/* Page Title and Edit Button */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[#131214] font-['Inter'] text-[32px] font-bold leading-[120%] tracking-[0]">
          {equipmentName}
        </h1>
        <Button
          variant="primary"
          onClick={handleEdit}
          className="whitespace-nowrap rounded-full"
        >
          Edit
        </Button>
      </div>

      {/* Status Banner */}
      <WantToBuyStatusBanner
        expiresIn={expiresIn}
        postedOn={postedDate || '20/11/2005'}
        className="mb-6"
      />

      {/* Post Details Card - Using WantToBuyCard component */}
      <WantToBuyCard
        request={{
          id,
          equipmentName,
          tags,
          category,
          description,
          yearRange,
          quantity,
          planningToBuy,
          offersCount,
          priceLimit,
          views,
          expiresDate
        }}
        disableClick={true}
        className="mb-8"
      />

      {/* Responses Section */}
      {responses.length > 0 && (
        <div>
          <h3 className="text-[#131214] font-inter text-[18px] font-bold mb-4">
            Responses ({responses.length})
          </h3>
          <div className="space-y-4">
            {responses.map((response, index) => (
              <WantToBuyResponseCard
                key={response.id || index}
                response={{
                  ...response,
                  onChatClick: () => handleChat(response.id || index)
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default WantToBuyDetailContent

