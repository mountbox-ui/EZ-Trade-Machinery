import React from 'react'
import JohnDeere from '../assets/Auction-Img/Johan_Deere_650K.jpg'
import Komatsu from '../assets/Auction-Img/Komatsu_PC360LC.jpg'
import Caterpillar from '../assets/Auction-Img/Caterpillar_D6N.jpg'
import Volvo from '../assets/Auction-Img/Volvo_EEC380.jpg'
import EllipseIcon from '../assets/social_media_icons/Ellipse.svg'
import StarIcon from '../assets/social_media_icons/star.png'
import EquipmentCard from './EquipmentCard'

const EquipmentForYou = () => {
  const items = [
    {
      id: 1,
      title: 'John Deere 850K Dozer...',
      year: '2014',
      location: 'Nevada, USA',
      price: '65,000',
      image: JohnDeere
    },
    {
      id: 2,
      title: '2020 Komatsu D65 Dozer',
      year: '2018',
      location: 'Arizona, USA',
      price: '35,000',
      image: Komatsu
    },
    {
      id: 3,
      title: '2021 CAT 950M Wheel Loader',
      year: '2022',
      location: 'Montana, USA',
      price: '65,000',
      image: Caterpillar
    },
    {
      id: 4,
      title: 'CAT 320D Excavator...',
      year: '2001',
      location: 'Oregon, USA',
      price: '65,000',
      image: Volvo
    }
  ]

  return (
    <section className="w-full">
      <div className="flex items-center mb-4">
        <div className="flex items-center gap-2">
          <img src={StarIcon} alt="" className="w-6 h-6" />
          <h2 className="font-inter text-[16px] md:text-[18px] font-bold text-[#000000]">Equipment for you</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <EquipmentCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default EquipmentForYou

