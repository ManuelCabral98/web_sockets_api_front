import './InputField.css'

function InputField( {labelContent, placeholder, type='text'} ) {
    return(
        <div className='input-field'>
            <label>{labelContent}</label>
            <input 
            placeholder={placeholder}
            type={type}
            />
        </div>
    )
}

export default InputField;