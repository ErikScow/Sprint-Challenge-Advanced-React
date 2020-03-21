import React from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

const DarkModeButton = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggle = e => {
        e.preventDefault()
        setDarkMode(!darkMode)
    }

    return <button onClick={toggle}>Toggle Dark Mode</button>
}

export default DarkModeButton