import React from 'react'
import HydraulicExcavators from '../assets/Hero-filter-icons/Hydraulic_Excavators.png'
import CompactTrackLoaders from '../assets/Hero-filter-icons/Compact_Track_Loaders.png'
import Graders from '../assets/Hero-filter-icons/Graders.png'
import Bulldozers from '../assets/Hero-filter-icons/Bulldozers.png'
import BackhoeLoaders from '../assets/Hero-filter-icons/Backhoe+_Loaders.png'
import SoilCompactors from '../assets/Hero-filter-icons/Soil_Compactors.png'
import TrackLoaders from '../assets/Hero-filter-icons/Track_Loaders.png'
import ArticulatedTrucks from '../assets/Hero-filter-icons/Articulated_Trucks.png'
import SmallExcavators from '../assets/Hero-filter-icons/Small_Excavators.png'

// TODO: replace placeholder icons with real SVGs from assets when available
const filters = [
  { name: 'Hydraulic Excavators', icon: HydraulicExcavators },
  { name: 'Compact Track Loaders', icon: CompactTrackLoaders },
  { name: 'Graders', icon: Graders },
  { name: 'Bulldozers', icon: Bulldozers },
  { name: 'Backhoe Loaders', icon: BackhoeLoaders },
  { name: 'Soil Compactors', icon: SoilCompactors },
  { name: 'Soil Compactors', icon: SoilCompactors },
  { name: 'Track Loaders', icon: TrackLoaders },
  { name: 'Track Loaders', icon: TrackLoaders },
  { name: 'Articulated Trucks', icon: ArticulatedTrucks },
  { name: 'Articulated Trucks', icon: ArticulatedTrucks },
  { name: 'Small Excavators', icon: SmallExcavators },
  { name: 'Small Excavators', icon: SmallExcavators },
  { name: 'Small Excavators', icon: SmallExcavators },
]

const HeroFilter = () => {
  return (
    <section className="w-full">
      <div className="flex items-start justify-between gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:display-none">
        {filters.map((filter) => (
          <button
            key={filter.name}
            type="button"
            className="flex flex-col items-center justify-center w-[75px] gap-[10px] shrink-0"
          >
            <div className="h-[48px] w-[48px] rounded-[10px] bg-[#FFF3D9] flex items-center justify-center shadow-sm">
              <img src={filter.icon} alt={filter.name} className="h-8 w-8 object-contain" />
            </div>
            <span className="self-stretch text-center leading-[16px] text-[#6E7375] font-inter text-[14px] font-[500] tracking-[0]">
              {filter.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default HeroFilter


