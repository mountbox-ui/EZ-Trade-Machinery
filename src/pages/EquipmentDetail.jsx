import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileBottomNav from '../components/MobileBottomNav'
import Button from '../components/Button'
import RecommendationCard from '../components/equipment/RecommendationCard'
import DetailRow from '../components/equipment/DetailRow'
import DetailSection from '../components/equipment/DetailSection'
import Caterpillar from '../assets/Auction-Img/Caterpillar_D6N.jpg'
import JohnDeere from '../assets/Auction-Img/Johan_Deere_650K.jpg'
import Komatsu from '../assets/Auction-Img/Komatsu_PC360LC.jpg'
import Volvo from '../assets/Auction-Img/Volvo_EEC380.jpg'
import Avatar1 from '../assets/account-icons/Avatar_1.png'
import EllipseIcon from '../assets/social_media_icons/Ellipse.svg'
import ReportIcon from '../assets/listing/report.svg'
import HistoryIcon from '../assets/listing/history.svg'

// Mock data - same as Listing page
const mockListings = [
  {
    id: 1,
    title: 'Caterpillar 320D Excavator',
    price: 199000,
    year: 2010,
    condition: 'Fair condition',
    location: 'California, USA',
    image: Caterpillar,
    sellerName: 'ABC',
    hoursUsed: 3500,
    variant: 'default'
  },
  {
    id: 2,
    title: 'Komatsu PC210LC-10 Excavator',
    price: 250000,
    year: 2015,
    condition: 'Good condition',
    location: 'Texas, USA',
    image: Caterpillar,
    sellerName: 'XYZ Equipment',
    hoursUsed: 2800,
    variant: 'default',
    isNegotiable: true
  },
  {
    id: 3,
    title: 'John Deere 2R00000000000000',
    price: 45000,
    year: 2018,
    condition: 'Excellent condition',
    location: 'Florida, USA',
    image: Caterpillar,
    sellerName: 'Farm Equipment Co',
    hoursUsed: 1200,
    variant: 'default'
  },
  {
    id: 4,
    title: 'Hitachi ZX350LC-5 Excavator',
    price: 140000,
    year: 2012,
    condition: 'Good condition',
    location: 'New York, USA',
    image: Caterpillar,
    sellerName: 'Construction Supplies',
    hoursUsed: 4200,
    variant: 'default',
    isNegotiable: true
  },
  {
    id: 5,
    title: 'Caterpillar 320D Excavator',
    price: 199000,
    year: 2010,
    condition: 'Fair condition',
    location: 'California, USA',
    image: Caterpillar,
    sellerName: 'ABC',
    hoursUsed: 3500,
    variant: 'default'
  },
  {
    id: 6,
    title: 'Komatsu PC210LC-10 Excavator',
    price: 250000,
    year: 2015,
    condition: 'Good condition',
    location: 'Texas, USA',
    image: Caterpillar,
    sellerName: 'XYZ Equipment',
    hoursUsed: 2800,
    variant: 'default'
  },
  {
    id: 7,
    title: 'John Deere 2R00000000000000',
    price: 45000,
    year: 2018,
    condition: 'Excellent condition',
    location: 'Florida, USA',
    image: Caterpillar,
    sellerName: 'Farm Equipment Co',
    hoursUsed: 1200,
    variant: 'default'
  },
  {
    id: 8,
    title: 'Hitachi ZX350LC-5 Excavator',
    price: 140000,
    year: 2012,
    condition: 'Good condition',
    location: 'New York, USA',
    image: Caterpillar,
    sellerName: 'Construction Supplies',
    hoursUsed: 4200,
    variant: 'default'
  },
  {
    id: 9,
    title: 'Caterpillar 320D Excavator',
    price: 199000,
    year: 2010,
    condition: 'Fair condition',
    location: 'California, USA',
    image: Caterpillar,
    sellerName: 'ABC',
    hoursUsed: 3500,
    variant: 'default'
  },
  {
    id: 10,
    title: 'Komatsu PC210LC-10 Excavator',
    price: 250000,
    year: 2015,
    condition: 'Good condition',
    location: 'Texas, USA',
    image: Caterpillar,
    sellerName: 'XYZ Equipment',
    hoursUsed: 2800,
    variant: 'default'
  },
  {
    id: 11,
    title: 'John Deere 2R00000000000000',
    price: 45000,
    year: 2018,
    condition: 'Excellent condition',
    location: 'Florida, USA',
    image: Caterpillar,
    sellerName: 'Farm Equipment Co',
    hoursUsed: 1200,
    variant: 'default'
  },
  {
    id: 12,
    title: 'Hitachi ZX350LC-5 Excavator',
    price: 140000,
    year: 2012,
    condition: 'Good condition',
    location: 'New York, USA',
    image: Caterpillar,
    sellerName: 'Construction Supplies',
    hoursUsed: 4200,
    variant: 'default'
  }
]

const EquipmentDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(0)
  const [expandedSections, setExpandedSections] = useState({
    specification: false,
    exterior: false,
    engine: false,
    gallery: false
  })

  // Find the equipment from mockListings based on id
  const listing = mockListings.find(item => item.id === parseInt(id)) || mockListings[0]
  
  // Transform listing data to equipment detail format
  const equipment = {
    id: listing.id,
    title: listing.title,
    year: listing.year,
    condition: listing.condition?.replace(' condition', '') || 'Used',
    location: listing.location,
    price: listing.price,
    isNegotiable: listing.isNegotiable || false,
    seller: {
      name: listing.sellerName || 'ABC seller',
      avatar: Avatar1
    },
    images: [
      JohnDeere,
      Komatsu,
      Volvo,
      listing.image
    ],
    details: {
      serialNumber: `N${String(listing.id).padStart(6, '0')}`,
      category: 'Excavator',
      manufacturer: listing.title.split(' ')[0],
      model: listing.title.split(' ').slice(1).join(' '),
      year: listing.year,
      hours: listing.hoursUsed || 0,
      hoursMotor: 'Verified',
      stockNumber: `ST${String(listing.id).padStart(6, '0')}`,
      condition: listing.condition || 'Used',
      operatingCertificate: 'Operable',
      rebuildType: 'Refurbished'
    },
    description: `This well-maintained ${listing.title} is in ${listing.condition || 'excellent'} working condition. Regular maintenance has been performed, and all service records are available. The equipment has been used primarily for commercial projects and shows minimal wear. Comes with all standard attachments and recent inspection certification.`,
    documents: [
      { name: 'Inspection Report', type: 'pdf' },
      { name: 'Repair History', type: 'pdf' }
    ],
    specifications: {
      weight: '45,000 lbs',
      dimensions: '25 ft x 8 ft x 10 ft',
      engine: 'Caterpillar C15',
      horsepower: '600 HP',
      transmission: 'Automatic',
      fuelType: 'Diesel'
    },
    exterior: {
      paintCondition: 'Good',
      bodyCondition: 'Minor scratches',
      tires: 'Good tread',
      lights: 'All working'
    },
    engine: {
      hours: listing.hoursUsed || 0,
      lastService: '2024-01-15',
      oilChange: '2024-01-15',
      filters: 'Replaced 2024-01-15'
    }
  }

  // Similar equipment from mockListings (excluding current item)
  const similarEquipment = mockListings
    .filter(item => item.id !== listing.id)
    .slice(0, 5)
    .map((item, index) => ({
      id: item.id,
      title: item.title.length > 25 ? `${item.title.substring(0, 25)}...` : item.title,
      year: String(item.year),
      location: item.location,
      price: item.price.toLocaleString(),
      image: item.image,
      isSponsored: index < 2 // First 2 items are sponsored
    }))

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const navLinks = [
    'Home',
    'Auctions',
    'Categories',
    'Deals',
    'Want to Buy',
    'Financing',
    'Shipping'
  ]

  const topLinks = [
    'Track Order',
    'Help & Support',
    'Get Verified'
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col !bg-[#F9FAFB]">
      <Navbar />
      
      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm mb-4 sm:mb-6">
          <Link to="/" className="text-[#6E7375] hover:text-[#FFB703] transition-colors">
            Home
          </Link>
          <span className="text-[#6E7375]">/</span>
          <Link to="/listings" className="text-[#6E7375] hover:text-[#FFB703] transition-colors">
            All Categories
          </Link>
          <span className="text-[#6E7375]">/</span>
          <span className="text-[#131214] font-medium">{equipment.title}</span>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[80px] mb-8 mt-4 sm:mt-[60px]">
          {/* Left Panel - Images */}
          <div className="flex-shrink-0 w-full lg:w-[550px]">
            {/* Main Image */}
            <div className="relative rounded-[8px] overflow-hidden mb-4">
              <img
                src={equipment.images[selectedImage]}
                alt={equipment.title}
                className="w-full lg:w-[600px] h-auto lg:h-[400px] object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {equipment.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-[8px] overflow-hidden aspect-square ${
                    selectedImage === index ? '' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${equipment.title} ${index + 1}`}
                    className={`w-full h-full object-cover transition-opacity ${
                      selectedImage === index ? 'opacity-100' : 'opacity-70'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel - Details */}
          <div className="flex-1 min-w-0">
            {/* Seller Information */}
            <div className="flex items-center gap-2 mb-4 sm:mb-[22px]">
              <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#133E87] flex items-center justify-center text-[14px] sm:text-[16px] font-bold text-white">
                {equipment.seller.name
                  .split(' ')
                  .map((word) => word[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="text-[#131214] font-['Inter'] text-[14px] sm:text-[16px] font-bold leading-[120%] tracking-[0] mb-1">{equipment.seller.name}</span>
                <button
                  type="button"
                  className="text-[#6E7375] font-inter text-[12px] sm:text-[14px] font-medium leading-[100%] tracking-[0] text-left"
                >
                  Visit store
                </button>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="font-inter overflow-hidden text-ellipsis lg:whitespace-nowrap text-[#131214] text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[120%] tracking-[0] mb-3">
              {equipment.title}
            </h1>

            {/* Basic Info */}
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis lg:whitespace-nowrap flex-wrap text-[#6E7375] font-inter text-[14px] sm:text-[16px] lg:text-[18px] font-medium leading-[100%] tracking-[0] pb-6 border-b border-[#E6E9EB]">
              <span>{equipment.year}</span>
              <img src={EllipseIcon} alt="" className="w-2 h-2" />
              <span>{equipment.condition}</span>
              <img src={EllipseIcon} alt="" className="w-2 h-2" />
              <span>{equipment.location}</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 mb-6 pt-6 pb-6 border-b border-[#E6E9EB] flex-wrap">
              <span className="font-inter font-bold text-2xl sm:text-3xl lg:text-4xl text-[#131214]">
                ${equipment.price.toLocaleString()}
              </span>
              {equipment.isNegotiable && (
                <div className="flex items-center gap-1 text-green-600">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap text-[#008557] font-inter text-[14px] sm:text-[16px] font-normal leading-[150%] tracking-[0]">Negotiable</span>
                </div>
              )}
            </div>

            {/* Equipment Details Table */}
            <div className="py-4 sm:py-6 mb-6 border-b border-[#E6E9EB]">
              <h3 className="text-[#131214] font-inter text-[16px] sm:text-[18px] font-bold leading-[100%] tracking-[0] mb-4 sm:mb-6">Equipment Details</h3>
              <div className="space-y-3">
                <DetailRow label="Serial Number" value={equipment.details.serialNumber} />
                <DetailRow label="Category" value={equipment.details.category} />
                <DetailRow label="Manufacturer" value={equipment.details.manufacturer} />
                <DetailRow label="Model" value={equipment.details.model} />
                <DetailRow label="Year" value={equipment.details.year} />
                <DetailRow label="Hours" value={equipment.details.hours} />
                <DetailRow label="Hours Motor" value={equipment.details.hoursMotor} />
                <DetailRow label="Stock Number" value={equipment.details.stockNumber} />
                <DetailRow label="Condition" value={equipment.details.condition} />
                <DetailRow label="Operating Certificate" value={equipment.details.operatingCertificate} />
                <DetailRow label="Rebuild Type" value={equipment.details.rebuildType} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 w-full lg:w-[500px]">
              <Button
                variant="primary"
                className="flex-1 rounded-[48px] h-[48px] text-[#2F3133] !font-bold"
                onClick={() => navigate('/chat')}
              >
                Chat with seller
              </Button>
              <Button
                variant="edit"
                className="flex-1 h-[48px] text-[#53575A] !font-bold !text-[16px]"
                onClick={() => console.log('Add to favourite')}
              >
                Add to favourite
              </Button>
            </div>

            {/* Documents */}
            <div className="mb-6 border-y border-[#E6E9EB] py-4 sm:py-6">
              <h3 className="font-inter font-bold text-[16px] sm:text-[18px] text-[#131214] mb-3 sm:mb-4">Document/Attachment</h3>
              <div className="flex flex-wrap gap-3">
                {equipment.documents.map((doc, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center justify-center gap-1 bg-white hover:bg-[#F4F6F7] rounded-[8px] border border-[#E6E9EB] p-3 sm:p-4 flex-1 min-w-[140px] sm:min-w-[180px] transition-colors"
                  >
                    {doc.name === 'Inspection Report' ? (
                      <img src={ReportIcon} alt="Inspection Report" className="w-[32px] h-[32px]" />
                    ) : (
                      <img src={HistoryIcon} alt="Repair History" className="w-[32px] h-[32px]" />
                    )}
                    <span className="font-inter text-sm font-bold text-[#131214] text-center">{doc.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="my-4 sm:my-6">
              <h3 className="font-inter font-bold text-[16px] sm:text-[18px] text-[#131214] mb-2 sm:mb-4">Description</h3>
              <p className="font-inter text-sm sm:text-md text-[#6E7375] leading-[150%] font-normal tracking-[0]">
                {equipment.description}
              </p>
            </div>

            {/* Collapsible Sections */}
            <div className="space-y-2 pb-6 mb-6">
              {/* Equipment Specification */}
              <DetailSection
                title="Equipment Specification"
                isExpanded={expandedSections.specification}
                onToggle={() => toggleSection('specification')}
              >
                <div className="space-y-2">
                  <DetailRow label="Weight" value={equipment.specifications.weight} />
                  <DetailRow label="Dimensions" value={equipment.specifications.dimensions} />
                  <DetailRow label="Engine" value={equipment.specifications.engine} />
                  <DetailRow label="Horsepower" value={equipment.specifications.horsepower} />
                  <DetailRow label="Transmission" value={equipment.specifications.transmission} />
                  <DetailRow label="Fuel Type" value={equipment.specifications.fuelType} />
                </div>
              </DetailSection>

              {/* Exterior */}
              <DetailSection
                title="Exterior"
                isExpanded={expandedSections.exterior}
                onToggle={() => toggleSection('exterior')}
              >
                <div className="space-y-2">
                  <DetailRow label="Paint Condition" value={equipment.exterior.paintCondition} />
                  <DetailRow label="Body Condition" value={equipment.exterior.bodyCondition} />
                  <DetailRow label="Tires" value={equipment.exterior.tires} />
                  <DetailRow label="Lights" value={equipment.exterior.lights} />
                </div>
              </DetailSection>

              {/* Engine */}
              <DetailSection
                title="Engine"
                isExpanded={expandedSections.engine}
                onToggle={() => toggleSection('engine')}
              >
                <div className="space-y-2">
                  <DetailRow label="Hours" value={equipment.engine.hours} />
                  <DetailRow label="Last Service" value={equipment.engine.lastService} />
                  <DetailRow label="Oil Change" value={equipment.engine.oilChange} />
                  <DetailRow label="Filters" value={equipment.engine.filters} />
                </div>
              </DetailSection>

              {/* Equipment Image Gallery */}
              <DetailSection
                title="Equipment Image Gallery"
                isExpanded={expandedSections.gallery}
                onToggle={() => toggleSection('gallery')}
              >
                <div className="grid grid-cols-3 gap-2">
                  {equipment.images.map((image, index) => (
                    <div key={index} className="aspect-square rounded-[8px] overflow-hidden bg-[#F4F6F7]">
                      <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </DetailSection>
            </div>

            {/* Similar Equipment Section */}
            <div className="mt-6">
              <h2 className="font-inter font-bold text-[16px] sm:text-[18px] text-[#131214] mb-4">Similar Equipment</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {similarEquipment.map((item) => (
                  <RecommendationCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomNav navLinks={navLinks} topLinks={topLinks} />
    </div>
  )
}

export default EquipmentDetail

