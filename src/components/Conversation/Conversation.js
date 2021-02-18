import { useState, useEffect } from 'react'
import $ from 'jquery'
import './Conversation.css'
import Message from './Message/Message'

export default function Conversation()
{
    const previousReadMessageID = 34
    const [messages, setMessages] = useState([
        {id: 0, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is the message I sent.'},
        {id: 13, sender: {username: 'User3874', status: 'Online'}, time: 'Time/Date', message: 'This is another message I sent.'},
        {id: 15, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is another another message I sent.'},
        {id: 28, sender: {username: 'User3874', status: 'Online'}, time: 'Time/Date', message: 'This is another message I sent.'},
        {id: 29, sender: {username: 'User3874', status: 'Online'}, time: 'Time/Date', message: 'This is another another message I sent.'},
        {id: 31, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is the message I sent.'},
        {id: 49, sender: {username: 'User3874', status: 'Online'}, time: 'Time/Date', message: 'This is the message I sent.'},
        {id: 59, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is another another another message I sent.'},
        {id: 68, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is another another another another another message I sent.'},
        {id: 79, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is the message I sent.'},
        {id: 80, sender: {username: 'User3874', status: 'Online'}, time: 'Time/Date', message: 'This is another message I sent.'},
        {id: 82, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is another another message I sent.'},
        {id: 83, sender: {username: 'User3874', status: 'Online'}, time: 'Time/Date', message: 'This is another message I sent.'},
        {id: 84, sender: {username: 'User3874', status: 'Online'}, time: 'Time/Date', message: 'This is another another message I sent.'},
        {id: 103, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is the message I sent.'},
        {id: 111, sender: {username: 'User3874', status: 'Online'}, time: 'Time/Date', message: 'This is the message I sent.'},
        {id: 160, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is another another another message I sent.'},
        {id: 193, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is another another another another another message I sent.'},
        {id: 194, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is the message I sent.'},
        {id: 195, sender: {username: 'User3874', status: 'Online'}, time: 'Time/Date', message: 'This is another message I sent.'},
        {id: 206, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is another another message I sent.'},
        {id: 220, sender: {username: 'User3874', status: 'Online'}, time: 'Time/Date', message: 'This is another message I sent.'},
        {id: 301, sender: {username: 'User3874', status: 'Online'}, time: 'Time/Date', message: 'This is another another message I sent.'},
        {id: 310, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is the message I sent.'},
        {id: 319, sender: {username: 'User3874', status: 'Online'}, time: 'Time/Date', message: 'This is the message I sent.'},
        {id: 390, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is another another another message I sent.'},
        {id: 393, sender: {username: 'Cool_kid123', status: 'Online'}, time: 'Time/Date', message: 'This is another another another another another message I sent.'}
    ])

    function getUsername() {
        return 
    }

    useEffect(() => {
        // Scroll to bottom of the messages container.
        $('#messages-container').scrollTop($('#messages-container')[0].scrollHeight)

        // However, if there are new messages, scroll to them.
        if ($('#unread').length !== 0) {
            window.location.href = '#unread'
            // TODO: Change the user's previous_read_message_id value in the database.
        }
    }, [messages])

    return (
        <div id='conversation-container'>
            <div className='top-bar-container'>
                <h2>
                    <span className='fas fa-circle icon status'></span>
                    <span className='name'>{ 'Username' }</span>
                </h2>
            </div>
            <div id='messages-container'>
                { messages.map(
                    function (message, index) {
                        if (message.id > previousReadMessageID && !this.unreadPlaced) {
                            this.unreadPlaced = true // #unread has been placed now.
                            return (
                                <>
                                    <p id='unread'>Unread Messages</p>
                                    <Message message={ message } key={ index } />
                                </>
                            )
                        }
                        else {
                            return <Message message={ message } key={ index } />
                        }
                    }, { unreadPlaced: false })
                }
            </div>
            <form id='message-form'>
                <input placeholder='Message' id='message-input'></input>
            </form>
        </div>
    )
}
