import React from 'react'
import './ConversationListing.css'

export default function ConversationListing(props)
{
    const conversation = props.conversation

    if (conversation.type === 'User')
        return (
            <a className='conversation-listing-container' href={`/conversation/${conversation.id}`}>
                <p>
                    <span className={ `fas fa-circle icon ${conversation.user.status.toLowerCase()}` }></span>
                    <span className='name'>{ conversation.user.name }</span>
                </p>
            </a>
        )
    else if (conversation.type === 'Group')
        return (
            <a className='conversation-listing-container' href={`/conversation/${conversation.id}`}>
                <p>
                    <span className="fas fa-user-friends icon"></span>
                    <span className='name'>{ conversation.name }</span>
                </p>
            </a>
        )
    else
        return null
}
