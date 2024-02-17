import { useEffect, useRef, useState } from 'react'
import './App.css'
import { type User } from './types'
import UsersList from './components/UsersList'
import HeaderButtons from './components/HeaderButtons'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showRowColors, setShowRowColors] = useState(false)
  const [sortedByCountry, setSortedByCountry] = useState(false)
  const [areUsersAltered, setAreUsersAltered] = useState(false)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const originalUsers = useRef<User[]>([]) // Saves a value to be shared between renders. When this value changes, the component does not rerender

  const toggleRowColors = () => {
    setShowRowColors(prevSate => !prevSate)
  }

  const sortByCountry = () => {
    setSortedByCountry(prevState => !prevState)
  }

  const handleDeleteUser = (user: User) => {
    const newUsers = users.filter(u => u !== user)
    setUsers(newUsers)
    if (!areUsersAltered) setAreUsersAltered(true)
  }

  const handleResetUsers = () => {
    setUsers(originalUsers.current)
    setAreUsersAltered(false)
  }

  const filteredUsers =
    typeof filterCountry === 'string' && filterCountry.length > 0
      ? users.filter(u => {
          return u.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase())
        })
      : users

  const sortedUsers = sortedByCountry
    ? filteredUsers.toSorted((a: User, b: User) => {
        // toSorted creates a copy of the users array, instead of mutating the original one (.sort does that)
        return a.location.country.localeCompare(b.location.country)
      })
    : filteredUsers

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
        originalUsers.current = res.results
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className='App'>
      <h1>Random Users List</h1>
      <HeaderButtons
        toggleRowColors={toggleRowColors}
        areUsersAltered={areUsersAltered}
        handleResetUsers={handleResetUsers}
        sortByCountry={sortByCountry}
        sortedByCountry={sortedByCountry}
        setFilterCountry={setFilterCountry}
      />
      <main>
        <UsersList
          users={sortedUsers}
          showRowColors={showRowColors}
          deleteUser={handleDeleteUser}
        />
      </main>
    </div>
  )
}

export default App
