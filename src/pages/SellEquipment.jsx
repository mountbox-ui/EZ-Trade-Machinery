import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileBottomNav from '../components/MobileBottomNav'
import Button from '../components/Button'
import Input from '../components/Input'
import Label from '../components/Label'
import Card from '../components/form/Card'
import FormSection from '../components/form/FormSection'
import Select from '../components/form/Select'
import Textarea from '../components/form/Textarea'
import Checkbox from '../components/form/Checkbox'
import UploadButton from '../components/form/UploadButton'
import ImageUpload from '../components/form/ImageUpload'
import InfoAlert from '../components/form/InfoAlert'
import ReportIcon from '../assets/listing/report.svg'
import HistoryIcon from '../assets/listing/history.svg'
import PlusIcon from '../assets/listing/plus.svg'

const SellEquipment = () => {
  const categories = [
    { id: 1, name: 'Excavators' },
    { id: 2, name: 'Bulldozers' },
    { id: 3, name: 'Loaders' },
    { id: 4, name: 'Cranes' },
    { id: 5, name: 'Compactors' }
  ]

  const conditions = [
    { id: 1, name: 'Excellent' },
    { id: 2, name: 'Good' },
    { id: 3, name: 'Fair' },
    { id: 4, name: 'Poor' }
  ]

  const listingTypes = [
    { id: 1, name: 'Direct Sale' },
    { id: 2, name: 'Auction' },
    { id: 3, name: 'Rent' }
  ]

  const [formData, setFormData] = useState({
    serialNumber: '',
    category: '',
    manufacturer: '',
    model: '',
    year: '',
    hours: '',
    condition: '',
    location: '',
    description: '',
    listingType: 1, // Direct Sale
    price: '',
    isNegotiable: false,
    inspectionReport: null,
    repairHistory: null,
    additionalDetails: null,
    images: []
  })

  const [errors, setErrors] = useState({})
  const [showAdditionalDetailsModal, setShowAdditionalDetailsModal] = useState(false)
  const [activeTab, setActiveTab] = useState('general')
  
  const [additionalDetailsData, setAdditionalDetailsData] = useState({
    idleHours: '',
    hoursMeter: '',
    generationBuildNumber: '',
    productConfiguration: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const handleFileSelect = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }))
  }

  const handleImagesChange = (images) => {
    setFormData(prev => ({
      ...prev,
      images
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validation
    const newErrors = {}
    if (!formData.category) newErrors.category = 'Category is required'
    if (!formData.manufacturer) newErrors.manufacturer = 'Manufacturer is required'
    if (!formData.model) newErrors.model = 'Model is required'
    if (!formData.price) newErrors.price = 'Price is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Handle form submission
    console.log('Form submitted:', formData)
    // Navigate or show success message
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm mb-4 sm:mb-8">
          <Link to="/" className="text-[#6E7375] hover:text-[#FFB703] transition-colors">
            Home
          </Link>
          <span className="text-[#6E7375]">/</span>
          <span className="text-[#131214] font-medium">Sell Equipment</span>
        </nav>

        {/* Page Title */}
        <h1 className="font-inter text-center font-bold text-2xl sm:text-3xl lg:text-[32px] text-[#131214] mb-6 sm:mb-8">
          Sell Equipment
        </h1>

        {/* Form Card */}
        <div className="max-w-4xl mx-auto">
          <Card variant="default" className="w-full">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Photos Section */}
              <FormSection title="Photos">
                <ImageUpload
                  variant="drag-drop"
                  onImagesChange={handleImagesChange}
                  maxImages={10}
                />
              </FormSection>

              {/* Equipment Details Section */}
              <FormSection title="Equipment Details">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <Label htmlFor="Serial Number">
                      Serial Number
                    </Label>
                    <Input
                      id="serialNumber"
                      type="text"
                      placeholder=""
                      value={formData.serialNumber}
                      onChange={(e) => handleInputChange('serialNumber', e.target.value)}
                      variant="enabled"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category" required>
                      Category
                    </Label>
                    <Select
                      options={categories}
                      value={formData.category}
                      onChange={(value) => handleInputChange('category', value)}
                      placeholder="Select"
                      variant={errors.category ? 'error' : 'default'}
                    />
                    {errors.category && (
                      <p className="text-sm text-[#FF9175] mt-1">{errors.category}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="manufacturer" required>
                      Manufacturer
                    </Label>
                    <Input
                      id="manufacturer"
                      type="text"
                      placeholder="e.g., Caterpillar"
                      value={formData.manufacturer}
                      onChange={(e) => handleInputChange('manufacturer', e.target.value)}
                      variant={errors.manufacturer ? 'error' : 'enabled'}
                    />
                    {errors.manufacturer && (
                      <p className="text-sm text-[#FF9175] mt-1">{errors.manufacturer}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="model" required>
                      Model
                    </Label>
                    <Input
                      id="model"
                      type="text"
                      placeholder="e.g., 320D"
                      value={formData.model}
                      onChange={(e) => handleInputChange('model', e.target.value)}
                      variant={errors.model ? 'error' : 'enabled'}
                    />
                    {errors.model && (
                      <p className="text-sm text-[#FF9175] mt-1">{errors.model}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="year">
                      Year
                    </Label>
                    <Input
                      id="year"
                      type="text"
                      placeholder="2020"
                      value={formData.year}
                      onChange={(e) => handleInputChange('year', e.target.value)}
                      variant="enabled"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hours">
                      Hours
                    </Label>
                    <Input
                      id="hours"
                      type="text"
                      placeholder="5000"
                      value={formData.hours}
                      onChange={(e) => handleInputChange('hours', e.target.value)}
                      variant="enabled"
                    />
                  </div>

                  <div>
                    <Label htmlFor="condition">
                      Condition
                    </Label>
                    <Select
                      options={conditions}
                      value={formData.condition}
                      onChange={(value) => handleInputChange('condition', value)}
                      placeholder="Select condition"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">
                      Location
                    </Label>
                    <Input
                      id="location"
                      type="text"
                      placeholder="City, State, Country"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      variant="enabled"
                    />
                  </div>
                </div>

                <div className="mt-4 sm:mt-6">
                  <Label htmlFor="description">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the equipment, its condition, any recent maintenance, etc."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    variant="default"
                    autoGrow={true}
                    rows={4}
                  />
                </div>
              </FormSection>

              {/* Listing Type Section */}
              <FormSection title="Listing Type">
                <div className="w-full sm:w-auto sm:max-w-[300px]">
                  <Select
                    options={listingTypes}
                    value={formData.listingType}
                    onChange={(value) => handleInputChange('listingType', value)}
                    placeholder="Select listing type"
                  />
                </div>
              </FormSection>

              {/* Upload Documents Section */}
              <FormSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <UploadButton
                    label="Upload Inspection Report"
                    subtext="Max 5MB, (PDF or PNG)"
                    variant="secondary"
                    icon={ReportIcon}
                    onFileSelect={(file) => handleFileSelect('inspectionReport', file)}
                    accept=".pdf,.png"
                  />
                  <UploadButton
                    label="Upload Repair History"
                    subtext="Max 5MB, (PDF or PNG)"
                    variant="secondary"
                    icon={HistoryIcon}
                    onFileSelect={(file) => handleFileSelect('repairHistory', file)}
                    accept=".pdf,.png"
                  />
                </div>
              </FormSection>

              {/* Additional Details Section */}
              <FormSection>
                <div className="space-y-3">
                  <Button
                    type="button"
                    variant="tertiary"
                    className="bg-white !rounded-[48px] border border-[#53575A] !text-[#53575A] px-3 sm:px-4 py-2 font-inter !text-[14px] sm:!text-[16px] !font-bold hover:bg-[#F4F6F7] transition-colors flex items-center gap-2 w-full sm:w-auto"
                    onClick={() => setShowAdditionalDetailsModal(true)}
                  >
                    <img src={PlusIcon} alt="Plus" className="w-5 h-5 sm:w-6 sm:h-6" />
                    Add Additional Details
                  </Button>
                  <p className="font-inter text-sm text-[#6E7375] w-full sm:w-[400px]">
                    More details means a more informed buyer and can lead to a quicker sale! We can also collect this later.
                  </p>
                </div>
              </FormSection>
              <hr className="border-t border-[#E6E9EB] my-6" />

              {/* Price Section */}
              <FormSection>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="price" required>
                      Price (USD)
                    </Label>
                    <div className="relative mt-2">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E7375] font-inter text-[16px] font-medium">
                        $
                      </span>
                      <Input
                        id="price"
                        type="text"
                        placeholder="Enter price"
                        value={formData.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                        variant={errors.price ? 'error' : 'enabled'}
                        className="pl-8"
                      />
                    </div>
                    {errors.price && (
                      <p className="text-sm text-[#FF9175] mt-1">{errors.price}</p>
                    )}
                  </div>
                  <Checkbox
                    label="Price is negotiable"
                    checked={formData.isNegotiable}
                    onChange={(e) => handleInputChange('isNegotiable', e.target.checked)}
                    variant="toggle"
                  />
                </div>
              </FormSection>

              {/* Submit Button */}
              <div className="pt-4 sm:pt-5 pb-3 sm:pb-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto !py-6 !rounded-full flex items-center justify-center !bg-[#FFC733] hover:!bg-[#FFC733]/90 active:scale-[0.98] !text-[#2F3133] !font-bold"
                >
                  Publish Listing
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </main>

      {/* Additional Details Modal */}
      {showAdditionalDetailsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/50 transition-opacity">
          <div className="h-full w-full sm:w-[600px] lg:w-[638px] bg-white shadow-xl overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-[#E6E9EB] px-6 py-4 flex items-center justify-between z-10">
              <h2 className="font-inter text-[20px] font-bold text-[#131214]">
                Add Additional Details
              </h2>
              <button
                type="button"
                onClick={() => setShowAdditionalDetailsModal(false)}
                className="p-2 hover:bg-[#F4F6F7] rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6 text-[#6E7375]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Tabs */}
              <div className="flex border-b border-[#E6E9EB] mb-6 -mx-6 px-6 overflow-x-auto">
                {[
                  { id: 'general', label: 'General' },
                  { id: 'attachments', label: 'Attachments' },
                  { id: 'capacities', label: 'Capacities' },
                  { id: 'categorySpecific', label: 'Category Specific' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 font-inter text-[16px] font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-[#FFB703] text-[#131214]'
                        : 'border-transparent text-[#6E7375] hover:text-[#131214]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'general' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="idleHours">Idle Hours</Label>
                    <Input
                      id="idleHours"
                      type="text"
                      placeholder=""
                      value={additionalDetailsData.idleHours}
                      onChange={(e) =>
                        setAdditionalDetailsData((prev) => ({
                          ...prev,
                          idleHours: e.target.value
                        }))
                      }
                      variant="enabled"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hoursMeter">Hours Meter</Label>
                    <Select
                      options={[
                        { id: 1, name: 'Operating Hours' },
                        { id: 2, name: 'Engine Hours' },
                        { id: 3, name: 'Total Hours' }
                      ]}
                      value={additionalDetailsData.hoursMeter}
                      onChange={(value) =>
                        setAdditionalDetailsData((prev) => ({
                          ...prev,
                          hoursMeter: value
                        }))
                      }
                      placeholder="Select"
                    />
                  </div>

                  <div>
                    <Label htmlFor="generationBuildNumber">Generation / Build Number</Label>
                    <Input
                      id="generationBuildNumber"
                      type="text"
                      placeholder="e.g., Caterpillar"
                      value={additionalDetailsData.generationBuildNumber}
                      onChange={(e) =>
                        setAdditionalDetailsData((prev) => ({
                          ...prev,
                          generationBuildNumber: e.target.value
                        }))
                      }
                      variant="enabled"
                    />
                  </div>

                  <div>
                    <Label htmlFor="productConfiguration">Product Configuration</Label>
                    <Input
                      id="productConfiguration"
                      type="text"
                      placeholder="e.g., 320D"
                      value={additionalDetailsData.productConfiguration}
                      onChange={(e) =>
                        setAdditionalDetailsData((prev) => ({
                          ...prev,
                          productConfiguration: e.target.value
                        }))
                      }
                      variant="enabled"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'attachments' && (
                <div className="text-center py-12 text-[#6E7375]">
                  Attachments content coming soon
                </div>
              )}

              {activeTab === 'capacities' && (
                <div className="text-center py-12 text-[#6E7375]">
                  Capacities content coming soon
                </div>
              )}

              {activeTab === 'categorySpecific' && (
                <div className="text-center py-12 text-[#6E7375]">
                  Category Specific content coming soon
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-[#E6E9EB] px-6 py-4 flex items-center justify-end gap-3">
              <Button
                type="button"
                variant="tertiary"
                className="!bg-[#F4F6F7] !text-[#53575A] px-6 py-2 !font-bold hover:!bg-[#E8EBEB]"
                onClick={() => setShowAdditionalDetailsModal(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                variant="primary"
                className="!bg-[#FFC733] !text-[#2F3133] px-6 py-2 !font-bold hover:!bg-[#FFC733]/90"
                onClick={() => {
                  // Save additional details data
                  setFormData((prev) => ({
                    ...prev,
                    additionalDetails: additionalDetailsData
                  }))
                  setShowAdditionalDetailsModal(false)
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <MobileBottomNav 
        navLinks={['Home', 'Auctions', 'Categories', 'Deals', 'Want to Buy', 'Financing', 'Shipping']}
        topLinks={['Track Order', 'Help & Support', 'Get Verified']}
      />
    </div>
  )
}

export default SellEquipment

