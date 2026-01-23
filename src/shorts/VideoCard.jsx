import React from 'react'

const VideoCard = ({ video }) => {
    return (
        <div className="min-w-[140px] sm:min-w-[163px] snap-start group md:b-card-hover hover:b-card-hover-none">
            <div className="relative aspect-[163/240] rounded-[12px] overflow-hidden bg-gray-100 mb-3">
                <img
                    src={video.img || video.image}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-[14px] font-bold text-[#1A1C1E] mb-0.5 line-clamp-1 font-inter leading-tight">{video.title}</h3>
            <p className="text-[12px] text-[#6E7375] font-inter">{video.views}</p>
        </div>
    )
}

export default VideoCard
