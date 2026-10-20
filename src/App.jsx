import './App.css'
import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

const USER = 'username'

function App() {
  // lazy initializer. Runs on first render and restore a session if already exists for 'user' and 'token'
  const [user,setUser] = useState(() => {
    const savedUser = localStorage.getItem(USER)
    return savedUser ? JSON.parse(savedUser) : null
  })
  // manage which screen to show: login or register
  const [screen, setScreen] = useState('login')

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

  // variable 'content' decides what users will see on their screen
  let content
  if (user) {
    content = <h1>Bienvenido</h1>
  } else if (screen == 'register') {
    content = <RegisterForm onToGoLogin={() => setScreen('login')}/>
  } else if (screen == 'login') {
    content = <LoginForm onToGoRegister={() => setScreen('register')} onLogin={handleLogin}/>
  }

  return (
    <main className='app'>
      {content}
    </main>
  )
}

export default App
