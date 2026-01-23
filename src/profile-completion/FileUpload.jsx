import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { IoCameraOutline } from "react-icons/io5";

const FileUpload = ({
  label,
  description,
  accept = 'image/jpeg,image/jpg,image/png',
  maxSize = 5, // in MB
  onFileUpload,
  className = '',
  required = false
}) => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    // Validate file size
    if (selectedFile.size > maxSize * 1024 * 1024) {
      setError(`File size must be less than ${maxSize}MB`)
      return
    }

    // Validate file type
    const validTypes = accept.split(',').map(type => type.trim())
    const isValidType = validTypes.some(type => {
      if (type.includes('*')) return true
      return selectedFile.type === type
    })

    if (!isValidType) {
      const fileExtensions = accept.includes('jpeg') ? 'JPG or PNG' : accept.split('/').pop().toUpperCase()
      setError(`File must be ${fileExtensions}`)
      return
    }

    setFile(selectedFile)
    setError('')
    if (onFileUpload) {
      onFileUpload(selectedFile)
    }
  }

  return (
    <div className={className} >
      {label && (
        <div className="mb-3">
          <label className="form-label block">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
          {description && (
            <p className="text-sm text-[#6E7375] mt-1">{description}</p>
          )}
        </div>
      )}
      
      <label
        htmlFor={`file-upload-${label?.replace(/\s+/g, '-').toLowerCase() || 'file'}`}
        className="flex flex-col items-left justify-center w-full p-3 sm:p-4 rounded-[8px] cursor-pointer bg-[#F4F6F7] hover:bg-gray-50 transition-colors"
      >
        <div className="flex flex-row gap-2 sm:gap-3 items-center justify-start">
          <div className='bg-[#E8EBEB] rounded-full p-3 sm:p-4 flex-shrink-0'><IoCameraOutline className="w-6 h-6 sm:w-8 sm:h-8 text-[#99A1AF]" /></div>
          <div className="flex-1 min-w-0">
          <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-gray-500">
            <span className="font-semibold">{label || 'Document'}</span>
          </p>
          <p className="text-[10px] sm:text-xs text-gray-500">
            Max {maxSize}MB, {accept.includes('jpeg') ? 'JPG or PNG' : 'PDF'}
          </p>
          </div>
          
        </div>
        <input
          id={`file-upload-${label?.replace(/\s+/g, '-').toLowerCase() || 'file'}`}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      
      {file && (
        <p className="mt-2 text-sm text-green-600">
          Selected: {file.name}
        </p>
      )}
      
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}

export default FileUpload
