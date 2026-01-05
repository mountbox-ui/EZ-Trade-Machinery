import React, { useState } from 'react'
import Label from '../Label'
import Input from '../Input'
import Button from '../Button'

const PersonalInfoForm = ({
  initialData = {
    firstName: 'Alex',
    lastName: 'Paul'
  },
  onSave,
  onCancel,
  className = ''
}) => {
  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState({})

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validate()) {
      if (onSave) {
        onSave(formData)
      }
    }
  }

  const handleCancel = () => {
    setFormData(initialData)
    setErrors({})
    if (onCancel) {
      onCancel()
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex items-center gap-4 mb-4">
        <h3 className="text-lg font-bold text-[#1A1C1E]">Personal Information</h3>
        <Button
          type="button"
          variant="edit"
          onClick={handleCancel}
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          Cancel
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-4 items-end">
        <div className="space-y-2">
          <Label htmlFor="firstName" required>First Name</Label>
          <Input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange('firstName')}
            placeholder="Enter first name"
            variant="focus"
            className={errors.firstName ? 'border-red-500 focus:ring-red-500' : ''}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" required>Last Name</Label>
          <Input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange('lastName')}
            placeholder="Enter last name"
            variant="filled"
            className={errors.lastName ? 'border-red-500 focus:ring-red-500' : ''}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName}</p>
          )}
        </div>

        <div className="flex items-end h-12">
          <Button
            type="submit"
            variant="primary"
            className="h-12"
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  )
}

export default PersonalInfoForm

