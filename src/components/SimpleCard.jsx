import React from 'react'

const SimpleCard = ({ item }) => {
    return (
        <div className="group md:b-card-hover hover:b-card-hover-none">
            <div className="aspect-[1/1] rounded-[8px] overflow-hidden bg-gray-100 mb-2">
                <img
                    src={item.img || item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <h3 className="text-[12px] font-bold text-[#1A1C1E] line-clamp-1 mb-0.5">{item.title}</h3>
            <div className="text-[11px] text-[#6E7375]">${item.price}</div>
        </div>
    )
}

export default SimpleCard
