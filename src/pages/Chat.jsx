import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ChatLayout from '../components/chat/ChatLayout'
import avatar1 from '../assets/account-icons/Avatar_1.png'
import avatar2 from '../assets/account-icons/Avatar_2.png'
import avatar3 from '../assets/account-icons/Avatar_3.png'
import equipmentImage from '../assets/Auction-Img/Johan_Deere_650K.jpg'

const Chat = () => {
  // Demo user
  const currentUser = {
    id: 'user-1',
    name: 'John Doe',
    avatar: avatar1
  }

  // Demo contacts
  const [contacts, setContacts] = useState([
    {
      id: 'contact-1',
      name: 'Mike Johnson',
      messagePreview: 'The excavator is still available. When would',
      time: '2:25 PM',
      avatar: avatar2,
      unreadCount: 2,
      equipmentName: '2019 Caterpillar 320 Exc...',
      price: '$85,000',
      equipmentImage: equipmentImage,
      type: 'selling',
      isVIP: false
    },
    {
      id: 'contact-2',
      name: 'Sarah Davis',
      messagePreview: "Yes, it's still available. Would you like to sched...",
      time: '5:45 PM',
      avatar: avatar3,
      unreadCount: 0,
      equipmentName: 'John Deere 410L Backhoe',
      price: '$65,000',
      equipmentImage: equipmentImage,
      type: 'selling',
      isVIP: false
    },
    {
      id: 'contact-3',
      name: 'Robert Chen',
      messagePreview: 'The current bid is $78,200. Auction ends in 1d...',
      time: '10:15 AM',
      avatar: avatar2,
      unreadCount: 1,
      equipmentName: '2020 Komatsu D65 Dozer',
      price: '$78,200',
      equipmentImage: equipmentImage,
      type: 'buying',
      isVIP: true
    }
  ])

  // Demo messages
  const [messages, setMessages] = useState({
    'contact-1': [
      {
        id: 'msg-1',
        text: 'Hi, is the excavator still available?',
        sender: 'John Doe',
        senderId: 'user-1',
        timestamp: '09:30 AM',
        status: 'read',
        avatar: avatar1
      },
      {
        id: 'msg-2',
        text: 'Yes, it is! Are you interested?',
        sender: 'Mike Johnson',
        senderId: 'contact-1',
        timestamp: '09:32 AM',
        avatar: avatar2
      }
    ],
    'contact-2': [
      {
        id: 'msg-3',
        text: 'Hi, Lucy',
        sender: 'John Doe',
        senderId: 'user-1',
        timestamp: '09:40 AM',
        status: 'read',
        avatar: avatar1
      },
      {
        id: 'msg-4',
        text: 'Chat message',
        sender: 'John Doe',
        senderId: 'user-1',
        timestamp: '09:40 AM',
        status: 'read',
        avatar: avatar1
      },
      {
        id: 'msg-5',
        text: 'Is it still available?',
        sender: 'John Doe',
        senderId: 'user-1',
        timestamp: '09:41 AM',
        status: 'read',
        avatar: avatar1
      },
      {
        id: 'msg-6',
        text: 'reply?',
        sender: 'Sarah Davis',
        senderId: 'contact-2',
        timestamp: '09:42 AM',
        avatar: avatar3
      }
    ],
    'contact-3': [
      {
        id: 'msg-7',
        text: 'What is the current bid on the dozer?',
        sender: 'John Doe',
        senderId: 'user-1',
        timestamp: '10:10 AM',
        status: 'delivered',
        avatar: avatar1
      },
      {
        id: 'msg-8',
        text: 'The current bid is $78,200. Auction ends in 1 day.',
        sender: 'Robert Chen',
        senderId: 'contact-3',
        timestamp: '10:15 AM',
        avatar: avatar2
      }
    ]
  })

  const handleSendMessage = (contactId, messageText) => {
    const newMessage = {
      id: `msg-${Date.now()}`,
      text: messageText,
      sender: currentUser.name,
      senderId: currentUser.id,
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'sent',
      avatar: avatar1
    }

    setMessages((prev) => ({
      ...prev,
      [contactId]: [...(prev[contactId] || []), newMessage]
    }))

    // Update contact preview
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === contactId
          ? {
              ...contact,
              messagePreview: messageText.length > 40 ? messageText.substring(0, 40) + '...' : messageText,
              time: new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
              })
            }
          : contact
      )
    )

    // Simulate message delivery status update
    setTimeout(() => {
      setMessages((prev) => ({
        ...prev,
        [contactId]: prev[contactId].map((msg) =>
          msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg
        )
      }))
    }, 500)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      <Navbar />
      <div className="flex-1 min-h-0 max-w-[1440px] mx-auto w-full px-0 sm:px-4 lg:px-8">
        <ChatLayout
          user={currentUser}
          messages={messages}
          contacts={contacts}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  )
}

export default Chat

