import './InputField.css'

function InputField( {labelContent, placeholder} ) {
    return(
        <div className='input-field'>
            <label>{labelContent}</label>
            <input placeholder={placeholder}/>
        </div>
    )
}

export default InputField;