import SearchCountry from './SearchCountry.jsx';
import DisplayCountry from './DisplayCountry.jsx';
import countriesAPI from './services/countries.js';

import './style.css';

import { useState, useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchFor, setSearchFor] = useState('');

  // obtain all country data
  useEffect(() => {
    countriesAPI.getAll().then(response => {
      setCountries(response);
    });
  }, []);

  // search display list when querying country
  let displayList = [];
  if (searchFor.length > 0) {
    countries.map(country => {
      if (country.name.common.toLowerCase().startsWith(searchFor.toLowerCase()))
        displayList.push(country.name.common);
    });
  }

  return (
    <div>
      <SearchCountry search={searchFor} setSearch={setSearchFor} />

      {/* Display list of countries that match the search filter.
          If the display list is greater than 10, specify that the list is too large.
          If the display list consists of 1 country, show the information of that country
          1 country display: <DisplayCountry /> component
          United States is the only country that must be shown if exact */}
      {displayList.length > 10 ? (
        <li>Too many matches, specify another filter</li>
      ) : displayList.length < 10 &&
        searchFor.toLowerCase() === 'united states' ? (
        <DisplayCountry country={'United States'} />
      ) : displayList.length > 1 ? (
        displayList.map(country => {
          return <li key={country}>{country}</li>;
        })
      ) : displayList.length === 1 ? (
        <DisplayCountry country={displayList[0]} />
      ) : null}
    </div>
  );
}

export default App;
