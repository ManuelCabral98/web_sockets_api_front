import './App.css'
import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'

const USER = 'username'

function App() {
  // lazy initializer. Runs on first render and restore a session if already exists for 'user' and 'token'
  const [user,setUser] = useState(() => {
    const savedUser = localStorage.getItem(USER)
    return savedUser ? JSON.parse(savedUser) : null
  })

  // runs after every render and only when 'user' changes (also on first render)
   useEffect(() => {
    if (user) {
      localStorage.setItem(USER, JSON.stringify(user))
    } else {
      localStorage.removeItem(USER)
    }
  }, [user])


  // sets 'user' if a login has been executed
  function handleLogin(loggedUser) {
    setUser(loggedUser)
  }

  // removes current session
  function handleLogout() {
    setUser(null)
  }

  return (
    <main className='app'>
      {user ? (
        <h1>Bienvenido</h1>)
         : (
         <LoginForm onLogin={handleLogin}/>
      )}

      
    </main>
  )
}

export default App
