import React, { useState } from 'react'
import Input from '../components/Input'
import Label from '../components/Label'
import Button from '../components/Button'
import FileUpload from './FileUpload'
import { LuMapPin } from "react-icons/lu";
import { FaLightbulb } from "react-icons/fa";

const ProfileCompletionContent = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    websiteUrl: '',
    email: '',
    businessRegistrationNumber: '',
    phone: '',
    businessAddress: '',
    idProof: null,
    businessDocument: null
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const handleFileUpload = (field) => (file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }))
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    if (!formData.businessAddress.trim()) {
      newErrors.businessAddress = 'Business address is required'
    }

    if (!formData.idProof) {
      newErrors.idProof = 'ID proof is required'
    }

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validate()) {
      // Handle form submission
      console.log('Form submitted:', formData)
      // TODO: Submit to API
    }
  }

  return (
    <div className={className}>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Company / Business Name */}
            <div className='pt-0 lg:pt-9'>
              <Label htmlFor="companyName">
                Company / Business Name
              </Label>
              <Input
                id="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleInputChange('companyName')}
                placeholder="Optional for individual sellers"
                variant="enabled"
              />
            </div>

            {/* Website URL */}
            <div>
              <Label htmlFor="websiteUrl">Website URL</Label>
              <Input
                id="websiteUrl"
                type="url"
                value={formData.websiteUrl}
                onChange={handleInputChange('websiteUrl')}
                placeholder="http://www.example.com"
                variant="enabled"
              />
            </div>

            {/* Email Address */}
            <div>
              <Label htmlFor="email" required>Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="john@example.com"
                variant={errors.email ? 'error' : 'enabled'}
                required
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Upload ID Proof */}
            <div className='w-full lg:w-[350px]'>
              <FileUpload
                label="Upload ID Proof"
                description="Driver's license, passport, or government ID"
                accept="image/jpeg,image/jpg,image/png"
                maxSize={5}
                onFileUpload={handleFileUpload('idProof')}
                required
              />
              {errors.idProof && (
                <p className="text-sm text-red-500 mt-1">{errors.idProof}</p>
              )}
            </div>

            {/* Upload Business Document */}
            <div className='w-full lg:w-[350px]'>
              <FileUpload
                label="Upload Business Document"
                description="Business license, tax certificate, or registration (if applicable)"
                accept="image/jpeg,image/jpg,image/png"
                maxSize={5}
                onFileUpload={handleFileUpload('businessDocument')}
              />
            </div>
            <div className="mt-6 sm:mt-8 p-4 bg-[#EFF6FF] border border-[#BEDBFF] rounded-[14px] flex flex-col items-start gap-1 w-full lg:w-[350px]">
              <div className='flex flex-row gap-2'>
                <FaLightbulb className="text-[#f1d17a] mt-0.5 flex-shrink-0" />
              <h3 className='text-[#1C398E] font-bold text-sm font-inter'>Tip:</h3></div>
              <div><p className="text-sm text-[#1C398E]">
           Make sure your documents are clear and all text is readable. This speeds up the verification process.
          </p></div>
        </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Business Registration Number */}
            <div className='pt-0 lg:pt-9'>
              <Label htmlFor="businessRegistrationNumber">
                Business Registration Number
              </Label>
              <Input
                id="businessRegistrationNumber"
                type="text"
                value={formData.businessRegistrationNumber}
                onChange={handleInputChange('businessRegistrationNumber')}
                placeholder="If applicable"
                variant="enabled"
              />
            </div>

            {/* Phone Number */}
            <div>
              <Label htmlFor="phone" required>
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                placeholder="+1 (555) 123-4567"
                variant={errors.phone ? 'error' : 'enabled'}
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Business Address */}
            <div>
              <Label htmlFor="businessAddress" required>
                Business Address
              </Label>
              <div className="relative">
                <Input
                  id="businessAddress"
                  type="text"
                  value={formData.businessAddress}
                  onChange={handleInputChange('businessAddress')}
                  placeholder="123 Main Street, City, State, ZIP"
                  variant={errors.businessAddress ? 'error' : 'enabled'}
                  className="pr-10"
                />
                <LuMapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.businessAddress && (
                <p className="text-sm text-red-500 mt-1">{errors.businessAddress}</p>
              )}
            </div>
          </div>
        </div>

        {/* Tip Box */}
        

        {/* Submit Button */}
        <div className="mt-6 sm:mt-8 mb-4">
          <Button
            type="submit"
            variant="primary"
            className="px-6 sm:px-8 py-3 !font-bold rounded-[48px] w-full sm:w-[190px]"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ProfileCompletionContent
