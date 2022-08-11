import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css';
import { format } from 'date-fns';

function Message({ message }) {
  return (
    <div className='message'>
      <Avatar src={message.message.user.photo} />
      <div className='message__info'>
        <h4>
          {message.message.user.displayName}
          <span className='message__timestamp'>
            {new Date(message.message.timestamp?.toDate()).toLocaleString(
              'de-DE'
            )}
          </span>
        </h4>
        <p>{message.message.message.toString()}</p>
      </div>
    </div>
  );
}

export default Message;
