import './LoginForm.css'
import InputField from './InputField';
import { useState } from 'react';

function LoginForm() {
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
            return error
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
                onChange={setUsername}
                />
                
                <InputField
                labelContent={'Password'}
                placeholder={'••••'}
                type={'password'}
                value={password}
                onChange={setPassword}
                />
            </div>

            <button
            type='submit'
            className='button'>
                Submit
            </button>

        </form>
    )
    
}
export default LoginForm;