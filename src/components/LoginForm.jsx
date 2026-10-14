import './LoginForm.css'
import { useState } from 'react';
import InputField from './InputField';
import { login } from '../services/authService';

function LoginForm( {onLogin} ) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function validate() {
        if (username.trim() === '') return 'Missing username field!'
        if (password === '') return 'Missing password field!'
        return ''
    }

    async function handleSubmit(event) {
        event.preventDefault() // avoid default browser behavior of reloading the web when a form is submitted

        const validationError = validate()
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
        <form className="login-form" onSubmit={handleSubmit}>

            <h1>Log In</h1>

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

            {error && <p className='login-error'>{error}</p>}

            <button
            type='submit'
            className='button'>
                Submit
            </button>

        </form>
    )
    
}
export default LoginForm;