import React from 'react'
import Volvo from '../assets/Auction-Img/Volvo_EEC380.jpg'
import Caterpillar from '../assets/Auction-Img/Caterpillar_D6N.jpg'
import Komatsu from '../assets/Auction-Img/Komatsu_PC360LC.jpg'
import JohnDeere from '../assets/Auction-Img/Johan_Deere_650K.jpg'

const ShortVideos = () => {
    const videos = [
        { title: 'John Deere 850K Doz...', views: '2.1k views', img: JohnDeere },
        { title: 'Liebherr LTM 1200 Cra...', views: '3.4k views', img: Volvo },
        { title: 'CAT 320D Excavator', views: '2.9k views', img: Caterpillar },
        { title: 'CAT 336D L Hydraulic...', views: '4.2k views', img: JohnDeere },
        { title: 'Volvo EC950F Crawler...', views: '3.7k views', img: Volvo },
        { title: 'Komatsu PC360LCI-11...', views: '2.4k views', img: Komatsu },
    ]

    return (
        <section className="mt-10">
            <h2 className="text-[24px] font-bold text-[#1A1C1E] font-inter mb-6 px-1 lg:px-0">Short videos</h2>
            <div className="flex overflow-x-auto gap-4 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none snap-x snap-mandatory">
                {videos.map((video, idx) => (
                    <div key={idx} className="min-w-[140px] sm:min-w-[163px] snap-start group b-card-hover">
                        <div className="relative aspect-[163/240] rounded-[12px] overflow-hidden bg-gray-100 mb-3">
                            <img
                                src={video.img}
                                alt={video.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Gradient overlay for better text contrast if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="text-[14px] font-bold text-[#1A1C1E] mb-0.5 line-clamp-1 font-inter leading-tight">{video.title}</h3>
                        <p className="text-[12px] text-[#6E7375] font-inter">{video.views}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ShortVideos
