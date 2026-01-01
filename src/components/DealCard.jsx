import React from 'react'
import Button from './Button'

const DealCard = ({ deal }) => {
    // Mock navigate function since react-router-dom is not set up yet
    const navigate = (path) => {
        console.log(`Navigating to: ${path}`)
    }

    return (
        <div className="group md:b-card-hover hover:b-card-hover-none flex flex-col h-full">
            <div className="relative aspect-[163/194] xl:aspect-[4/3] rounded-[8px] overflow-hidden bg-gray-100 mb-3">
                <img
                    src={deal.img || deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-[#EF4444] text-white text-[10px] font-normal px-2 py-1 rounded-[16px]">
                    {deal.discount}
                </div>
            </div>

            <div className="flex flex-col flex-1 gap-1">
                <h3 className="text-[14px] font-bold text-[#1A1C1E] line-clamp-1">{deal.title}</h3>
                <div className="flex items-center gap-1 text-[12px] text-[#6E7375]">
                    <span>{deal.year}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{deal.location}</span>
                </div>
                <div className="text-[14px] sm:text-[16px] font-bold text-[#1A1C1E] mt-auto">
                    ${deal.price}
                </div>
            </div>
        </div>
    )
}

export default DealCard
