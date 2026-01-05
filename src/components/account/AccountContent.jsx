import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaChevronDown } from 'react-icons/fa'
import Card from '../Card'
import Input from '../Input'
import VerificationBanner from './VerificationBanner'
import ProfileField from './ProfileField'
import PersonalInfoForm from './PersonalInfoForm'
import PhotoUpload from './PhotoUpload'
import Button from '../Button'
import australiaFlag from '../../assets/account-icons/Australia.svg'

const AccountContent = ({
  user = {
    firstName: 'Alex',
    lastName: 'Paul',
    email: 'alexpaul@gmail.com',
    phone: '+61 93847299898',
    avatar: null,
    isVerified: false
  },
  onPhotoUpload,
  onPersonalInfoSave,
  onVerificationStart,
  className = ''
}) => {
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false)
  const [isEditingEmail, setIsEditingEmail] = useState(false)
  const [isEditingMobile, setIsEditingMobile] = useState(false)

  const handlePersonalInfoSave = (data) => {
    if (onPersonalInfoSave) {
      onPersonalInfoSave(data)
    }
    setIsEditingPersonalInfo(false)
  }

  const handlePersonalInfoCancel = () => {
    setIsEditingPersonalInfo(false)
  }

  const handleEditPersonalInfo = () => {
    setIsEditingPersonalInfo(true)
  }

  const handleEmailSave = () => {
    // Handle email save
    setIsEditingEmail(false)
  }

  const handleEmailCancel = () => {
    setIsEditingEmail(false)
  }

  const handleEditEmail = () => {
    setIsEditingEmail(true)
  }

  const handleMobileSave = () => {
    // Handle mobile save
    setIsEditingMobile(false)
  }

  const handleMobileCancel = () => {
    setIsEditingMobile(false)
  }

  const handleEditMobile = () => {
    setIsEditingMobile(true)
  }

  // Extract phone number (remove country code)
  const getPhoneNumber = (phone) => {
    if (!phone) return ''
    // Remove +61 or +61  from the beginning
    return phone.replace(/^\+61\s?/, '')
  }

  return (
    <div className={`${className}`}>
      {/* Verification Banner - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:block">
        <VerificationBanner
          status={user.isVerified ? 'complete' : 'incomplete'}
          onClick={onVerificationStart}
        />
      </div>

      <Card>
        <PhotoUpload
          currentPhoto={user.avatar}
          onPhotoUpload={onPhotoUpload}
        />
      </Card>

      {/* Personal Information - Read-only View */}
      <Card>
        <div className="space-y-6 ">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-bold text-[#1A1C1E]">Personal Information</h3>
            <Button
              variant="edit"
              onClick={handleEditPersonalInfo}
            >
              Edit
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProfileField
              label="First Name"
              value={user.firstName}
              readOnly
            />
            <ProfileField
              label="Last Name"
              value={user.lastName}
              readOnly
            />
          </div>
        </div>
      </Card>

      <Card>
        {isEditingEmail ? (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-bold text-[#1A1C1E]">Email</h3>
              <Button
                variant="edit"
                onClick={handleEmailCancel}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Cancel
              </Button>
            </div>
            <ProfileField
              label=""
              value={user.email}
              editable
              onSave={handleEmailSave}
              onCancel={handleEmailCancel}
              icon={<FaEnvelope className="w-4 h-4 text-gray-400" />}
            />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-bold text-[#1A1C1E]">Email</h3>
              <Button
                variant="edit"
                onClick={handleEditEmail}
              >
                Edit
              </Button>
            </div>
            <ProfileField
              label=""
              value={user.email}
              readOnly
              icon={<FaEnvelope className="w-4 h-4 text-gray-400" />}
            />
          </div>
        )}
      </Card>

      <Card>
        {isEditingMobile ? (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-bold text-[#1A1C1E]">Mobile Number</h3>
              <Button
                variant="edit"
                onClick={handleMobileCancel}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Cancel
              </Button>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 z-10">
                  <img src={australiaFlag} alt="Australia" className="w-5 h-4 object-cover" />
                  <span className="text-sm text-gray-600">+61</span>
                  <FaChevronDown className="w-3 h-3 text-gray-400" />
                </div>
                <Input
                  value={getPhoneNumber(user.phone)}
                  variant="enabled"
                  className="pl-32"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-bold text-[#1A1C1E]">Mobile Number</h3>
              <Button
                variant="edit"
                onClick={handleEditMobile}
              >
                Edit
              </Button>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 z-10">
                  <img src={australiaFlag} alt="Australia" className="w-5 h-4 object-cover" />
                  <span className="text-sm text-gray-600">+61</span>
                  <FaChevronDown className="w-3 h-3 text-gray-400" />
                </div>
                <Input
                  value={getPhoneNumber(user.phone)}
                  readOnly
                  className="pl-32"
                />
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Personal Information - Editable Form (always visible below Mobile Number) */}
      <Card >
        <PersonalInfoForm
          initialData={{
            firstName: user.firstName,
            lastName: user.lastName
          }}
          onSave={handlePersonalInfoSave}
          onCancel={handlePersonalInfoCancel}
        />
      </Card>
    </div>
  )
}

export default AccountContent

