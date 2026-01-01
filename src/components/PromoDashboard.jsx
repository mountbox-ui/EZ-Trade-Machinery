import React from 'react'
import { FaTruck, FaFileInvoiceDollar, FaTags, FaGavel, FaFire, FaHistory } from 'react-icons/fa'
import Volvo from '../assets/Auction-Img/Volvo_EEC380.jpg'
import Caterpillar from '../assets/Auction-Img/Caterpillar_D6N.jpg'
import Komatsu from '../assets/Auction-Img/Komatsu_PC360LC.jpg'
import JohnDeere from '../assets/Auction-Img/Johan_Deere_650K.jpg'
import Limited from '../assets/Promo-Icons/Limited.svg'
import Finance from '../assets/Promo-Icons/Finance.svg'
import Shipping from '../assets/Promo-Icons/Shipping.svg'
import Deals from '../assets/Promo-Icons/Deals.svg'
import Auction from '../assets/Promo-Icons/Auction.svg'
import Eye from '../assets/Promo-Icons/Eye.svg'
import FinanceB from '../assets/Promo-Icons/FinanceB.svg'
import ShippingB from '../assets/Promo-Icons/ShippingB.svg'
import ShortVideos from './ShortVideos'
import NewListings from './NewListings'
import EquipmentForYou from './EquipmentForYou'
import FeaturedCompanies from './FeaturedCompanies'
import YouMayAlsoLike from './YouMayAlsoLike'
import DealsGreen from '../assets/Promo-Icons/DealsGreen.svg'
import FinanceWhite from '../assets/Promo-Icons/FinanceWhite.svg'
import ShippingWhite from '../assets/Promo-Icons/ShippingWhite.svg'
import Button from './Button'
import DealCard from './DealCard'
import SimpleCard from './SimpleCard'

const PromoDashboard = () => {
    return (
        <div className="flex-1 space-y-10 lg:space-y-10 overflow-hidden">
            {/* Promo Banner & Quick Links Row */}
            <div className="flex flex-col xl:flex-row gap-6 mt-[20px]">
                {/* Black Friday Banner */}
                <div className="order-2 xl:order-1 flex-1 bg-[#2C2C2C] rounded-[24px] xl:rounded-[8px] p-6 sm:p-[24px] flex flex-col xl:flex-row items-center justify-between relative overflow-hidden min-h-[240px] xl:min-h-[240px]">
                    {/* Div 1: Left Content */}
                    <div className="z-10 w-full xl:w-auto flex flex-col text-left">
                        <div className="flex items-center gap-2 text-[#FDBC31] font-bold text-[14px] mb-4 font-inter">
                            <span><img src={Limited} alt="" className="w-5 h-5" /></span> LIMITED TIME
                        </div>
                        <h2 className="text-white text-[28px] sm:text-[32px] font-bold mb-2 font-inter">Black Friday Deals</h2>
                        <p className="text-[#9BA0A3] mb-8 text-[14px]">Save up to 40% on heavy equipment</p>

                        <div className="flex gap-3 mb-8 xl:mb-0">
                            {[
                                { val: '23', label: 'Hours' },
                                { val: '45', label: 'Mins' },
                                { val: '12', label: 'Secs' }
                            ].map((timer) => (
                                <div key={timer.label} className="bg-[#FDBC31] text-[#1A1C1E] w-[64px] h-[72px] sm:w-[54px] sm:h-[64px] rounded-[12px] sm:rounded-[4px] flex flex-col items-center justify-center shadow-lg">
                                    <span className="text-[20px] font-bold leading-none">{timer.val}</span>
                                    <span className="text-[10px] font-bold uppercase mt-1">{timer.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Div 2: Right Content / Mobile Button Position */}
                    <div className="z-10 w-full xl:w-auto mt-auto xl:mt-0">
                        <Button
                            variant="secondary"
                            className="w-full"
                            onClick={() => navigate(`/auction/${item.id}`)}
                        >
                            <span className="font-bold">Shop Deals Now</span>
                        </Button>
                    </div>
                </div>

                {/* Info Cards Grid */}
                <div className="order-1 xl:order-2 grid grid-cols-4 xl:grid-cols-2 gap-2 sm:gap-4 xl:w-[480px]">
                    {[
                        { title: 'Financing', icon: <img src={Finance} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />, color: '#E8F1FF' },
                        { title: 'Shipping', icon: <img src={Shipping} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />, color: '#E9FAF0' },
                        { title: 'Deals', icon: <img src={Deals} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />, color: '#FFF1F1' },
                        { title: 'Auctions', icon: <img src={Auction} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />, color: '#F3E8FF' }
                    ].map((card) => (
                        <div
                            key={card.title}
                            className="bg-white rounded-[8px] p-2 sm:p-4 flex flex-col xl:flex-row items-center gap-2 sm:gap-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group xl:h-[110px]"
                        >
                            <div
                                className="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] xl:w-[80px] xl:h-[80px] rounded-[8px] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                                style={{ backgroundColor: card.color }}
                            >
                                {card.icon}
                            </div>
                            <span className="text-[#1A1C1E] font-bold text-[10px] sm:text-[14px] xl:text-[16px] font-inter text-center xl:text-left">{card.title}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hot Deals Section */}
            <div className="mt-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <img src={DealsGreen} alt="" />
                        <h2 className="text-[16px] md:text-[18px] font-bold text-[#1A1C1E] font-inter">Hot Deals</h2>
                    </div>
                    <Button
                        variant="link"
                        onClick={() => navigate(`/auction/${item.id}`)}
                    >
                        See all
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 9L7.5 6L4.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                    {[
                        { title: 'John Deere 850K Dozer...', year: '2001', location: 'Texas, USA', price: '65,000', discount: '-29%', img: JohnDeere },
                        { title: '2020 Komatsu D65 Dozer', year: '2001', location: 'Texas, USA', price: '35,000', discount: '-24%', img: Komatsu },
                        { title: '2021 CAT 950M Wheel Loader', year: '2001', location: 'Texas, USA', price: '65,000', discount: '-39%', img: Caterpillar },
                        { title: 'CAT 320D Excavator...', year: '2001', location: 'Texas, USA', price: '65,000', discount: '-13%', img: Volvo }
                    ].map((deal, idx) => (
                        <DealCard key={idx} deal={deal} />
                    ))}
                </div>
            </div>

            {/* Pick up where you left off */}
            <div className="mt-10">
                <div className="flex items-center gap-2 mb-4">
                    <img src={Eye} alt="" />
                    <h2 className="text-[16px] md:text-[18px] font-bold text-[#1A1C1E] font-inter">Pick up where you left off</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                    {[
                        { title: 'John Deere 850K Dozer', price: '125,000', img: JohnDeere },
                        { title: 'Liebherr LTM 1200 Crane', price: '10934', img: Volvo },
                        { title: 'CAT 320D Excavator', price: '1293', img: Caterpillar },
                        { title: 'CAT 336D L Hydraulic...', price: '1550', img: JohnDeere },
                        { title: 'Volvo EC950F Crawler...', price: '1800', img: Volvo },
                        { title: 'Komatsu PC360LCI-11...', price: '1400', img: Komatsu }
                    ].map((item, idx) => (
                        <SimpleCard key={idx} item={item} />
                    ))}
                </div>
            </div>

            {/* Bottom Service Banners */}
            <div className="w-full overflow-hidden">
                <div className="flex overflow-x-auto gap-[12px] md:gap-6 md:grid md:grid-cols-2 md:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none snap-x snap-mandatory">
                    <div className="min-w-[85vw] sm:min-w-[90vw] md:min-w-0 snap-center bg-[#355842] rounded-[8px] p-6 text-white flex items-start justify-between relative overflow-hidden shadow-lg">
                        <div className="z-10">
                            <div className="flex items-center gap-2 text-[12px] font-400 mb-2 text-white/80">
                                <img src={ShippingWhite} alt="" />
                                Shipping Services
                            </div>
                            <h3 className="text-[18px] font-bold mb-1">Get Shipping Quote</h3>
                            <p className="text-[12px] opacity-70 mb-5">Domestic & International shipping available for all equipment</p>
                            <div className="flex gap-2">
                                <Button
                                    variant="tertiary"
                                    onClick={() => navigate(`/auction/${item.id}`)}
                                >Domestic</Button>
                                <Button
                                    variant="tertiary2"
                                    onClick={() => navigate(`/auction/${item.id}`)}
                                >International</Button>
                            </div>
                        </div>
                        <div><img src={ShippingB} alt="" /></div>
                    </div>

                    <div className="min-w-[85vw] sm:min-w-[90vw] md:min-w-0 snap-center bg-[#3A3B5E] rounded-[8px] p-6 text-white flex items-start justify-between relative overflow-hidden shadow-lg">
                        <div className="z-10">
                            <div className="flex items-center gap-2 text-[12px] font-400 text-white/80 mb-2">
                                <img src={FinanceWhite} alt="" />
                                Financing Available
                            </div>
                            <h3 className="text-[18px] font-bold mb-1">Get Equipment Financing</h3>
                            <p className="text-[12px] opacity-70 mb-5">Flexible payment plans starting at 0% APR for qualified buyers</p>
                            <Button
                                variant="tertiary"
                                onClick={() => navigate(`/auction/${item.id}`)}
                            >Learn More</Button>
                        </div>
                        {/* Decorative $ sign */}
                        <div ><img src={FinanceB} alt="" /></div>
                    </div>
                </div>
            </div>
            {/* Short Videos */}
            <ShortVideos />
            {/* New Listings */}
            <NewListings />
            {/* Equipment for you */}
            <EquipmentForYou />
            {/* Featured Companies */}
            <FeaturedCompanies />
            {/* You May Also Like */}
            <YouMayAlsoLike />


        </div>
    )
}

export default PromoDashboard
