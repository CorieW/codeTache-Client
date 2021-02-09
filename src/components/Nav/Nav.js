import { useState } from 'react'
import './Nav.css'

export default function Nav(props)
{
    function getLoggedOutElements()
    {
        return (
            <div id='nav-right-group'>
                <a id='login-link' href='/login'>Login</a>
                <a id='register-link' href='/signup'>Register</a>
            </div>
        )
    }

    function getLoggedInElements()
    {
        return (
            <div id='nav-right-group'>
                <button id='profile-menu-button'>
                    My Profile
                    <i class="fas fa-caret-right icon"></i>
                </button>
            </div>
        )
    }

    function getRightGroup()
    {
        if (props.loggedIn) return getLoggedInElements()
        else return getLoggedOutElements()
    }

    return (
        <div id='nav-container'>
            <h1 id='site-title'><a href='/'>codeTache</a></h1>

            { getRightGroup() }
        </div>
    )
}
