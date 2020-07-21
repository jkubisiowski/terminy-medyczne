import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";
import NoSsr from "@material-ui/core/NoSsr";
import {useEffect, useState} from "react";
import client from "../client";
import groq from "groq";

const SearchForm = (props) => {
  const [value, setValue] = useState(null);
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    client.fetch(groq`*[_type == "term"]`)
      .then(data => {
        setTerms(data)
      })
  }, [])

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const onSubmit = event => {
    event.preventDefault();
    console.log(value)
    if (value !== null)
      navigateToTerm(value.name);
  }

  const navigateToTerm = (selectedName) => {
    const found = terms.find(x => x.name.toLowerCase() === selectedName.toLowerCase());
    if (found) {
      window.location.href = "/terminy/" + found.slug.current;
    } else {
      fetch("/", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: encode({"form-name": "search", "term": value.name})
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));
    }
  }

  return (
    <>
      <form name="search" netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="term" />
      </form>
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
            options={terms.map((option) => option.name)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Wpisz termin lub skrót medyczny"
                variant="outlined"
                InputProps={{...params.InputProps, type: 'search'}}
                name="term"
              />
            )}
          />
          <button type="submit" className="search-form-submit">Szukaj</button>
        </div>

      </form>
    </>

  )
}

export default SearchForm
