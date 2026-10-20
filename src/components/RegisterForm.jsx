import './RegisterForm.css'
import InputField from './InputField';
import { useState } from 'react';
import { validate } from '../utilities/validators';

function RegisterForm( {onToGoLogin} ) {
    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordAgain, setNewPasswordAgain] = useState('')

    async function handleRegister(event) {
        event.preventDefault()


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
                labelContent={'Enter your password again'}
                placeholder={'••••••••••••'}
                type={'password'}
                value={newPasswordAgain}
                onChangeValue={setNewPasswordAgain}
                />
            </div>

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