import React, { useState, useEffect } from 'react'
import Input from '../Input'

const RangeSlider = ({
  min = 0,
  max = 10000,
  value = [min, max],
  onChange,
  step = 1,
  formatValue,
  className = '',
  variant = 'input', // 'input' for price range, 'text' for year
  ...props
}) => {
  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleMinChange = (e) => {
    const newMin = Math.min(Number(e.target.value), localValue[1] - step)
    const newValue = [newMin, localValue[1]]
    setLocalValue(newValue)
    onChange(newValue)
  }

  const handleMaxChange = (e) => {
    const newMax = Math.max(Number(e.target.value), localValue[0] + step)
    const newValue = [localValue[0], newMax]
    setLocalValue(newValue)
    onChange(newValue)
  }

  const handleMinInputChange = (e) => {
    const newMin = Math.min(Math.max(Number(e.target.value), min), localValue[1] - step)
    const newValue = [newMin, localValue[1]]
    setLocalValue(newValue)
    onChange(newValue)
  }

  const handleMaxInputChange = (e) => {
    const newMax = Math.max(Math.min(Number(e.target.value), max), localValue[0] + step)
    const newValue = [localValue[0], newMax]
    setLocalValue(newValue)
    onChange(newValue)
  }

  const minPercent = ((localValue[0] - min) / (max - min)) * 100
  const maxPercent = ((localValue[1] - min) / (max - min)) * 100

  const formatDisplayValue = (val) => {
    if (formatValue) return formatValue(val)
    return val.toLocaleString()
  }

  return (
    <div className={className} {...props}>
      <div className="relative h-6 flex items-center mb-4">
        {/* Track background */}
        <div className="absolute w-full h-1 bg-gray-200 rounded-lg"></div>
        
        {/* Active range - darker gray segment */}
        <div
          className="absolute h-2 bg-gray-400 rounded-lg"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`
          }}
        ></div>

        {/* Min slider */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue[0]}
          onChange={handleMinChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#6E7375] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-400 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#6E7375] [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-gray-400 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:cursor-pointer"
        />
        
        {/* Max slider */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue[1]}
          onChange={handleMaxChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#6E7375] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-400 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-gray-400 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:cursor-pointer"
        />
      </div>

      {variant === 'input' && (
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <label className="block text-[#6A7282] font-inter text-[12px] font-normal leading-[16px] mb-1">
              Min
            </label>
            <Input
              type="number"
              value={localValue[0]}
              onChange={handleMinInputChange}
              variant="enabled"
              className="!h-10 text-[14px] !rounded-[10px] !border-[#D1D5DC] !bg-white !p-4"
            />
          </div>
          <span className="text-[#131214] font-inter text-[14px] mb-[10px]">-</span>
          <div className="flex-1">
            <label className="block text-[#6A7282] font-inter text-[12px] font-normal leading-[16px] mb-1">
              Max
            </label>
            <Input
              type="number"
              value={localValue[1]}
              onChange={handleMaxInputChange}
              variant="enabled"
              className="!h-10 text-[14px] !rounded-[10px] !border-[#D1D5DC] !bg-white !p-4"
            />
          </div>
        </div>
      )}

      {variant === 'text' && (
        <div className="flex items-center justify-between text-[#364153] font-inter text-[14px]">
          <span>{formatDisplayValue(min)}</span>
          <span className="text-[#99A1AF]">to</span>
          <span>{formatDisplayValue(max)}</span>
        </div>
      )}
    </div>
  )
}

export default RangeSlider
