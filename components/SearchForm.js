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
    if (value !== null) {
      const found = terms.find(x => x.name.toLowerCase() === value.name.toLowerCase());
      if (found && found.slug) {
        navigateToTerm(found)
      } else {
        submitMissingTerm(event)
      }
    }
  }

  const submitMissingTerm = (ev) => {
    const form = ev.target;
    const data = new FormData();
    data.append('term', value.name);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/mpzykndz");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        window.location.href = "/nie-znaleziono"
      } else {
        console.log(xhr);
        window.location.href = "/nie-znaleziono"
      }
    };
    xhr.send(data);
  }

  const navigateToTerm = found => {
    window.location.href = "/terminy/" + found.slug.current;
  }

  return (
    <>
      <NoSsr>
        <form className="SearchForm" onSubmit={onSubmit}>
          <div className="">
            <div className="searchInput">
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
            </div>
            <button type="submit" className="search-form-submit">Szukaj</button>
          </div>
        </form>
      </NoSsr>
    </>

  )
}

export default SearchForm
