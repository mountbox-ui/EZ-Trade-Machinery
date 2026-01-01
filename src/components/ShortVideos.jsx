import React from 'react'
import Volvo from '../assets/Auction-Img/Volvo_EEC380.jpg'
import Caterpillar from '../assets/Auction-Img/Caterpillar_D6N.jpg'
import Komatsu from '../assets/Auction-Img/Komatsu_PC360LC.jpg'
import JohnDeere from '../assets/Auction-Img/Johan_Deere_650K.jpg'
import VideoCard from './VideoCard'

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
            <h2 className="text-[16px] md:text-[18px] font-bold text-[#1A1C1E] font-inter mb-4 px-1 lg:px-0">Short videos</h2>
            <div className="flex overflow-x-auto gap-4 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none snap-x snap-mandatory">
                {videos.map((video, idx) => (
                    <VideoCard key={idx} video={video} />
                ))}
            </div>
        </section>
    )
}

export default ShortVideos
