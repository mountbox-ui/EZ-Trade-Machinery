import React from 'react'
import ContactItem from './ContactItem'

const ContactList = ({
  contacts = [],
  activeContactId,
  onContactClick,
  className = '',
  ...props
}) => {
  if (contacts.length === 0) {
    return (
      <div className={`text-center py-8 text-gray-500 ${className}`} {...props}>
        <p className="text-sm">No conversations yet</p>
      </div>
    )
  }

  return (
    <div className={`space-y-0 ${className}`} {...props}>
      {contacts.map((contact) => {
        // Determine variant based on contact properties
        let variant = contact.variant || 'default'
        if (variant === 'default' && contact.isVIP) {
          variant = 'vip'
        } else if (variant === 'default' && contact.type) {
          variant = contact.type // 'buying' or 'selling'
        }

        return (
          <ContactItem
            key={contact.id}
            {...contact}
            variant={variant}
            isActive={activeContactId === contact.id}
            onClick={() => onContactClick(contact.id)}
          />
        )
      })}
    </div>
  )
}

export default ContactList

