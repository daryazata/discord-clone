import { EditLocation, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React from 'react'
import './ChatHeader.css'

function ChatHeader({channelName}) {
    return (
        <div className="chatHeader">

            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    {channelName} </h3>
            </div>
            <div className="chatHeader__right">
                <Notifications/>
                <EditLocation/>
                <PeopleAltRounded/>
            </div>
            <div className="chatHeader__right_right">

            <div className="chatHeader__search">
                <input type="text" placeholder="Search"/>
                <SearchRounded/>
            </div>
                <SendRounded/>
                <HelpRounded/>
    
            </div>
        </div>
    )
}

export default ChatHeader
