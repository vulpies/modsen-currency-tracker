import Logo from '../assets/image/logo.png'
import Circle from '../assets/image/circle.png'
import { ThemeContext } from './App'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

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
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/charts">Timeline</NavLink>
            </li>
            <li>
              <NavLink to="/locations">Bank card</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contato</NavLink>
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
        <p>Last updated at 11:59pm</p>
      </div>
    </>
  )
}

export default Header
