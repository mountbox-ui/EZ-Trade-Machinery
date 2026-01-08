import React from 'react'
import Input from '../Input'
import searchIcon from '../../assets/account-icons/Search_Icon.svg'

const SearchInput = ({
  placeholder = 'Search conversations...',
  value,
  onChange,
  className = '',
  ...props
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <img 
        src={searchIcon} 
        alt="Search" 
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-10 pointer-events-none" 
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        variant="search"
        className="pl-10 w-full max-w-none !border-[#DADDDE]"
        style={{ 
          width: '100%'
        }}
        {...props}
      />
    </div>
  )
}

export default SearchInput

