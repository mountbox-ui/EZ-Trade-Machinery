import React from 'react'
import logo1 from '../assets/featuredcompanies/logo1.png'
import logo2 from '../assets/featuredcompanies/logo2.png'
import logo3 from '../assets/featuredcompanies/logo3.png'
import logo4 from '../assets/featuredcompanies/logo4.png'
import featuredIcon from '../assets/featuredcompanies/featured.svg'

const FeaturedCompanies = () => {
  const companies = [
    {
      id: 1,
      name: 'Caterpillar Equipment',
      description: 'Premium heavy machinery',
      logo: logo1
    },
    {
      id: 2,
      name: 'Komatsu Machinery',
      description: 'Robust construction solutions',
      logo: logo2
    },
    {
      id: 3,
      name: 'John Deere Tractors',
      description: 'Innovative agricultural tools',
      logo: logo3
    },
    {
      id: 4,
      name: 'Volvo Trucks',
      description: 'Reliable transport vehicles',
      logo: logo4
    }
  ]

  return (
    <section className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <img src={featuredIcon} alt="" className="w-5 h-5" />
        <h2 className="font-inter text-2xl font-bold text-[#000000]">Featured Companies</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-white border border-[#0000001A] rounded-[4px] p-6 flex items-center justify-between hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="md:w-[83px] md:h-[83px] w-[60px] h-[60px] bg-white rounded-lg flex items-center justify-center p-2">
                <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
              </div>

              <div className="flex-1">
                <h3 className="font-inter font-normal text-base text-[#131214] mb-1">
                  {company.name}
                </h3>
                <p className="font-inter font-normal text-sm text-[#6E7375]">
                  {company.description}
                </p>
              </div>
            </div>

            <button className="ml-4 px-6 py-2 bg-[#E8EBEB] hover:bg-gray-200 text-[#53575A] font-medium rounded-[48px] transition-colors font-inter text-sm">
              Visit
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedCompanies

