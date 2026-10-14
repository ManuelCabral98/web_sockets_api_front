import './InputField.css'

function InputField( {labelContent, placeholder, type='text', value, onChangeValue} ) {
    return(
        <div className='input-field'>
            <label>{labelContent}</label>
            <input 
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={(event) => onChangeValue(event.target.value)}
            />
        </div>
    )
}

export default InputField;