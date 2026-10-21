import './LoginForm.css'
import { useState } from 'react';
import InputField from './InputField';
import { login } from '../services/authService';
import { validate } from '../utilities/validators';

function LoginForm( {onLogin, onToGoRegister} ) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    async function handleSubmit(event) {
        event.preventDefault() // avoid default browser behavior of reloading the web when a form is submitted

        const data = {"Username": username, "Password": password}
        const validationError = validate(data)
        if (validationError) {
            setError(validationError)
            return 
        }

        setError('')

        try {
            const user = await login(username.trim(), password)
            onLogin(user)
        } catch (err) {
            setError(err.message)
        } finally { // this runs even on success and on error

        }  
    }


    return(
        <form className="forms" onSubmit={handleSubmit}>

            <h1 className='title'>Log In</h1>

            <div>
                <InputField
                labelContent={'Username'}
                placeholder={'enter your username'}
                value={username}
                onChangeValue={setUsername}
                />
                
                <InputField
                labelContent={'Password'}
                placeholder={'••••••••••••'}
                type={'password'}
                value={password}
                onChangeValue={setPassword}
                />
            </div>

            {error && <p className='error-message'>{error}</p>}

            <button
            type='submit'
            className='button'>
                Submit
            </button>

            <p className='paragraph'>
                Don't you have an account?{' '}
                <button type='button' className='link-button' onClick={onToGoRegister}>
                    Sign up
                </button>
            </p>

        </form>
    )
    
}
export default LoginForm;