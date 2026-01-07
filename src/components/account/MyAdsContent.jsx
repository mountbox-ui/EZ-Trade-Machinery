import React, { useState } from 'react'
import Card from '../Card'
import MyAdsCard from './MyAdsCard'
import JohnDeere from '../../assets/Auction-Img/Johan_Deere_650K.jpg'
import Komatsu from '../../assets/Auction-Img/Komatsu_PC360LC.jpg'
import Caterpillar from '../../assets/Auction-Img/Caterpillar_D6N.jpg'

const MyAdsContent = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState('auctions')

  const tabs = [
    { id: 'auctions', label: 'Auctions' },
    { id: 'listings', label: 'Listings' },
    { id: 'pending', label: 'Pending' }
  ]

  // Sample ads data for My Ads
  const ads = [
    {
      id: 1,
      title: 'Caterpillar 320D Excavator',
      year: '2015',
      condition: 'Excellent condition',
      location: 'California, USA',
      price: '120,000',
      image: Caterpillar,
      sellerName: 'Abc seller'
    },
    {
      id: 2,
      title: 'Komatsu PC210LC-10 Excavator',
      year: '2016',
      condition: 'Good condition',
      location: 'Florida, USA',
      price: '150,000',
      image: Komatsu,
      sellerName: 'Abc seller'
    },
    {
      id: 3,
      title: 'John Deere 310 Backhoe Loader',
      year: '2014',
      condition: 'Fair condition',
      location: 'New York, USA',
      price: '45,000',
      image: JohnDeere,
      sellerName: 'Abc seller'
    }
  ]

  return (
    <div className={className}>
      {/* Page title + divider + tabs (no extra vertical gap between divider and tabs) */}
      <div>
        <h1 className="text-[32px] font-bold text-[#131214] font-inter">My Ads</h1>
        <div className="py-8">
          <div className="h-px w-full bg-[#DADDDE]" />
        </div>
        {/* Tabs - pill style segmented control */}
        <div className="ml-0 md:ml-4">
          <div className="flex bg-[var(--semantic-bg-subtle,#F4F6F7)] rounded-full p-1 gap-1 w-auto md:w-[524px]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2 text-[16px] font-inter rounded-full text-center transition-colors ${
                    isActive
                      ? 'bg-[var(--semantic-bg-surface,#FFF)] text-[var(--semantic-fg-link,#6E7375)] font-bold shadow-[0_0_1px_0_rgba(20,20,20,0.12),_0_1px_8px_0_rgba(20,20,20,0.08)]'
                      : 'text-[var(--semantic-fg-subtle,#898D8F)] font-bold'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Ads list */}
      <Card fullWidth padding={false} className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ads.map((ad, index) => (
            <MyAdsCard
              key={ad.id}
              listing={ad}
              variant="default"
              isNegotiable={index === 1}
            />
          ))}
        </div>
      </Card>
    </div>
  )
}

export default MyAdsContent


