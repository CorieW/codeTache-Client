import { useState } from 'react'
import '../../auth-styles.css'
import $ from 'jquery'

export default function Login()
{
    const [error, setError] = useState()

    function attemptLogin(e) {
        // Stop usual form behaviour.
        e.preventDefault()
        setError()

        // Make validation checks.
        // Return if something goes wrong.
        const email = $('#email-input')[0].value
        // Check to see if email has the format of an email (Regex)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) return setError('Email or password is invalid.');

        const password = $('#password-input')[0].value
        if (password.length === 0) return setError('Email or password is invalid.');

        // If everything goes to plan then login.
        login()
    }

    function login() {
        // TODO: Login with backend.
    }

    return (
        <form onSubmit={ attemptLogin } className='auth-form-container'>
            <h1>Login</h1>
            <label for='email-input' className='auth-label'>Email</label>
            <input id='email-input' name='email' className='auth-input'/>
            <label for='password-input' className='auth-label'>Password</label>
            <input type='password' id='password-input' name='password' className='auth-input'/>
            <a href='/reset-password' className='auth-link'>Forgot your password?</a>
            <button className='auth-btn'>Login</button>
            <a href='/register' className='auth-link'>Create an account</a>
            <p className='error-text'>{ error }</p>
        </form>
    )
}
