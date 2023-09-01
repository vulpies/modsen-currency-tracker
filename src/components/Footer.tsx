import Logo from '../assets/image/logo.png'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-text">
          <div className="footer-info">
            <img src={Logo} alt="logo" />
            <h4>Modsen Currency Tracker</h4>
          </div>
          <p>
            Since then, the company has grown organically to. Starsup is the
            world&apos;s largest trading platform, with $12 billion worth of
            currency trading and 500,000 tickets sold daily to tens of thousands
            of traders worldwide.
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <li>General</li>
            <li>
              <a href="/">Market</a>
            </li>
            <li>
              <a href="/">Service</a>
            </li>
          </ul>

          <ul>
            <li>Product</li>
            <li>
              <a href="/">Sparks</a>
            </li>
            <li>
              <a href="/">Snaps</a>
            </li>
          </ul>

          <ul>
            <li>Community</li>
            <li>
              <a href="/">Ideas</a>
            </li>
            <li>
              <a href="/">Streams</a>
            </li>
          </ul>
        </div>
      </footer>

      <footer className="footer-copyright">
        <p>Startsup © 2023-2024, All Rights Reserved</p>
      </footer>
    </>
  )
}

export default Footer
