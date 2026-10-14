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