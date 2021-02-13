import React from 'react'
import './Nav.css'
import ProfileMenu from './ProfileMenu/ProfileMenu'

export default function Nav()
{
    return (
        <div id='nav-container'>
            <h1 id='site-title'><a href='/'>codeTache</a></h1>

            <div id='nav-right-group-container'>
                <ProfileMenu />
            </div>
        </div>
    )
}
