import React from 'react'
import "./SearchForm.scss"

const SearchForm = (props) => {
  return (
    <div className="SearchForm">
      <h1 className="SearchForm__title">Tłumaczymy trudne pojęcia medyczne na ludzki</h1>
      <input className="SearchForm__input" type="text" placeholder="Wpisz termin medyczny"/>
      <button className="SearchForm__buttonPrimary">Szukaj</button>
      <div className="SearchForm__otherTerms">
        <div className="SearchForm__or">lub</div>
        <button className="SearchForm__buttonSecondary">sprawdź najczęściej wyszukiwane hasła</button>
      </div>

    </div>
  )
}

export default SearchForm
