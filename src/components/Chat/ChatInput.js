import { AddCircle, CardGiftcard, EmojiEmotions , Gif} from '@material-ui/icons'
import React from 'react'
import './ChatInput.css'

function ChatInput() {
    return (
        <div className='chat__input'>
            <AddCircle
            fontSize="large"
            />
            <form>
                <input type="text" placeholder={`message testchannel`}/>
                <button className="chat__inputButton"
                 type="submit">Send message</button>
            </form>
            <div className="chat__inputIcons">
                <CardGiftcard   fontSize="large"/>
                <Gif   fontSize="large"/>
                <EmojiEmotions   fontSize="large"/>
            </div>
        </div>
    )
}

export default ChatInput
