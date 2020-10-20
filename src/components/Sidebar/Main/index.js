//rfce
import React from 'react'
import './style.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from '../SidebarChannel';
import SidebarVoice from '../SidebarVoice';
import SidebarProfile from '../SidebarProfile';

function Sidebar
() {
    return (
        <div className="sidebar">

                <div className="sidebar__top">
                    <h3>Clever Programmer</h3>
                <ExpandMoreIcon/>
                </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">

                    <ExpandMoreIcon/>
                    <h4>Text Channels</h4>
                    </div>
                <AddIcon className="sidebar__addChannel"/>
                </div>

                <div className="sidebar__channelsList">
                    <SidebarChannel channel='YouTube'/>
                    <SidebarChannel channel="React"/>
                    <SidebarChannel channel="Node"/>
                </div>
            </div>
            <SidebarVoice/>
            <SidebarProfile/>
        </div>
    )
}

export default Sidebar

