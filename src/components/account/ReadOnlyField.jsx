import React from 'react'
import Label from '../Label'
import Input from '../Input'

const ReadOnlyField = ({
  label,
  value,
  className = '',
  icon
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && <Label>{label}</Label>}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
            {icon}
          </div>
        )}
        <Input
          value={value}
          readOnly
          className={icon ? 'pl-12' : ''}
        />
      </div>
    </div>
  )
}

export default ReadOnlyField

