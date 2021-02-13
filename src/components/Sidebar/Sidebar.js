import { useState } from 'react'
import ConversationListing from './ConversationListing/ConversationListing'
import './Sidebar.css'

export default function Sidebar() {
    const [sidebarShown, setSidebarShown] = useState(true)

    const [conversations, setConversations] = 
        useState([
            {id: 0, type: 'User', user: {name: 'Friend', status: 'Online'}},
            {id: 1, type: 'Group', name: 'A group'},
            {id: 2, type: 'User', user: {name: 'Busy-Friend', status: 'Busy'}},
            {id: 3, type: 'Group', name: 'Not so cool kids group'},
            {id: 4, type: 'Group', name: 'Cool kids group'},
            {id: 5, type: 'User', user: {name: 'Away-Friend', status: 'Away'}},
            {id: 6, type: 'User', user: {name: 'Not-Online-Friend', status: 'Offline'}}])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(undefined)

    function getConversationListings()
    {
        if (error)
            return <p id='conversation-listings-state'>{ error }</p>
        else if (isLoading)
            return <p id='conversation-listings-state'>Loading conversations...</p>
        else if (conversations.length === 0)
            return <p id='conversation-listings-state'>No conversations to show.</p>

        return (
            <div>
                { conversations.map((conversation, index) => {
                    return <ConversationListing conversation={ conversation } key={ index } />
                })}
            </div>
        )
    }

    function toggleSidebar()
    {
        setSidebarShown(!sidebarShown)
    }

    return (
        <div id={ sidebarShown ? 'outer-sidebar-container' : 'closed-outer-sidebar-container'}>
            <div id='sidebar-container'>
                <p id='sidebar-title'>Conversations</p>
                { getConversationListings() }
            </div>
            <div id='sidebar-toggler-container'>
                <button id='sidebar-toggler' onClick={ () => toggleSidebar() }><i className={ sidebarShown ? 'fas fa-caret-left icon' : 'fas fa-caret-right icon' }></i></button>
            </div>
        </div>
    )
}
