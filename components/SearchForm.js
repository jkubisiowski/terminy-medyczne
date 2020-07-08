import React from 'react'
import "./SearchForm.scss"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";

const top100Films = [
  {title: 'The Shawshank Redemption', year: 1994},
  {title: 'The Godfather', year: 1972},
  {title: 'The Godfather: Part II', year: 1974},
  {title: 'The Dark Knight', year: 2008},
  {title: '12 Angry Men', year: 1957},
  {title: "Schindler's List", year: 1993}];

const SearchForm = (props) => {
  return (
    <div className="SearchForm">
      <h1 className="SearchForm__title">Tłumaczymy trudne pojęcia medyczne na ludzki</h1>
      {/*<input className="SearchForm__input" type="text" placeholder="Wpisz termin medyczny"/>*/}
      <Autocomplete
        className="SearchForm__input"
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Wpisz termin medyczny..."
            variant="outlined"
            InputProps={{...params.InputProps, type: 'search'}}
          />
        )}
      />
      <button className="SearchForm__buttonPrimary">Szukaj</button>
      <div className="SearchForm__otherTerms">
        <div className="SearchForm__or">lub</div>
        <button className="SearchForm__buttonSecondary">sprawdź najczęściej wyszukiwane hasła</button>
      </div>

    </div>
  )
}

export default SearchForm
