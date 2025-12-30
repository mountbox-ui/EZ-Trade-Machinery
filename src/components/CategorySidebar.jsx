import React, { useState } from 'react'

const CategorySidebar = () => {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(2000)

    const manufacturers = [
        'Fruits', 'Cars & Motocycles', 'Books & Office', 'Babies and Moms',
        'Sport & Outdoor', 'Phones & Accessories', 'Jewelry & Watches',
        'Computers & Technologies', 'Health & Beauty', 'Garden & Kitchen'
    ]

    const years = [
        'Unilever', 'Gopro', 'Yamaha', 'LG Electronics', 'Samsung',
        'Asus', 'Gucci', 'Flat Funiture', 'Sony', 'Mega System'
    ]

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice - 100)
        setMinPrice(value)
    }

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice + 100)
        setMaxPrice(value)
    }

    return (
        <aside className="hidden lg:flex flex-col gap-6 w-[280px] shrink-0">
            {/* Manufacturer */}
            <div className="bg-[#F5F5F5] p-6 shadow-sm border border-gray-100">
                <h3 className="text-[18px] font-bold text-[#1A1C1E] mb-4 font-inter">Manufacturer</h3>
                <ul className="space-y-3">
                    {manufacturers.map((item) => (
                        <li key={item} className="text-[#6E7375] text-[14px] hover:text-[#FDBC31] cursor-pointer transition-colors font-medium">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Year Range */}
            <div className="bg-[#F5F5F5] p-6 shadow-sm border border-gray-100">
                <h3 className="text-[18px] font-bold text-[#1A1C1E] mb-4 font-inter">Year Range</h3>
                <ul className="space-y-3">
                    {years.map((item) => (
                        <li key={item} className="text-[#6E7375] text-[14px] hover:text-[#FDBC31] cursor-pointer transition-colors font-medium">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* By Price */}
            <div className="bg-[#F5F5F5] p-6 shadow-sm border border-gray-100">
                <h3 className="text-[18px] font-bold text-[#1A1C1E] mb-4 font-inter">By Price</h3>
                <div className="mt-8 relative h-6 flex items-center">
                    <div className="absolute w-full h-1 bg-gray-200 rounded-lg"></div>
                    <div
                        className="absolute h-1 bg-[#91CAFF] rounded-lg"
                        style={{
                            left: `${(minPrice / 2000) * 100}%`,
                            right: `${100 - (maxPrice / 2000) * 100}%`
                        }}
                    ></div>

                    <input
                        type="range"
                        min="0"
                        max="2000"
                        value={minPrice}
                        onChange={handleMinChange}
                        className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#91CAFF] [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#91CAFF] [&::-moz-range-thumb]:appearance-none"
                    />
                    <input
                        type="range"
                        min="0"
                        max="2000"
                        value={maxPrice}
                        onChange={handleMaxChange}
                        className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#91CAFF] [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#91CAFF] [&::-moz-range-thumb]:appearance-none"
                    />
                </div>
                <div className="mt-6">
                    <span className="text-[16px] text-[#6E7375] font-normal font-inter">
                        Price: ${minPrice} - ${maxPrice}
                    </span>
                </div>
            </div>
        </aside>
    )
}

export default CategorySidebar
