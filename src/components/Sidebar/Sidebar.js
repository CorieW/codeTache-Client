import { useState } from 'react'
import { act } from 'react-dom/test-utils'
import './Sidebar.css'

export default function Sidebar(props) {
    const [sidebarShown, setSidebarShown] = useState(true)
    const [activeTab, setActiveTab] = useState(0)

    function toggleSidebar()
    {
        setSidebarShown(!sidebarShown)
    }

    if (props.loggedIn)
        return (
            <div id={ sidebarShown ? 'outer-sidebar-container' : 'closed-outer-sidebar-container'}>
                <div id='sidebar-container'>
                    <p id='sidebar-title'>Conversations</p>
                    <div id='conversation-buttons-container'>
                        <button className={ activeTab === 0 ? 'active' : '' } onClick={ () => setActiveTab(0) }>Friends</button>
                        <button className={ activeTab === 1 ? 'active' : '' } onClick={ () => setActiveTab(1) }>Groups</button>
                    </div>

                    <div id='conversation-listings-container'>
                        <div className={ activeTab === 0 ? '' : 'hidden' }>
                            <button className='conversation-listing'>
                                <i className='fas fa-circle icon online'></i>
                                <p className='username'>Friend 1</p>
                            </button>
                        </div>
                        <div className={ activeTab === 1 ? '' : 'hidden' }>
                            <button className='conversation-listing'>
                                <i class="fas fa-user-friends icon"></i>
                                <p className='username'>Group 1</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div id='sidebar-toggler-container'>
                    <button id='sidebar-toggler' onClick={ () => toggleSidebar() }><i className={ sidebarShown ? 'fas fa-caret-left icon' : 'fas fa-caret-right icon' }></i></button>
                </div>
            </div>
        )
    else
        return null
}
