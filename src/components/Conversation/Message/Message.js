import React from 'react'
import './Message.css'

export default function Message(props)
{
    const message = props.message

    return (
        <div className='message-container'>
            <p className='username'>{ message.sender.username }</p>
            <p className='time'>{ message.time }</p>
            <p className='message'>{ message.message }</p>
        </div>
    )
}
