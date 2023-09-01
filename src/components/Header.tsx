import React from 'react'
import Logo from '../assets/image/logo.png'
import Circle from '../assets/image/circle.png'

const Header = () => {
  {
    /* ширина контейнера 1240зч */
  }
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Timeline</a>
            </li>
            <li>
              <a href="/">Bank card</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
          </ul>
        </nav>

        <div className="header-toggle">
          <input
            type="checkbox"
            id="toggle-button"
            className="header-toggle__button"
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
