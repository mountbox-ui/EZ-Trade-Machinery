import React from 'react'
import clockIcon from '../../assets/account-icons/clock.svg'
import shareIcon from '../../assets/account-icons/share.svg'

/**
 * Status banner component for displaying post expiration and posting date
 */
const WantToBuyStatusBanner = ({
  expiresIn,
  postedOn,
  className = ''
}) => {
  return (
    <div className={`rounded-[8px] bg-[#DCFCE7] border border-[#86EFAC] p-4 flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-3">
        <img src={clockIcon} alt="Clock" className="w-5 h-5 flex-shrink-0" />
        <div className="flex flex-col gap-1">
          <div>
            <span className="text-[#0D542B] font-inter text-sm font-normal">
              Post expires in <span className="font-bold">{expiresIn}</span>
            </span>
          </div>
          <div className="text-[#2F3133] font-inter text-sm font-normal">
            Posted on {postedOn}
          </div>
        </div>
      </div>
      <div className="text-[#6E7375] hover:text-[#131214] transition-colors">
        <img src={shareIcon} alt="Share" className='cursor-pointer' />
      </div>
    </div>
  )
}

export default WantToBuyStatusBanner

