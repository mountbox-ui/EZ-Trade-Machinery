import React from 'react'
import Avatar from '../Avatar'
import Badge from '../Badge'
import Button from '../Button'
import verifiedIcon from '../../assets/account-icons/Left Icon.svg'

const UserProfile = ({
  name = 'Anwar',
  avatar,
  joinedDate = 'Jan 2023',
  isVerified = true,
  onEditStore,
  className = ''
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <div className="flex items-center gap-4">
        {/* Avatar on the left */}
        <div className="flex-shrink-0">
          <Avatar
            src={avatar}
            alt={name}
            size="xl"
          />
        </div>

        {/* Content on the right */}
        <div className="flex flex-col flex-1">
          {/* Name */}
          <h3 className="text-2xl font-bold text-[#131214] font-inter">{name}</h3>
          
          {/* Member since */}
          <span className="text-base font-medium text-[#6E7375] font-inter mb-2">Member since {joinedDate}</span>
          
          {/* Verified badge */}
          {isVerified && (
            <div className="mb-2">
              <Badge variant="verified" className="inline-flex items-center gap-1.5">
                <img src={verifiedIcon} alt="Verified" className="w-3.5 h-3.5" />
                <span className="text-sm font-medium">Verified</span>
              </Badge>
            </div>
          )}
          
          {/* Edit store button */}
          {onEditStore && (
            <button
              onClick={onEditStore}
              className="px-4 py-2 rounded-[48px] border border-[#53575A] bg-white text-[#53575A] font-bold text-base hover:bg-gray-50 transition-colors w-fit"
            >
              Edit store
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserProfile

