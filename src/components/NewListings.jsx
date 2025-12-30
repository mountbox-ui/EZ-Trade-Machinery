import React from 'react'
import JohnDeere from '../assets/Auction-Img/Johan_Deere_650K.jpg'
import Komatsu from '../assets/Auction-Img/Komatsu_PC360LC.jpg'
import Caterpillar from '../assets/Auction-Img/Caterpillar_D6N.jpg'
import Volvo from '../assets/Auction-Img/Volvo_EEC380.jpg'
import EllipseIcon from '../assets/social_media_icons/Ellipse.svg'
import BlinkIcon from '../assets/social_media_icons/blink.png'

const NewListings = () => {
    const listings = [
        {
            id: 1,
            title: '2018 John Deere 310L Backhoe',
            year: '2001',
            condition: 'Good condition',
            location: 'Texas, USA',
            price: '85,000',
            image: JohnDeere
        },
        {
            id: 2,
            title: '2019 Caterpillar 320F Excavator',
            year: '2019',
            condition: 'Excellent condition',
            location: 'California, USA',
            price: '150,000',
            image: Caterpillar
        },
        {
            id: 3,
            title: '2020 Volvo EC950F Crawler Excavator',
            year: '2020',
            condition: 'Like new',
            location: 'Florida, USA',
            price: '250,000',
            image: Volvo
        },
        {
            id: 4,
            title: '2018 John Deere 310L Backhoe',
            year: '2001',
            condition: 'Good condition',
            location: 'Texas, USA',
            price: '85,000',
            image: JohnDeere
        },
        {
            id: 5,
            title: '2019 Caterpillar 320F Excavator',
            year: '2019',
            condition: 'Excellent condition',
            location: 'California, USA',
            price: '150,000',
            image: Caterpillar
        },
        {
            id: 6,
            title: '2017 Komatsu PC210LCI-10',
            year: '2017',
            condition: 'Very good condition',
            location: 'New York, USA',
            price: '115,000',
            image: Komatsu
        }
    ]

    return (
        <section className="w-full">
            <div className="flex items-center mb-6">
                <div className="flex items-center gap-2">
                    <img src={BlinkIcon} alt="" className="w-6 h-6" />
                    <h2 className="font-inter text-2xl font-bold text-[#000000]">New listings</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {listings.map((listing) => (
                    <div key={listing.id} className="group cursor-pointer flex items-start gap-4">
                        <div className="relative rounded-[8px] overflow-hidden flex-shrink-0">
                            <img
                                src={listing.image}
                                alt={listing.title}
                                className="w-[140px] h-[90px] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-col gap-1 flex-1">
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
                ))}
            </div>
        </section>
    )
}

export default NewListings

