import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannelInfo, selectChannelId } from '../../app/features/appSlice';
import './SidebarChannel.css';

import { useSelector } from 'react-redux';

function SidebarChannel({ channel }) {
  const dispatch = useDispatch();
  const channelId = useSelector(selectChannelId);
  const selectedChannelClass =
    channel.id === channelId ? 'sidebarChannel_selected' : 'sidebarChannel';

  return (
    <div
      className={selectedChannelClass}
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: channel.id,
            channelName: channel.channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className='sidebarChannel__hash'>#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
