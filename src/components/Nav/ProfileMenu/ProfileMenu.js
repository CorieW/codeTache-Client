import { useState } from 'react'
import './ProfileMenu.css'

export default function ProfileMenu()
{
    const [profileMenuShown, setProfileMenuShown] = useState(false)

    return (
        <div id='outer-profile-menu-container'>
            <button id='profile-menu-toggle-button' onClick={ () => setProfileMenuShown(!profileMenuShown) }>
                Username
                <i className={ `fas fa-caret-${profileMenuShown ? 'up' : 'down'} icon` }></i>
            </button>

            <div id={ profileMenuShown ? 'profile-menu-container' : 'closed-profile-menu-container' }>
                <ul>
                    <li><a href='/profile'>My Profile</a></li>
                    <li><a href='/account'>Account</a></li>
                    <li><a href='/settings'>Settings</a></li>
                    <hr/>
                    <li><a href='/sign-out'>Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}
