import { Avatar } from '@material-ui/core'
import { Mic, Headset, Settings } from '@material-ui/icons'
import React from 'react'
import { selectUser } from '../../features/userSlice'
import {useSelector} from 'react-redux'

import './SidebarVoice.css'
import { auth } from '../../app/firebase'




function SidebarProfile() {

    const user = useSelector(selectUser)

    return (
        <div className="sidebar__profile">
            <Avatar className="sidebar__profile__avatar" onClick={ ()=>auth.signOut() } src={user.photo}/>
            <div className="sidebar__profileInfo">
                <h3>{user.displayName}</h3>
                <p>#{user.uid.substring(0,5)} </p>

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
