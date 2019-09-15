import React from 'react'

export default function ChatListLeft({ chatMessage, name, date }) {
    return (
        <div className="retrieve-chat-left">
            <div className="chat-left-name">{name.charAt(0).toUpperCase() + name.slice(1)}</div>
            <div className="chat-left-message">{chatMessage}</div>
            <div className="current-date">{date}</div>
        </div>
    )
}
