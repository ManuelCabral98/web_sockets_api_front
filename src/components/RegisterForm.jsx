import './RegisterForm.css'
import InputField from './InputField';
import { useState } from 'react';
import { passwordsMatch, validate } from '../utilities/validators';
import { register } from '../services/authService';

function RegisterForm( {onToGoLogin} ) {
    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordAgain, setNewPasswordAgain] = useState('')
    const [error, setError] = useState('')

    async function handleRegister(event) {
        event.preventDefault() // avoid default browser behavior of reloading the web when a form is submitted

        // create an object with the data of the form introduced by the user
        const registerData = {"Username": newUsername, "Password": newPassword, "Confirm password": newPasswordAgain}
        
        // if error message detected, stops function execution and set the error message in 'error' variable
        const errorMessage = validate(registerData)
        if (errorMessage) {
            setError(errorMessage)
            return
        }

        // if not, execution continues normally
        const passMatch = passwordsMatch(newPassword, newPasswordAgain)
        if (!passMatch) {
            setError("Passwords don't match!")
            return
        }
        // set error variable empty to clean any previous error message existing
        setError('')

        try {
            const registerProcess = await register(newUsername.trim(), newPassword)
            alert("User created succesfully! Please Log In")
            onToGoLogin()
        } catch(error) {
            setError(error.message)
        }
    }

    return (
        <form className='forms' onSubmit={handleRegister}>
            <h1 className='title'>Sign Up</h1>
            <div>
                <InputField
                labelContent={'Create a username'}
                placeholder={'e.g: miguel_perez'}
                value={newUsername}
                onChangeValue={setNewUsername}
                />
                <InputField
                labelContent={'Create a password'}
                placeholder={'••••••••••••'}
                type={'password'}
                value={newPassword}
                onChangeValue={setNewPassword}
                />
                <InputField
                labelContent={'Confirm your password'}
                placeholder={'••••••••••••'}
                type={'password'}
                value={newPasswordAgain}
                onChangeValue={setNewPasswordAgain}
                />
            </div>

            {error && <p className='error-message'>{error}</p>}

            <button type='submit' className='button'>Register</button>

            <p>
                Already have an account?{' '}
                <button type='button' className='link-button' onClick={onToGoLogin}>
                    Log in
                </button>
            </p>
        </form>
    )
}
export default RegisterForm;