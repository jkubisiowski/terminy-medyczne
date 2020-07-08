import React from 'react'
import "./SearchForm.scss"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";

const SearchForm = (props) => {
  const [value, setValue] = React.useState(null);

  const onSubmit = event => {
    event.preventDefault();
    if(value!== null)
      navigateToTerm(value.name)
  }

  const handleClick = () => {
    if(value!== null)
      navigateToTerm(value.name)
  }

  const navigateToTerm = (selectedName) => {
    const found = props.terms.find(x => x.name === selectedName);
    if(found !== null){
      console.log(found)
      window.location.href = "/term/" + found.slug.current;
    }
  }

  return (
    <div className="SearchForm">
      <h1 className="SearchForm__title">Sprawdź, co lekarz miał na myśli</h1>
      <form onSubmit={onSubmit}>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === 'string') {
              setValue({
                name: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValue({
                name: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
          }}
          className="SearchForm__input"
          freeSolo
          disableClearable
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === 'string') {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.name;
          }}
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
      <button onClick={handleClick} type="submit" className="SearchForm__buttonPrimary">Szukaj</button>
      <div className="SearchForm__otherTerms">
        <div className="SearchForm__or">lub</div>
        <button className="SearchForm__buttonSecondary">sprawdź najczęściej wyszukiwane hasła</button>
      </div>

    </div>
  )
}

export default SearchForm
