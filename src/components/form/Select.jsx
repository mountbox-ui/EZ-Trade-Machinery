import React, { useState, Fragment } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

const Select = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select',
  variant = 'default',
  searchable = false,
  className = '',
  disabled = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const baseStyles = 'w-full h-12 px-4 rounded-[8px] transition-all focus:outline-none font-inter text-[16px] font-medium leading-[1]'

  const variants = {
    default: 'bg-[#F4F6F7] border border-[#E6E9EB] text-[#898D8F] hover:border-[#DADDDE] hover:bg-white focus:border-2 focus:border-[#6E7375] focus:shadow-[0_0_0_4px_#E9E9E9]',
    error: 'border-2 border-[#FF9175] bg-[#FFF3F0] text-[#898D8F] focus:ring-2 focus:ring-[#FF9175]',
    disabled: 'bg-[#DADDDE] border border-[#C1C4C6] text-[#898D8F] cursor-not-allowed'
  }

  const filteredOptions = searchable && searchTerm
    ? options.filter(option => 
        (typeof option === 'string' ? option : option.label || option.name)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : options

  const selectedOption = options.find(opt => {
    const optValue = typeof opt === 'string' ? opt : opt.value || opt.id
    return optValue === value
  })

  const displayValue = selectedOption
    ? (typeof selectedOption === 'string' ? selectedOption : selectedOption.label || selectedOption.name)
    : placeholder

  if (disabled) {
    return (
      <div className={`${baseStyles} ${variants.disabled} ${className}`}>
        {displayValue}
      </div>
    )
  }

  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <div className="relative">
          <ListboxButton
            className={`${baseStyles} ${variants[variant]} text-left flex items-center justify-between ${className}`}
            {...props}
          >
            <span className={`block truncate ${value ? 'text-[#131214]' : 'text-[#898D8F]'}`}>
              {displayValue}
            </span>
            <ChevronDownIcon
              className={`h-5 w-5 text-[#6E7375] transition-transform ${open ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </ListboxButton>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-[8px] bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-[#E6E9EB]">
              {searchable && (
                <div className="p-2 border-b border-[#E6E9EB]">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full h-10 px-3 rounded-[8px] border border-[#E6E9EB] focus:outline-none focus:border-[#6E7375] text-sm"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
              {filteredOptions.length === 0 ? (
                <div className="px-4 py-2 text-sm text-[#6E7375]">No options found</div>
              ) : (
                filteredOptions.map((option, index) => {
                  const optValue = typeof option === 'string' ? option : option.value || option.id
                  const optLabel = typeof option === 'string' ? option : option.label || option.name
                  const isSelected = value === optValue

                  return (
                    <ListboxOption
                      key={index}
                      value={optValue}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 px-4 ${
                          active ? 'bg-[#F4F6F7] text-[#131214]' : 'text-[#131214]'
                        }`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                            {optLabel}
                          </span>
                          {selected && (
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#6E7375]">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          )}
                        </>
                      )}
                    </ListboxOption>
                  )
                })
              )}
            </ListboxOptions>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}

export default Select

