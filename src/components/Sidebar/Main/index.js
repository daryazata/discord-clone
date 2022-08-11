//rfce
import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './style.css';
import SidebarChannel from '../SidebarChannel';
import SidebarVoice from '../SidebarVoice';
import SidebarProfile from '../SidebarProfile';
import db from '../../../app/firebase';

function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const unsub = db.collection('channels').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );

    return () => {
      unsub();
    };
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt('Enter a new channel name');
    if (channelName) {
      db.collection('channels').add({
        channelName,
      });
    }
  };

  console.log('channels: ', channels);
  const display_channels = channels.map((channel) => {
    // console.log('channels: ', channel);
    return <SidebarChannel key={channel.id} channel={channel} />;
  });
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h3>Clever Programmer</h3>
        <ExpandMoreIcon />
      </div>
      <div className='sidebar__channels'>
        <div className='sidebar__channelsHeader'>
          <div className='sidebar__header'>
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon onClick={handleAddChannel} className='sidebar__addChannel' />
        </div>

        <div className='sidebar__channelsList'>{display_channels}</div>
      </div>
      <SidebarVoice />
      <SidebarProfile />
    </div>
  );
}

export default Sidebar;
