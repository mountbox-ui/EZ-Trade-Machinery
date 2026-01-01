import React from 'react'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'flex h-10 px-6 py-[8px] px-[24px] justify-center items-center gap-2 rounded bg-[#FFB703] text-[#2C2C2C] font-normal transition-colors hover:bg-[#FFB703]/90',
    secondary: 'w-full bg-[#FFB703] hover:bg-[#FFB703]/90 active:scale-[0.98] text-gray-900 font-bold py-[8px] px-[16px] rounded-full text-sm transition-all mt-auto shadow-sm',
    tertiary: 'bg-white text-[#3B3D5E] px-4 py-2 rounded-lg text-[12px] font-500 transition-all hover:bg-gray-100 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]',
    tertiary2: 'bg-white/20 text-white px-4 py-2 rounded-lg text-[12px] font-500 border border-white/20 transition-all hover:bg-white/30 hover:-translate-y-0.5 active:scale-[0.98]',
    outline: 'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-yellow-500',
    visit: 'ml-4 px-6 py-2 bg-[#E8EBEB] hover:bg-[#dadada] text-[#53575A] font-medium rounded-[48px] transition-all hover:shadow-sm hover:-translate-y-0.5 active:scale-[0.95] font-inter text-sm',
    link: 'text-[13px] sm:text-sm font-medium text-gray-600 flex items-center gap-1 hover:text-gray-900 font-inter'
  }

  const sizes = {
    sm: 'px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'px-6 py-3'
  }

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

