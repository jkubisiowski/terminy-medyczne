import React from 'react'
import "./SearchForm.scss"

const SearchForm = (props) => {
  return (
    <div className="SearchForm">
      <h1 className="SearchForm__title">Tłumaczymy trudne pojęcia medyczne na ludzki</h1>
      <input className="SearchForm__input" type="text" placeholder="Wpisz termin medyczny"/>
      <button className="SearchForm__buttonPrimary">Szukaj</button>
      <p className="SearchForm__or">lub</p>
      <button className="SearchForm__buttonSecondary">Szukaj</button>
    </div>
  )
}

export default SearchForm
