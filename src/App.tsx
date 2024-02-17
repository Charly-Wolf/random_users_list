import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { SortBy, type User } from './types.d'
import UsersList from './components/UsersList'
import HeaderButtons from './components/HeaderButtons'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [showRowColors, setShowRowColors] = useState(false)
  const [sorted, setSorted] = useState<SortBy>(SortBy.NONE)
  const [areUsersAltered, setAreUsersAltered] = useState(false)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const originalUsers = useRef<User[]>([]) // Saves a value to be shared between renders. When this value changes, the component does not rerender

  const toggleRowColors = () => {
    setShowRowColors(prevSate => !prevSate)
  }

  const resetSorting = () => {
    setSorted(SortBy.NONE)
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

  const handleChangeSort = (sort: SortBy) => {
    setSorted(sorted === sort ? SortBy.NONE : sort)
  }

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter(u => {
          return u.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase())
        })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    switch (sorted) {
      case SortBy.COUNTRY:
        return filteredUsers.toSorted((a: User, b: User) =>
          // toSorted creates a copy of the users array, instead of mutating the original one (.sort does that)
          a.location.country.localeCompare(b.location.country)
        )
      case SortBy.NAME:
        return filteredUsers.toSorted((a: User, b: User) =>
          a.name.first.localeCompare(b.name.first)
        )
      case SortBy.LAST:
        return filteredUsers.toSorted((a: User, b: User) =>
          a.name.last.localeCompare(b.name.last)
        )
      default:
        return filteredUsers
    }
  }, [filteredUsers, sorted])

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
      <ThemeToggle />
      <h1>Random Users List</h1>
      <HeaderButtons
        toggleRowColors={toggleRowColors}
        areUsersAltered={areUsersAltered}
        resetUsers={handleResetUsers}
        resetSorting={resetSorting}
        sorted={sorted}
        setFilterCountry={setFilterCountry}
      />
      <main>
        <UsersList
          users={sortedUsers}
          showRowColors={showRowColors}
          deleteUser={handleDeleteUser}
          changeSort={handleChangeSort}
          sorted={sorted}
        />
      </main>
    </div>
  )
}

export default App
