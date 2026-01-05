import React, { useState } from 'react'
import uploadIcon from '../../assets/account-icons/upload.svg'

const PhotoUpload = ({
  currentPhoto = null,
  onPhotoUpload,
  className = ''
}) => {
  const [photoPreview, setPhotoPreview] = useState(currentPhoto)

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB')
        return
      }
      
      if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
        alert('File must be JPG or PNG')
        return
      }

      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result)
        if (onPhotoUpload) {
          onPhotoUpload(file)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  // Update preview when currentPhoto prop changes
  React.useEffect(() => {
    setPhotoPreview(currentPhoto)
  }, [currentPhoto])

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Circular placeholder with upload icon */}
      <label
        htmlFor="photo-upload"
        className="flex-shrink-0 cursor-pointer"
      >
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
          {photoPreview ? (
            <img
              src={photoPreview}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <img
              src={uploadIcon}
              alt="Upload"
              className="w-8 h-8"
            />
          )}
        </div>
        <input
          id="photo-upload"
          type="file"
          accept="image/jpeg,image/jpg,image/png"
          onChange={handlePhotoUpload}
          className="hidden"
        />
      </label>

      {/* Text content on the right */}
      <div className="flex flex-col">
        <p className="text-sm font-medium text-gray-700 mb-1">Upload photo</p>
        <p className="text-xs text-gray-500">Max 5MB, JPG or PNG</p>
      </div>
    </div>
  )
}

export default PhotoUpload

