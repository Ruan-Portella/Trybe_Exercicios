import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

export default function Header() {
    const theme = useContext(ThemeContext)
  return (
    <header>
        <h1>Trybe</h1>
        <button onClick={() => theme.toggleTheme()}>Trocar Cor</button>
    </header>
  )
}
