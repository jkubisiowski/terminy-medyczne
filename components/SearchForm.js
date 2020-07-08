import React from 'react'
import "./SearchForm.scss"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";

const SearchForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target);
  }

  return (
    <div className="SearchForm">
      <h1 className="SearchForm__title">Tłumaczymy trudne pojęcia medyczne na ludzki</h1>
      <form onSubmit={handleSubmit}>
        <Autocomplete
          className="SearchForm__input"
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={props.terms.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Wpisz termin medyczny"
              variant="outlined"
              InputProps={{...params.InputProps, type: 'search'}}
            />
          )}
        />
      </form>
      <button type="submit" className="SearchForm__buttonPrimary">Szukaj</button>
      <div className="SearchForm__otherTerms">
        <div className="SearchForm__or">lub</div>
        <button className="SearchForm__buttonSecondary">sprawdź najczęściej wyszukiwane hasła</button>
      </div>

    </div>
  )
}

export default SearchForm
