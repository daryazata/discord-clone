import React, { useState, useEffect } from 'react';
import {
  selectChannelName,
  selectChannelId,
} from '../../../app/features/appSlice';
import ChatHeader from '../ChatHeader';
import ChatInput from '../ChatInput';
import ChatMessages from '../ChatMessages';
import './style.css';
import { useSelector } from 'react-redux';
import db from '../../../app/firebase';

function Chat() {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      const unsub = db
        .collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              message: doc.data(),
            }))
          )
        );
      return () => {
        unsub();
      };
    }
  }, [channelId]);

  return (
    <div className='chat'>
      <div className='chat_scroll'>
        <ChatHeader channelName={channelName} />
        <ChatMessages messages={messages} />
      </div>
      <ChatInput />
    </div>
  );
}

export default Chat;
