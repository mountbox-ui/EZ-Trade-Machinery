import React, { useState } from 'react'
import Label from '../Label'
import Input from '../Input'
import Button from '../Button'

const EditableField = ({
  label,
  value,
  onSave,
  onCancel,
  className = '',
  type = 'text',
  placeholder = '',
  required = false,
  validation
}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(value)
  const [error, setError] = useState('')

  const handleEdit = () => {
    setEditValue(value)
    setIsEditing(true)
    setError('')
  }

  const handleCancel = () => {
    setEditValue(value)
    setIsEditing(false)
    setError('')
    if (onCancel) onCancel()
  }

  const handleSave = () => {
    if (required && !editValue.trim()) {
      setError(`${label} is required`)
      return
    }

    if (validation) {
      const validationError = validation(editValue)
      if (validationError) {
        setError(validationError)
        return
      }
    }

    if (onSave) {
      onSave(editValue)
    }
    setIsEditing(false)
    setError('')
  }

  if (isEditing) {
    return (
      <div className={`space-y-2 ${className}`}>
        {label && (
          <div className="flex items-center justify-between">
            <Label>{label}</Label>
            <Button
              variant="link"
              onClick={handleCancel}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Cancel
            </Button>
          </div>
        )}
        <Input
          type={type}
          value={editValue}
          onChange={(e) => {
            setEditValue(e.target.value)
            setError('')
          }}
          placeholder={placeholder}
          variant="enabled"
          className={error ? 'border-red-500 focus:ring-red-500' : ''}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
        {label && (
          <Button
            variant="primary"
            onClick={handleSave}
            className="mt-2"
          >
            Save
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <div className="flex items-center justify-between">
          <Label>{label}</Label>
          <Button
            variant="link"
            onClick={handleEdit}
            className="text-[#FFB703] hover:text-[#FFB703]/80 text-sm font-medium"
          >
            Edit
          </Button>
        </div>
      )}
      <Input
        value={value}
        readOnly
      />
    </div>
  )
}

export default EditableField

