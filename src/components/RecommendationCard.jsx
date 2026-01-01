import React from 'react'
import EllipseIcon from '../assets/social_media_icons/Ellipse.svg'

const RecommendationCard = ({ item }) => {
    return (
        <div className="group cursor-pointer md:b-card-hover hover:b-card-hover-none h-full">
            <div className="relative rounded-[8px] overflow-hidden mb-3">
                <img
                    src={item.image || item.img}
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
    )
}

export default RecommendationCard
