import React, { useState, useRef, useEffect } from 'react'

const Textarea = ({
  value,
  onChange,
  placeholder = '',
  variant = 'default',
  autoGrow = false,
  rows = 4,
  className = '',
  disabled = false,
  ...props
}) => {
  const textareaRef = useRef(null)
  const [height, setHeight] = useState('auto')

  const baseStyles = 'w-full p-4 rounded-[8px] transition-all placeholder:text-gray-400 focus:outline-none font-inter text-[16px] font-medium leading-[1] resize-none'

  const variants = {
    default: 'bg-[#FFF] border border-[#E6E9EB] text-[#898D8F] text-md hover:border-[#DADDDE] hover:bg-white focus:border-2 focus:border-[#6E7375] focus:shadow-[0_0_0_4px_#E9E9E9] focus:text-[#131214]',
    error: 'border-2 border-[#FF9175] bg-[#FFF3F0] text-[#898D8F] focus:ring-2 focus:ring-[#FF9175]',
    disabled: 'bg-[#DADDDE] border border-[#C1C4C6] text-[#898D8F] cursor-not-allowed'
  }

  useEffect(() => {
    if (autoGrow && textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      setHeight(`${textareaRef.current.scrollHeight}px`)
    }
  }, [value, autoGrow])

  if (disabled) {
    return (
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        disabled
        className={`${baseStyles} ${variants.disabled} ${className}`}
        style={autoGrow ? { height } : {}}
        {...props}
      />
    )
  }

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={autoGrow ? { height, minHeight: `${rows * 24}px` } : {}}
      {...props}
    />
  )
}

export default Textarea

