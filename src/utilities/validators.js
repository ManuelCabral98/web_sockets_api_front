// handle validation if fields are empty
export function validate(data) {
    for (const [key, value] of Object.entries(data)) {
        if (value.trim() ===  '') return messageValidation(key)
    }
    return ''
}

// creates and return the message if any field is empty
function messageValidation(field) {
    return `Error! ${field} field is missing.`
}