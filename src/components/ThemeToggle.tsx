/* eslint-disable multiline-ternary */
import { useEffect, useState } from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches
  const storedDarkMode = localStorage.getItem('darkTheme')

  console.log(
    window.matchMedia('prefers-color-scheme:dark)').matches
      ? 'prefers dark mode'
      : 'does NOT prefers dark mode'
  )

  if (storedDarkMode === null) {
    return prefersDarkMode
  }

  return storedDarkMode === 'true'
}

const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)

    document.body.classList.toggle('dark-theme', newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme ? 'true' : 'false')
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [])

  return (
    <section className='toggle-container'>
      <button onClick={toggleDarkTheme} className='dark-toggle'>
        {isDarkTheme ? (
          <BsFillMoonFill className='toggle-icon' />
        ) : (
          <BsFillSunFill className='toggle-icon' />
        )}
      </button>
    </section>
  )
}
export default ThemeToggle
