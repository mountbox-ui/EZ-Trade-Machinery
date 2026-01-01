import React from 'react'
import EllipseIcon from '../assets/social_media_icons/Ellipse.svg'

const NewListingCard = ({ listing }) => {
    return (
        <div className="group flex items-start gap-4 md:b-card-hover hover:b-card-hover-none">
            <div className="relative rounded-[8px] overflow-hidden flex-shrink-0">
                <img
                    src={listing.image || listing.img}
                    alt={listing.title}
                    className="w-[140px] h-[90px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-0 md:gap-1 flex-1">
                <h3 className="font-inter font-normal text-base text-[#131214] line-clamp-1">{listing.title}</h3>
                <div className="flex flex-wrap items-center text-sm font-inter font-normal text-[#6E7375] gap-1">
                    <span>{listing.year}</span>
                    <img src={EllipseIcon} alt="" className="mx-1" />
                    <span>{listing.condition}</span>
                    <img src={EllipseIcon} alt="" className="mx-1" />
                    <span>{listing.location}</span>
                </div>
                <div className="mt-1">
                    <span className="font-bold text-[#131214] text-sm">${listing.price}</span>
                </div>
            </div>
        </div>
    )
}

export default NewListingCard
