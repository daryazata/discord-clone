import React from 'react'
import { selectChannelName, selectChannelId } from '../../../features/appSlice'
import { selectUser } from '../../../features/userSlice'
import ChatHeader from '../ChatHeader'
import ChatInput from '../ChatInput'
import ChatMessages from '../ChatMessages'
import './style.css'
import {useSelector } from 'react-redux'

function Chat() {
    
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)


    return (
        <div className="chat">

            <ChatHeader channelName={channelName}/>
            <ChatMessages/>
            <ChatInput/>
        </div>
    )
}

export default Chat
