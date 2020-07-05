import React from 'react'
import "./header.scss"

function Header(props) {
  return (
    <div className="Header">
      <a className="Header__title" href="/">Terminy medyczne.pl</a>
      <img className="Header__logo" alt="logo" src="images/logo.png"/>
      <h2 className="Header__subtitle">Sprawdź, co lekarz miał na myśli</h2>
      <p className="next">Next</p>
    </div>

  )
}

export default Header;
