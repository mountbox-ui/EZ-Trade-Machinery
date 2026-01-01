import React from 'react'
import clockRed from '../assets/Auction-Img/Clock_Red.svg'
import Volvo from '../assets/Auction-Img/Volvo_EEC380.jpg'
import Volvo2 from '../assets/Auction-Img/Volvo_EEC383.jpg'
import Caterpillar from '../assets/Auction-Img/Caterpillar_D6N.jpg'
import Komatsu from '../assets/Auction-Img/Komatsu_PC360LC.jpg'
import JohnDeere from '../assets/Auction-Img/Johan_Deere_650K.jpg'
import Button from './Button'
import AuctionCard from './AuctionCard'

const auctions = [
    {
        id: 1,
        title: '2017 Volvo EC380 Excavator...',
        year: '2001',
        location: 'Texas, USA',
        condition: 'Good condition',
        price: '65,000',
        bids: '38',
        timeLeft: '1h 20m',
        image: Volvo
    },
    {
        id: 2,
        title: '2017 Volvo EC380 Excavator...',
        year: '2001',
        location: 'Texas, USA',
        condition: '',
        price: '65,000',
        bids: '38',
        timeLeft: '1h 20m',
        image: Volvo2
    },
    {
        id: 3,
        title: '2019 Caterpillar D6N Dozer...',
        year: '2019',
        location: 'California, USA',
        condition: '',
        price: '85,000',
        bids: '12',
        timeLeft: '2h 15m',
        image: Caterpillar
    },
    {
        id: 4,
        title: '2020 Komatsu PC360LC-11 Excav...',
        year: '2020',
        location: 'New York, USA',
        condition: '',
        price: '120,000',
        bids: '8',
        timeLeft: '3h 10m',
        image: Komatsu
    },
    {
        id: 5,
        title: '2015 John Deere 650K Crawler Do...',
        year: '2015',
        location: 'Florida, USA',
        condition: '',
        price: '70,000',
        bids: '15',
        timeLeft: '4h 5m',
        image: JohnDeere
    }
]

const Auction = () => {
    return (
        <section className="w-full mt-10">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                    {/* Stopwatch Icon */}
                    <img src={clockRed} alt="Clock" className="w-5 h-5 sm:w-6 sm:h-6" />
                    <h2 className="text-[16px] md:text-[18px] font-bold text-gray-900 font-inter">Auctions Closing Soon</h2>
                </div>
                <Button
                    variant="link"
                    onClick={() => { }}>
                    See all
                    <svg width="14" height="14" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </Button>
            </div>

            <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 lg:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none">
                {auctions.map((item) => (
                    <AuctionCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}

export default Auction
