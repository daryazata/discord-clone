import React from 'react'
import ChatHeader from '../ChatHeader'
import ChatInput from '../ChatInput'
import ChatMessages from '../ChatMessages'
import './style.css'

function Chat() {
    return (
        <div className="chat">

            <ChatHeader/>
            <ChatMessages/>
            <ChatInput/>
        </div>
    )
}

export default Chat
