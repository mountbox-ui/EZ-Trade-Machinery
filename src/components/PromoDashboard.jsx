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
import YouMayAlsoLike from './YouMayAlsoLike'
import FeaturedCompanies from './FeaturedCompanies'
import EquipmentForYou from './EquipmentForYou'

const PromoDashboard = () => {
    return (
        <div className="flex-1 space-y-10">
            {/* Promo Banner & Quick Links Row */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Black Friday Banner */}
                <div className="xl:col-span-2 bg-[#2C2C2C] rounded-[8px] p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden min-h-[240px] w-[582px]">
                    <div className="z-10 w-full md:w-auto">
                        <div className="flex items-center gap-2 text-[#FDBC31] font-400 text-[14px] mb-2 font-['Inter']">
                            <span><img src={Limited} alt="" /></span> LIMITED TIME
                        </div>
                        <h2 className="text-white text-[32px] font-bold mb-2 font-['Plus_Jakarta_Sans']">Black Friday Deals</h2>
                        <p className="text-[#9BA0A3] mb-6 text-[14px]">Save up to 40% on heavy equipment</p>

                        <div className="flex gap-3">
                            {[
                                { val: '23', label: 'Hours' },
                                { val: '45', label: 'Mins' },
                                { val: '12', label: 'Secs' }
                            ].map((timer) => (
                                <div key={timer.label} className="bg-[#FDBC31] text-black w-[54px] h-[54px] rounded-[4px] flex flex-col items-center justify-center">
                                    <span className="text-[18px] font-bold leading-none">{timer.val}</span>
                                    <span className="text-[10px] font-bold uppercase mt-0.5">{timer.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="z-10 mt-6 md:mt-0">
                        <button className="bg-[#FDBC31] hover:bg-[#e5a92c] text-black font-bold py-3 px-8 rounded-[40px] transition-all text-[16px]">
                            Shop Deals Now
                        </button>
                    </div>

                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-[#35383B] to-transparent opacity-30 skew-x-12 translate-x-10 pointer-events-none"></div>
                </div>

                {/* Info Cards Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { title: 'Financing', icon: <img src={Finance} alt="" />, color: '#E8F1FF', iconColor: '#3B82F6' },
                        { title: 'Shipping', icon: <img src={Shipping} alt="" />, color: '#E9FAF0', iconColor: '#10B981' },
                        { title: 'Deals', icon: <img src={Deals} alt="" />, color: '#FFF1F1', iconColor: '#EF4444' },
                        { title: 'Auctions', icon: <img src={Auction} alt="" />, color: '#F3E8FF', iconColor: '#A855F7' }
                    ].map((card) => (
                        <div
                            key={card.title}
                            className="bg-white rounded-[20px] p-5 flex flex-col items-start gap-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group"
                        >
                            <div
                                className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center text-[20px] transition-transform group-hover:scale-110"
                                style={{ backgroundColor: card.color, color: card.iconColor }}
                            >
                                {card.icon}
                            </div>
                            <span className="text-[#1A1C1E] font-bold text-[15px] font-['Plus_Jakarta_Sans']">{card.title}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hot Deals Section */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <img src={Deals} alt="" className='text-[#00A63E]' />
                    <h2 className="text-[20px] font-bold text-[#1A1C1E] font-['Plus_Jakarta_Sans']">Hot Deals - Limited Time</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {[
                        { title: 'John Deere 850K Dozer...', year: '2014', location: 'Nevada, USA', price: '65,000', discount: '-29%', img: JohnDeere },
                        { title: '2020 Komatsu D65 Dozer', year: '2018', location: 'Arizona, USA', price: '35,000', discount: '-24%', img: Komatsu },
                        { title: '2021 CAT 950M Wheel Loader', year: '2022', location: 'Montana, USA', price: '65,000', discount: '-39%', img: Caterpillar },
                        { title: 'CAT 320D Excavator...', year: '2001', location: 'Oregon, USA', price: '65,000', discount: '-13%', img: Volvo }
                    ].map((deal, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative aspect-[4/3] rounded-[12px] overflow-hidden bg-gray-100 mb-3">
                                <img src={deal.img} alt={deal.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div className="absolute top-2 left-2 bg-[#EF4444] text-white text-[10px] font-bold px-2 py-1 rounded-[4px]">{deal.discount}</div>
                            </div>
                            <h3 className="text-[14px] font-bold text-[#1A1C1E] mb-1 line-clamp-1">{deal.title}</h3>
                            <div className="flex items-center gap-1 text-[12px] text-[#6E7375] mb-1">
                                <span>{deal.year}</span>
                                <span className="w-1 h-1 rounded-full bg-gray-300" />
                                <span>{deal.location}</span>
                            </div>
                            <div className="text-[14px] font-bold text-[#1A1C1E]">${deal.price}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pick up where you left off */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <img src={Eye} alt="" />
                    <h2 className="text-[20px] font-bold text-[#1A1C1E] font-['Plus_Jakarta_Sans']">Pick up where you left off</h2>
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
                        <div key={idx} className="group cursor-pointer">
                            <div className="aspect-[1/1] rounded-[10px] overflow-hidden bg-gray-100 mb-2">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <h3 className="text-[12px] font-bold text-[#1A1C1E] line-clamp-1 mb-0.5">{item.title}</h3>
                            <div className="text-[11px] text-[#6E7375]">${item.price}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Service Banners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#304D3F] rounded-[20px] p-6 text-white flex items-center justify-between relative overflow-hidden">
                    <div className="z-10">
                        <div className="flex items-center gap-2 text-[12px] font-medium opacity-80 mb-2">
                            <FaTruck /> Shipping Services
                        </div>
                        <h3 className="text-[18px] font-bold mb-1">Get Shipping Quote</h3>
                        <p className="text-[12px] opacity-70 mb-5">Domestic & International shipping available for all equipment</p>
                        <div className="flex gap-2">
                            <button className="bg-white text-[#304D3F] px-4 py-2 rounded-lg text-[12px] font-bold">Domestic</button>
                            <button className="bg-white/20 text-white px-4 py-2 rounded-lg text-[12px] font-bold border border-white/20">International</button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#3B3D5E] rounded-[20px] p-6 text-white flex items-center justify-between relative overflow-hidden">
                    <div className="z-10">
                        <div className="flex items-center gap-2 text-[12px] font-medium opacity-80 mb-2">
                            <FaFileInvoiceDollar /> Financing Available
                        </div>
                        <h3 className="text-[18px] font-bold mb-1">Get Equipment Financing</h3>
                        <p className="text-[12px] opacity-70 mb-5">Flexible payment plans starting at 0% APR for qualified buyers</p>
                        <button className="bg-white text-[#3B3D5E] px-4 py-2 rounded-lg text-[12px] font-bold">Learn More</button>
                    </div>
                    {/* Decorative $ sign */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[100px] font-bold opacity-10 leading-none select-none">$</div>
                </div>
            </div>
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
