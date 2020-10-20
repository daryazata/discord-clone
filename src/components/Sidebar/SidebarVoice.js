import React from 'react'
import './SidebarVoice.css'

import {Call, SignalCellularAlt, InfoOutlined} from '@material-ui/icons';
function SidebarVoice() {
    return (
        <div className="sidebar__voice" >
            <SignalCellularAlt
            className="sidebar__voiceIcon"
            fontSize='large'
            />
            <div className="sidebar__voiceInfo">
                <h3>Voice Connected</h3>
                <p>Stream</p>
            </div>
            <div className="sidebar__voiceIcons">
                <InfoOutlined/>
                <Call/>
            </div>
            
        </div>
    )
}

export default SidebarVoice
