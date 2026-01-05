import React from 'react'
import Button from '../Button'
import verificationIcon from '../../assets/account-icons/verification.svg'

const VerificationBanner = ({
  status = 'incomplete',
  message = 'Verify your account to publish listings and access all features.',
  buttonText = 'Start Now',
  onClick,
  className = ''
}) => {
  if (status === 'complete') {
    return null
  }

  return (
    <div className={`rounded-md bg-gradient-to-b from-[rgba(246,184,0,0.2)] to-[rgba(217,165,0,0.2)] p-4 flex flex-row items-center justify-between gap-4 ${className}`}>
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <img 
          src={verificationIcon} 
          alt="Verification" 
          className="w-5 h-5 flex-shrink-0" 
        />
        <div className="min-w-0">
          <h3 className="font-bold text-[#2C2C2C] mb-1 whitespace-nowrap text-sm sm:text-base">Complete Your Verification</h3>
          <p className="text-xs sm:text-sm text-[#131214]">{message}</p>
        </div>
      </div>
      <Button
        variant="verification"
        onClick={onClick}
        className="bg-[#2C2C2C] text-white hover:bg-[#2C2C2C] whitespace-nowrap flex-shrink-0 mt-4 sm:mt-0"
      >
        {buttonText}
      </Button>
    </div>
  )
}

export default VerificationBanner

