import React from 'react'
import JohnDeere from '../assets/Auction-Img/Johan_Deere_650K.jpg'
import Komatsu from '../assets/Auction-Img/Komatsu_PC360LC.jpg'
import Caterpillar from '../assets/Auction-Img/Caterpillar_D6N.jpg'
import Volvo from '../assets/Auction-Img/Volvo_EEC380.jpg'
import EllipseIcon from '../assets/social_media_icons/Ellipse.svg'
import BlinkIcon from '../assets/social_media_icons/blink.png'
import NewListingCard from './NewListingCard'

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
                    <h2 className="font-inter text-[16px] md:text-[18px] font-bold text-[#000000]">New listings</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
                {listings.map((listing) => (
                    <NewListingCard key={listing.id} listing={listing} />
                ))}
            </div>
        </section>
    )
}

export default NewListings

