import React from 'react'
import './ChatMessages.css'
import Message from './Message'

function ChatMessages() {
    return (
        <div className="chat__messages">
     
            <Message/>
            <Message/>
            <Message/>
        </div>
    )
}

export default ChatMessages
