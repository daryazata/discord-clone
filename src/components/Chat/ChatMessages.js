import React from 'react';
import './ChatMessages.css';
import Message from './Message';

function ChatMessages({ messages }) {
  const displayMessages = messages.map((message) => {
    return <Message key={message.id} message={message} />;
  });

  return <div className='chat__messages'>{displayMessages}</div>;
}

export default ChatMessages;
