import './RegisterForm.css'
import InputField from './InputField';

function RegisterForm() {


    return (
        <form>
            <h1>Sign Up</h1>
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
            </div>
        </form>
    )
}
export default RegisterForm;