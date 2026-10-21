const ORIGIN = import.meta.env.VITE_BASE_URL


export async function login(username, password) {

    const response = await fetch(`${ORIGIN}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password })
    }) 

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || "Error while logging in")   
    }

    return { username, token: data.token }

}


export async function register(username, password) {
    // send http request to API
    const response = await fetch(`${ORIGIN}/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ user: {username, password} })
    })

    // convert 'response' variable to json object. Usually this travels as a string
    const data = await response.json()

    // if trouble while creating a new user, throw an error
    if (!response.ok) {
        throw new Error(data.errors || "Error while registering user!")
    }

    return 
}