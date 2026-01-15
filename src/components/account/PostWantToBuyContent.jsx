import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Button from '../Button'
import Input from '../Input'
import LookingForButton from './LookingForButton'
import infoIcon from '../../assets/account-icons/info.svg'

const PostWantToBuyContent = ({ className = '' }) => {
  const [lookingFor, setLookingFor] = useState('equipment')
  const [formData, setFormData] = useState({
    category: '',
    manufacturer: '',
    model: '',
    machineCategory: '',
    year: '',
    serialNumber: '',
    priceLimit: '',
    currency: 'USD',
    quantity: '1',
    planningToBuy: 'Immediately',
    shortDescription: '',
    otherComments: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { lookingFor, ...formData })
    // Handle form submission
  }

  const currencies = ['USD', 'EUR', 'GBP', 'AUD', 'CAD']
  const planningOptions = ['Immediately', 'Within 1 month', 'Within 3 months', 'Within 6 months', 'Just browsing']

  return (
    <div className={className}>
      {/* Page Title */}
      <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-[#131214] font-['Inter'] text-xl sm:text-2xl lg:text-[32px] font-bold leading-[120%] tracking-[0]">
        Post A Want-To-Buy
      </h1>
      <hr className="border-t border-gray-200 my-4 sm:my-6 lg:my-8"/>

      {/* Information Alert */}
      <div className="rounded-[14px] border border-[#BEDBFF] bg-[#EFF6FF] w-full lg:w-[764px] mx-auto p-3 sm:p-4 mb-4 sm:mb-6 flex items-start gap-2 sm:gap-3">
        <img src={infoIcon} alt="Info" className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
        <p className="text-[#1C398E] font-['Inter'] text-xs sm:text-[14px] font-normal leading-[150%] tracking-[0]">
        Please be sure to fill in the Manufacturer, Model, and Category fields so we can email you directly if the item you are looking for is entered in our site.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full lg:w-[764px] mx-auto">
        {/* Looking for Section */}
        <div>
          <label className="block text-[#131214] text-xs sm:text-[14px] font-medium leading-[100%] tracking-[0] mb-2 sm:mb-3 font-inter">
            Looking for:
          </label>
          <div className="flex flex-wrap gap-2 sm:gap-3 w-full mb-4 sm:mb-6">
            <LookingForButton
              value="equipment"
              label="Equipment"
              isActive={lookingFor === 'equipment'}
              onClick={() => setLookingFor('equipment')}
            />
            <LookingForButton
              value="attachments"
              label="Attachments"
              isActive={lookingFor === 'attachments'}
              onClick={() => setLookingFor('attachments')}
            />
            <LookingForButton
              value="parts"
              label="Parts"
              isActive={lookingFor === 'parts'}
              onClick={() => setLookingFor('parts')}
            />
          </div>
          <div>
            <label className="block text-[#131214] text-xs sm:text-[14px] font-medium leading-[100%] tracking-[0] mb-2 sm:mb-3 font-inter">
              Category
            </label>
            <div className="relative w-full lg:w-[360px]">
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full h-12 px-4 pr-10 rounded-[8px] bg-[#F4F6F7] border border-[#E6E9EB] text-[#898D8F] font-inter text-[16px] font-medium focus:outline-none focus:border-2 focus:border-[#6E7375] focus:shadow-[0_0_0_4px_#E9E9E9] appearance-none cursor-pointer"
              >
                <option value="">Select category</option>
                <option value="excavator">Excavator</option>
                <option value="wheel-loader">Wheel Loader</option>
                <option value="bulldozer">Bulldozer</option>
                <option value="backhoe">Backhoe</option>
                <option value="skid-steer">Skid Steer</option>
              </select>
              <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E7375] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Enter machine information section */}
        <div>
          <h2 className="text-[#131214] text-base sm:text-[18px] font-bold leading-[120%] tracking-[0] mb-4 sm:mb-6 font-inter">
            Enter machine information for which attachment or component is needed.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-[#131214] text-xs sm:text-[14px] font-medium leading-[100%] tracking-[0] mb-2 sm:mb-3 font-inter">
                Manufacturer
              </label>
              <Input
                type="text"
                name="manufacturer"
                placeholder="e.g., Caterpillar"
                value={formData.manufacturer}
                onChange={handleInputChange}
                variant="enabled"
              />
            </div>
            <div>
              <label className="block text-[#131214] text-xs sm:text-[14px] font-medium leading-[100%] tracking-[0] mb-2 sm:mb-3 font-inter">
                Model
              </label>
              <Input
                type="text"
                name="model"
                placeholder="e.g., 320D"
                value={formData.model}
                onChange={handleInputChange}
                variant="enabled"
              />
            </div>
            <div>
              <label className="block text-[#131214] text-xs sm:text-[14px] font-medium leading-[100%] tracking-[0] mb-2 sm:mb-3 font-inter">
                Category
              </label>
              <div className="relative">
                <select
                  name="machineCategory"
                  value={formData.machineCategory}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 pr-10 rounded-[8px] bg-[#F4F6F7] border border-[#E6E9EB] text-[#898D8F] font-inter text-[16px] font-medium focus:outline-none focus:border-2 focus:border-[#6E7375] focus:shadow-[0_0_0_4px_#E9E9E9] appearance-none cursor-pointer"
                >
                  <option value="">Select category</option>
                  <option value="excavator">Excavator</option>
                  <option value="wheel-loader">Wheel Loader</option>
                  <option value="bulldozer">Bulldozer</option>
                  <option value="backhoe">Backhoe</option>
                  <option value="skid-steer">Skid Steer</option>
                </select>
                <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E7375] pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-[#131214] text-xs sm:text-[14px] font-medium leading-[100%] tracking-[0] mb-2 sm:mb-3 font-inter">
                Year
              </label>
              <Input
                type="text"
                name="year"
                placeholder="2020"
                value={formData.year}
                onChange={handleInputChange}
                variant="enabled"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-[#131214] text-xs sm:text-[14px] font-medium leading-[100%] tracking-[0] mb-2 sm:mb-3 font-inter">
                Serial #
              </label>
              <Input
                type="text"
                name="serialNumber"
                placeholder="Serial #"
                value={formData.serialNumber}
                onChange={handleInputChange}
                variant="enabled"
              />
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div>
          <h2 className="text-[#131214] text-base sm:text-[18px] font-bold leading-[120%] tracking-[0] mb-4 sm:mb-6 font-inter">
            Additional Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-[#131214] text-xs sm:text-[14px] font-medium leading-[100%] tracking-[0] mb-2 sm:mb-3 font-inter">
                Price Limit
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E7375] font-medium">$</span>
                <Input
                  type="text"
                  name="priceLimit"
                  placeholder="Price Limit"
                  value={formData.priceLimit}
                  onChange={handleInputChange}
                  variant="enabled"
                  className="pl-8"
                />
              </div>
            </div>
            <div>
              <label className="block text-[#131214] text-xs sm:text-[14px] font-medium leading-[100%] tracking-[0] mb-2 sm:mb-3 font-inter">
                Currency
              </label>
              <div className="relative">
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 pr-10 rounded-[8px] bg-[#F4F6F7] border border-[#E6E9EB] text-[#898D8F] font-inter text-[16px] font-medium focus:outline-none focus:border-2 focus:border-[#6E7375] focus:shadow-[0_0_0_4px_#E9E9E9] appearance-none cursor-pointer"
                >
                  {currencies.map((curr) => (
                    <option key={curr} value={curr}>
                      {curr}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E7375] pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-[#131214] text-xs sm:text-[14px] font-medium leading-[100%] tracking-[0] mb-2 sm:mb-3 font-inter">
                Quantity
              </label>
              <Input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                variant="enabled"
              />
            </div>
            <div>
              <label className="block text-[#131214] text-xs sm:text-[14px] font-medium leading-[100%] tracking-[0] mb-2 sm:mb-3 font-inter">
                Planning to Buy
              </label>
              <div className="relative">
                <select
                  name="planningToBuy"
                  value={formData.planningToBuy}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 pr-10 rounded-[8px] bg-[#F4F6F7] border border-[#E6E9EB] text-[#898D8F] font-inter text-[16px] font-medium focus:outline-none focus:border-2 focus:border-[#6E7375] focus:shadow-[0_0_0_4px_#E9E9E9] appearance-none cursor-pointer"
                >
                  {planningOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6E7375] pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
            <div>
              <label className="block text-[#131214] text-xs sm:text-[14px] font-medium leading-[100%] tracking-[0] mb-2 sm:mb-3 font-inter">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                placeholder="Describe the equipment, its condition, any recent maintenance, etc."
                value={formData.shortDescription}
                onChange={handleInputChange}
                rows={4}
                className="w-full h-[114px] px-3 sm:px-4 py-2 sm:py-3 rounded-[8px] border border-[#E6E9EB] bg-white text-[#898D8F] font-inter text-sm sm:text-[16px] font-normal leading-[150%] tracking-[0] focus:outline-none focus:border-2 focus:border-[#6E7375] focus:shadow-[0_0_0_4px_#E9E9E9] resize-none"
              />
            </div>
            <div>
              <label className="block text-[#131214] text-xs sm:text-[14px] font-medium leading-[100%] tracking-[0] mb-2 sm:mb-3 font-inter">
                Other Comments
              </label>
              <textarea
                name="otherComments"
                placeholder=""
                value={formData.otherComments}
                onChange={handleInputChange}
                rows={4}
                className="w-full h-[114px] px-3 sm:px-4 py-2 sm:py-3 rounded-[8px] border border-[#E6E9EB] bg-white text-[#898D8F] font-inter text-sm sm:text-[16px] font-normal leading-[150%] tracking-[0] focus:outline-none focus:border-2 focus:border-[#6E7375] focus:shadow-[0_0_0_4px_#E9E9E9] resize-none"
              />
            </div>
          </div>
        </div>

        {/* Publish Button */}
        <div className="pt-2 flex justify-center lg:justify-start">
          <Button
            type="submit"
            variant="primary"
            className="w-full sm:w-auto lg:w-[240px] h-auto lg:h-[48px] rounded-[48px] px-6 sm:px-8 py-3 sm:py-4 lg:py-6 text-[#2F3133] text-center !font-bold"
          >
            Publish
          </Button>
        </div>
      </form>
    </div>
  )
}

export default PostWantToBuyContent

