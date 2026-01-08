import React, { useState } from 'react'
import Sidebar from './Sidebar'
import ChatWindow from './ChatWindow'

const ChatLayout = ({
  user,
  messages = {},
  contacts = [],
  onSendMessage,
  className = '',
  ...props
}) => {
  const [activeContactId, setActiveContactId] = useState(null)

  const activeContact = contacts.find((contact) => contact.id === activeContactId)
  const activeMessages = activeContactId ? messages[activeContactId] || [] : []

  const handleContactClick = (contactId) => {
    setActiveContactId(contactId)
  }

  const handleBackToContacts = () => {
    setActiveContactId(null)
  }

  const handleSendMessage = (messageText) => {
    if (activeContactId && onSendMessage) {
      onSendMessage(activeContactId, messageText)
    }
  }

  const handleQuickAction = (action) => {
    if (activeContactId && onSendMessage) {
      onSendMessage(activeContactId, action)
    }
  }

  return (
    <div
      className={`flex flex-col lg:flex-row h-full bg-gray-50 ${className}`}
      {...props}
    >
      {/* Sidebar - Full width on mobile/tablet, hidden when chat is active. Always visible on desktop */}
      <div className={`${activeContactId ? 'hidden lg:flex' : 'flex'} w-full lg:w-auto`}>
        <Sidebar
          contacts={contacts}
          activeContactId={activeContactId}
          onContactClick={handleContactClick}
          variant="expanded"
        />
      </div>

      {/* Chat Window - Full width on mobile/tablet, flex-1 on desktop */}
      <div className={`flex-1 flex flex-col min-w-0 w-full lg:w-auto ${activeContactId ? 'flex' : 'hidden lg:flex'}`}>
        <ChatWindow
          messages={activeMessages}
          currentUserId={user?.id}
          onSend={handleSendMessage}
          onAction={handleQuickAction}
          variant={activeContactId ? 'active' : 'empty'}
          chatInfo={
            activeContact
              ? {
                  title: activeContact.equipmentName || activeContact.name,
                  price: activeContact.price,
                  image: activeContact.equipmentImage || activeContact.avatar,
                  icons: [
                    {
                      label: 'Call',
                      onClick: () => console.log('Call clicked'),
                      path: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    }
                  ]
                }
              : null
          }
          showQuickActions={!!activeContactId}
          onBack={handleBackToContacts}
        />
      </div>
    </div>
  )
}

export default ChatLayout

