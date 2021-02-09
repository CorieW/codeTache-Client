import React from 'react'
import './Nav.css'
import ProfileMenu from './ProfileMenu/ProfileMenu'

export default function Nav(props)
{
    function getLoggedOutElements()
    {
        return (
            <div id='nav-right-group-container'>
                <a id='login-link' href='/login'>Login</a>
                <a id='register-link' href='/signup'>Register</a>
            </div>
        )
    }

    function getLoggedInElements()
    {
        return (
            <div id='nav-right-group-container'>
                <ProfileMenu />
            </div>
        )
    }

    function getRightGroupElements()
    {
        if (props.loggedIn) return getLoggedInElements()
        else return getLoggedOutElements()
    }

    return (
        <div id='nav-container'>
            <h1 id='site-title'><a href='/'>codeTache</a></h1>

            { getRightGroupElements() }
        </div>
    )
}
