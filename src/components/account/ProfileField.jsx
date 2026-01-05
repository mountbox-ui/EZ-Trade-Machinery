import React from 'react'
import EditableField from './EditableField'
import ReadOnlyField from './ReadOnlyField'

const ProfileField = ({
  label,
  value,
  editable = false,
  readOnly = false,
  onSave,
  onCancel,
  type = 'text',
  placeholder = '',
  icon,
  className = '',
  ...props
}) => {
  if (readOnly) {
    return (
      <ReadOnlyField
        label={label}
        value={value}
        icon={icon}
        className={className}
      />
    )
  }

  if (editable) {
    return (
      <EditableField
        label={label}
        value={value}
        onSave={onSave}
        onCancel={onCancel}
        type={type}
        placeholder={placeholder}
        className={className}
        {...props}
      />
    )
  }

  return (
    <ReadOnlyField
      label={label}
      value={value}
      icon={icon}
      className={className}
    />
  )
}

export default ProfileField

