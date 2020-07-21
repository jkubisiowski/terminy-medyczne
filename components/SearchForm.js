import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";
import NoSsr from "@material-ui/core/NoSsr";
import {useEffect, useState} from "react";
import client from "../client";
import groq from "groq";
import {createFilterOptions} from "@material-ui/lab";

const SearchForm = (props) => {
  const [value, setValue] = useState(null);
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    client.fetch(groq`*[_type == "term"]`)
      .then(data => {
        setTerms(data)
      })
  }, [])

  const filter = createFilterOptions();

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const onSubmit = event => {
    event.preventDefault();
    if (value !== null)
      handleSearchTerm(value.name);
  }

  const submitMissingTerm = () => {
    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: encode({"form-name": "search", "term": value.name})
    })
      .then(() => window.location.href = "/not-found")
      .catch(error => console.log(error));
  }

  const navigateToTerm = found => {
    window.location.href = "/terminy/" + found.slug.current;
  }

  const handleSearchTerm = (selectedTerm) => {

    const found = terms.find(x => x.name.toLowerCase() === selectedTerm.toLowerCase());
    if (found) {
      navigateToTerm(found)
    } else {
      submitMissingTerm()
    }
  }

  return (
    <>
      <form name="search" netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="term"/>
      </form>
      <NoSsr>
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
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                // Suggest the creation of a new value
                if (params.inputValue !== '') {
                  filtered.push({
                    inputValue: params.inputValue,
                    name: `Szukaj "${params.inputValue}"`,
                  });
                }

                return filtered;
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              options={terms}
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
              renderOption={(option) => option.name}
              freeSolo
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Wpisz termin lub skrót medyczny"
                  variant="outlined"
                />
              )}
            />
            <button type="submit" className="search-form-submit">Szukaj</button>
          </div>
        </form>
      </NoSsr>
    </>

  )
}

export default SearchForm
