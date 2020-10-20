import { Avatar } from '@material-ui/core'
import { Mic, Headset, Settings } from '@material-ui/icons'
import React from 'react'

import './SidebarVoice.css'



function SidebarProfile() {
    return (
        <div className="sidebar__profile">
            <Avatar src="https://www.newdvdreleasedates.com/images/profiles/julia-roberts-04.jpg"/>
            <div className="sidebar__profileInfo">
                <h3>@lalapis</h3>
                <p>#thisismyID</p>

            </div>
            <div className="sidebar__profileIcons">
                <Mic/>
                <Headset/>
                <Settings/>

            </div>
        </div>
    )
}

export default SidebarProfile
