import React from 'react'
import "./navigation.scss"

const Navigation = (props) => {
  return (
    <div className="Navigation">
      <ul className="Navigation__items">
        <li className="Navigation__item">
          <a href="/">Znajdź termin</a>
        </li>
        <li className="Navigation__item">
          <a href="/">O nas</a>
        </li>
        <li className="Navigation__item">
          <a href="/">Kontakt</a>
        </li>
        <li className="Navigation__item">
          <a href="/">Blog</a>
        </li>
      </ul>
      <ul className="Navigation__socials">
        <li className="Navigation__social">
          <a href="https://facebook.com" target="_blank">
            <img src="/images/facebook-white.svg" alt="facebook"/>
          </a>
          <a href="https://facebook.com" target="_blank">
            <img src="/images/instagram-white.svg" alt="facebook"/>
          </a>
        </li>
        <li className="Navigation__social">
          <a href="https://instagram.com" target="_blank">

          </a>
        </li>
      </ul>
    </div>
)
}

export default Navigation
