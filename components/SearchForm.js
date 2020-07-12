// import "./SearchForm.scss"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";

const SearchForm = (props) => {
  const [value, setValue] = React.useState(null);

  const onSubmit = event => {
    event.preventDefault();
    if (value !== null)
      navigateToTerm(value.name)
  }

  const navigateToTerm = (selectedName) => {
    const found = props.terms.find(x => x.name === selectedName);
    if (found !== null) {
      console.log(found)
      window.location.href = "/term/" + found.slug.current;
    }
  }

  return (
    <form className="SearchForm" onSubmit={onSubmit}>
      <div className="">
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
        <button type="submit" className="search-form-submit">Szukaj</button>
      </div>

    </form>

  )
}

export default SearchForm
