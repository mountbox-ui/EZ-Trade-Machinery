import React from 'react'
import JohnDeere from '../assets/Auction-Img/Johan_Deere_650K.jpg'
import Komatsu from '../assets/Auction-Img/Komatsu_PC360LC.jpg'
import Caterpillar from '../assets/Auction-Img/Caterpillar_D6N.jpg'
import Volvo from '../assets/Auction-Img/Volvo_EEC380.jpg'
import EllipseIcon from '../assets/social_media_icons/Ellipse.svg'
import HeartIcon from '../assets/social_media_icons/heart.svg'

const YouMayAlsoLike = () => {
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
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <img src={HeartIcon} alt="" className="w-6 h-6" />
          <h2 className="font-inter text-2xl font-bold text-[#000000]">You may also like</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group cursor-pointer b-card-hover h-full">
            <div className="relative rounded-[8px] overflow-hidden  mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-[300px] h-[216px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-inter font-bold text-base text-[#131214] line-clamp-1">{item.title}</h3>
              <div className="flex flex-wrap items-center text-sm font-inter font-normal text-[#6E7375] gap-1">
                <span>{item.year}</span>
                <img src={EllipseIcon} alt="" className="mx-1" />
                <span>{item.location}</span>
              </div>
              <div className="mt-1">
                <span className="font-bold text-[#131214] text-base">${item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default YouMayAlsoLike

