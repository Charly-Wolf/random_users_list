import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'
import UsersList from './components/UsersList'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showRowColors, setShowRowColors] = useState(false)

  const toggleRowColors = () => {
    setShowRowColors(!showRowColors)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className='App'>
      <h1>Random Users List</h1>
      <header>
        <button onClick={toggleRowColors}>Color Rows</button>
      </header>
      <main>
        <UsersList users={users} showRowColors={showRowColors} />
      </main>
    </div>
  )
}

export default App
