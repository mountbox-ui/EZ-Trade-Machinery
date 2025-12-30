import React from 'react'

const CategorySidebar = () => {
    const manufacturers = [
        'Fruits', 'Cars & Motocycles', 'Books & Office', 'Babies and Moms',
        'Sport & Outdoor', 'Phones & Accessories', 'Jewelry & Watches',
        'Computers & Technologies', 'Health & Beauty', 'Garden & Kitchen'
    ]

    const years = [
        'Unilever', 'Gopro', 'Yamaha', 'LG Electronics', 'Samsung',
        'Asus', 'Gucci', 'Flat Funiture', 'Sony', 'Mega System'
    ]

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
                <div className="mt-6">
                    <input
                        type="range"
                        className="w-full h-1.5 bg-[#FFF3D9] rounded-lg appearance-none cursor-pointer accent-[#FDBC31]"
                        min="0"
                        max="2000"
                    />
                    <div className="flex justify-between mt-4">
                        <span className="text-[14px] text-[#6E7375] font-medium">Price: $0 - $2000</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default CategorySidebar
