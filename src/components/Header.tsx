import Logo from '../assets/image/logo.png'
import Circle from '../assets/image/circle.png'
import { ThemeContext } from './App'
import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import currencyapi from '@everapi/currencyapi-js'

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const [getDate, setGetDate] = useState('2023-09-07T23:59:59Z')
  const [lastUPD, setLastUPD] = useState('')

  /* ДЛЯ РЕАЛЬНЫХ ДАННЫХ */
  // useEffect(() => {
  //   const client = new currencyapi(
  //     'cur_live_2ipYARKKC1oZ9I1QZrbbYf8KIxQcXPe2v05zwMOB',
  //   )

  //   client.latest().then((res: any) => {
  //     // console.log(res.meta.last_updated_at, 8888999)
  //     setGetDate(res.meta.last_updated_at)
  //   })

  //   console.log(getDate, 777)
  // }, [])

  useEffect(() => {
    const date = new Date(Date.parse(getDate))
    let getHours = date.getHours()
    const getMinutes = date.getMinutes()

    if (getHours < 10) {
      getHours = `0${getHours}`
    }

    setLastUPD(`${getHours}:${getMinutes} ${getHours < 12 ? 'am' : 'pm'}`)
  }, [getDate])

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>

        <nav className="header-nav">
          <ul>
            <li>
              <NavLink to="/"> Home</NavLink>
            </li>
            <li>
              <NavLink to="/charts">Timeline</NavLink>
            </li>
            <li>
              <NavLink to="/banks">Bank card</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-toggle">
          <input
            type="checkbox"
            id="toggle-button"
            className="header-toggle__button"
            onChange={toggleTheme}
            checked={theme === 'light'}
          />
          <label htmlFor="toggle-button" className="text">
            {' '}
          </label>
        </div>
      </header>

      <section className="info-wrapper">
        <div className="info-inner">
          <div className="info-text">
            <h1>Modsen Currency Tracker</h1>
            <p>Quotes for the dollar and other international currencies.</p>
          </div>

          <div className="info-image">
            <img src={Logo} alt="pic" />
          </div>
        </div>
      </section>

      <div className="info-updated">
        <img src={Circle} alt="circle" />
        <p>Last updated at {lastUPD}</p>
      </div>
    </>
  )
}

export default Header
