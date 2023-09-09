import React from 'react'

const ContactsInfo = () => {
  return (
    <main className="contacts">
      <div className="contacts-address">
        <h2>Витебск:</h2>
        <p>ул. Богдана Хмельницкого 30/46,</p>
        <p>Витебск, Беларусь</p>
        <p className="contacts-address__email">
          <span>Email:</span>
          <a href="mailto:internship@modsen-software.com">
            internship@modsen-software.com
          </a>
        </p>
        <p className="contacts-address__phone">
          <span>Телефон:</span>
          <a href="tel:+375259307963">+375 (25) 930 79 63</a>
        </p>
      </div>

      <div className="contacts-address">
        <h2>Warsaw:</h2>
        <p>Stefana Okrzei 1a/10,</p>
        <p>Warsaw, Poland</p>
        <p className="contacts-address__email">
          <span>Email:</span>
          <a href="mailto:internship@modsen-software.com">
            internship@modsen-software.com
          </a>
        </p>
        <p className="contacts-address__phone">
          <span>Phone:</span>
          <a href="tel:+48501157180">+48 (50) 115 71 80</a>
        </p>
      </div>
    </main>
  )
}

export default ContactsInfo
