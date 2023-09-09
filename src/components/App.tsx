import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, Timeline, Banks, Contacts } from '../pages/indexPages'
import { createContext, useState } from 'react'

export const ThemeContext = createContext('dark')

const App = () => {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'))
  }

  const root = document.getElementById('root')
  root?.setAttribute('data-theme', theme)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/banks" element={<Banks />} />
          <Route path="/charts" element={<Timeline />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App
