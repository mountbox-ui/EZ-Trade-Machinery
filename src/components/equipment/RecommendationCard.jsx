import React from 'react'
import { useNavigate } from 'react-router-dom'
import SponsorIcon from '../../assets/listing/sponsor.svg'

const RecommendationCard = ({ item }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/equipment/${item.id}`)
    }

    return (
        <div className="group cursor-pointer  hover:b-card-hover-none h-full" onClick={handleClick}>
            <div className="relative rounded-[8px] overflow-hidden mb-3">
                <img
                    src={item.image || item.img}
                    alt={item.title}
                    className="w-[162px] h-[217px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="font-inter font-bold text-base text-[#131214] line-clamp-1">{item.title}</h3>
                <div>
                    <span className="font-bold text-[#6E7375] text-md">${item.price}</span>
                </div>
                {item.isSponsored && (
                    <div className="flex items-center gap-1 mt-1">
                        <span className="font-jakarta text-xs text-[#6E7375]">Sponsored</span>
                        <img src={SponsorIcon} alt="Sponsored" className="w-4 h-4" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default RecommendationCard
