import { useState } from 'react'
import '../../auth-styles.css'
import $ from 'jquery'

export default function Register()
{
    const [error, setError] = useState()

    function attemptRegister(e) {
        // Stop usual form behaviour.
        e.preventDefault()
        setError()
        
        // Make validation checks.
        // Return if something goes wrong.
        const email = $('#email-input')[0].value
        // Check to see if email has the format of an email (Regex)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) return setError('Email field must contain a valid email address.');

        const username = $('#username-input')[0].value
        if (username.length < 3 || username.length > 16) return setError('Username must have between 3 and 16 characters.')

        // TODO: Password requirements.
        const password = $('#password-input')[0].value

        const confirmPassword = $('#confirm-password-input')[0].value
        if (password !== confirmPassword) return setError('Password and confirm password are not the same.')

        const tosChecked = $('#tos-checkbox')[0].checked
        console.log(tosChecked)
        if (!tosChecked) return setError('You must agree to our terms of service and privacy policy before registering.')

        // If everything goes to plan then register.
        register()
    }

    function register() {
        // TODO: Register with backend.
    }

    return (
        <form onSubmit={ attemptRegister } className='auth-form-container'>
            <h1>Create an account</h1>
            <label for='email-input' className='auth-label'>Email</label>
            <input id='email-input' name='email' className='auth-input'/>
            <label for='username-input' className='auth-label'>Username</label>
            <input id='username-input' name='username' className='auth-input'/>
            <label for='password-input' className='auth-label'>Password</label>
            <input type='password' id='password-input' name='password' className='auth-input'/>
            <label for='confirm-password-input' className='auth-label'>Confirm Password</label>
            <input type='password' id='confirm-password-input' className='auth-input'/>
            <input type="checkbox" id='tos-checkbox' className='checkbox' name="tos"></input>
            <label for='tos-checkbox' className='checkbox-text'>Agree to <a href='terms'>Terms of Service</a> and <a href='privacy'>Privacy Policy</a>.</label>
            <button className='auth-btn'>Continue</button>
            <a href='/login' className='auth-link'>Already have an account?</a>
            <p className='error-text'>{ error }</p>
        </form>
    )
}
