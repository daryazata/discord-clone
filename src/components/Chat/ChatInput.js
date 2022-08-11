import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from '@material-ui/icons';
import React, { useState } from 'react';
import db from '../../app/firebase';
import './ChatInput.css';
import { useSelector } from 'react-redux';
import {
  selectChannelId,
  selectChannelName,
} from '../../app/features/appSlice';
import { selectUser } from '../../app/features/userSlice';
import firebase from 'firebase';

function ChatInput() {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');

  const handleAddMessage = (e) => {
    e.preventDefault();
    if (input) {
      db.collection('channels').doc(channelId).collection('messages').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user: user,
      });

      setInput('');
    }
  };

  return (
    <div className='chat__input'>
      <AddCircle fontSize='large' />
      <form onSubmit={handleAddMessage}>
        <input
          value={input}
          disabled={!channelId}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder={channelName ? `message #${channelName}` : ''}
        />
        <button
          disabled={!channelId}
          className='chat__inputButton'
          type='submit'
        >
          Send message
        </button>
      </form>
      <div className='chat__inputIcons'>
        <CardGiftcard fontSize='large' />
        <Gif fontSize='large' />
        <EmojiEmotions fontSize='large' />
      </div>
    </div>
  );
}

export default ChatInput;
