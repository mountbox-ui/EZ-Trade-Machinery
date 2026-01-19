import React, { useRef, useState } from 'react'

const ImageUpload = ({
  variant = 'multiple',
  onImagesChange,
  maxImages = 10,
  className = '',
  disabled = false
}) => {
  const fileInputRef = useRef(null)
  const [images, setImages] = useState([])
  const [state, setState] = useState('empty') // empty, uploading, uploaded, error

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    setState('uploading')

    // Simulate upload (replace with actual upload logic)
    setTimeout(() => {
      const newImages = files.slice(0, maxImages - images.length).map(file => ({
        id: Date.now() + Math.random(),
        file,
        preview: URL.createObjectURL(file)
      }))

      const updatedImages = variant === 'single' ? [newImages[0]] : [...images, ...newImages]
      setImages(updatedImages)
      setState('uploaded')
      
      if (onImagesChange) {
        onImagesChange(updatedImages)
      }
    }, 500)
  }

  const handleRemove = (id) => {
    const updatedImages = images.filter(img => img.id !== id)
    setImages(updatedImages)
    if (onImagesChange) {
      onImagesChange(updatedImages)
    }
    if (updatedImages.length === 0) {
      setState('empty')
    }
  }

  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (disabled) return

    const files = Array.from(e.dataTransfer.files || [])
    if (files.length > 0) {
      const dataTransfer = new DataTransfer()
      files.forEach(file => dataTransfer.items.add(file))
      fileInputRef.current.files = dataTransfer.files
      handleFileSelect({ target: { files: dataTransfer.files } })
    }
  }

  const uploadBoxStyles = 'w-[112px] h-[110px] rounded-[6px] border border-dashed border-[0.635px] border-[#C1C4C6] bg-[#F4F6F7] p-4 transition-all focus:outline-none flex items-center justify-center flex-shrink-0'
  
  const uploadBoxStateStyles = {
    empty: 'hover:border-[#DADDDE] hover:bg-[#E8EBEB] cursor-pointer',
    uploading: 'border-[#FFB703] bg-[#FFF4E6] cursor-wait',
    uploaded: 'hover:border-[#DADDDE] hover:bg-[#E8EBEB] cursor-pointer',
    error: 'border-[#FF9175] bg-[#FFF3F0]'
  }

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      {/* Upload Box - Always visible */}
      <div
        onDragOver={variant === 'drag-drop' ? handleDragOver : undefined}
        onDrop={variant === 'drag-drop' ? handleDrop : undefined}
        onClick={handleClick}
        className={`${uploadBoxStyles} ${uploadBoxStateStyles[state]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {state === 'uploading' ? (
          <div className="flex flex-col items-center gap-1">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#FFB703]"></div>
            <p className="font-inter text-xs text-[#131214]">Uploading...</p>
          </div>
        ) : (
          <svg
            className="w-8 h-8 text-[#6E7375] opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </div>

      {/* Uploaded Images - Displayed to the right */}
      {images.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {images.map((img) => (
            <div key={img.id} className="relative group">
              <div className="w-[112px] h-[110px] rounded-[6px] border border-[#C1C4C6] bg-white overflow-hidden">
                <img
                  src={img.preview}
                  alt="Upload"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleRemove(img.id)
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple={variant !== 'single'}
        onChange={handleFileSelect}
        className="hidden"
        disabled={disabled}
      />
    </div>
  )
}

export default ImageUpload

