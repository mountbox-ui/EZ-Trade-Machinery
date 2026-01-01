import React from 'react'
import clockSm from '../assets/Auction-Img/Clock_SM.svg'
import Button from './Button'

const AuctionCard = ({ item }) => {
    // Mock navigate function since react-router-dom is not set up yet
    const navigate = (path) => {
        console.log(`Navigating to: ${path}`)
    }

    return (
        <div key={item.id} className="flex flex-col gap-3 min-w-[250px] sm:min-w-[320px] lg:min-w-0 shrink-0 lg:shrink md:b-card-hover h-full hover:b-card-hover-none">
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden bg-gray-100 group">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-[#FFB703] px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <img src={clockSm} alt="Clock" />
                    <span className="text-[10px] font-bold text-gray-900">Ends in: {item.timeLeft}</span>
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="font-bold text-sm text-gray-900 line-clamp-1">{item.title}</h3>
                <div className="flex flex-wrap items-center text-[11px] text-gray-500 gap-1">
                    <span>{item.year}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{item.location}</span>
                    {item.condition && (
                        <>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span>{item.condition}</span>
                        </>
                    )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 17l6-6 4 4 8-8" />
                            <path d="M13 7h8v8" />
                        </svg>
                        <span className="font-bold text-gray-900 text-sm">${item.price}</span>
                    </div>
                    <span className="text-[11px] text-gray-500">{item.bids} bids</span>
                </div>
            </div>

            <Button
                variant="secondary"
                className="w-full"
                onClick={() => navigate(`/auction/${item.id}`)}
            >
                <span className="font-bold">Place bid</span>
            </Button>
        </div>
    )
}

export default AuctionCard
