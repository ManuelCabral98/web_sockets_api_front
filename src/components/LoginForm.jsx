import './LoginForm.css'
import InputField from './InputField';

function LoginForm() {


    return(
        <form className="login-form">

            <h1>Log In</h1>
            
            <div>
                <InputField
                labelContent={'Username'}
                placeholder={'enter your username'}
                />
                
                <InputField
                labelContent={'Password'}
                placeholder={'••••'}
                type={'password'}
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