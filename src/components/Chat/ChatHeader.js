import { EditLocation, Notifications, PeopleAltRounded } from '@material-ui/icons'
import React from 'react'

function ChatHeader() {
    return (
        <div className="chatHeader">
            <h3>Chatheader HI!</h3>
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        #
                    </span>
                    Test Channel </h3>
            </div>
            <div className="chatHeader__right">
                <Notifications/>
                <EditLocation/>
                <PeopleAltRounded/>
            </div>
        </div>
    )
}

export default ChatHeader
