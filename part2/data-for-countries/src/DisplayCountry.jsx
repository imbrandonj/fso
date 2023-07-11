import countriesAPI from './services/countries.js';

import { useState, useEffect } from 'react';

export default function DisplayCountry({ country }) {
  const [countryData, setCountryData] = useState({});
  const [flagImage, setFlagImage] = useState('');

  // obtain country data
  useEffect(() => {
    countriesAPI.getCountry(country).then(response => {
      setCountryData(response);
      setFlagImage(response.flags.png);
    });
  }, [country]);

  // countryData is an object which contains a `languages` object
  // create an array of the `languages` values from the nested object
  let languageList = [];
  for (let key in countryData.languages) {
    languageList.push(countryData.languages[key]);
  }

  return (
    <div>
      <h1>{country}</h1>
      <p>
        capital {countryData.capital} <br />
        area {countryData.area}
      </p>
      <h3>languages:</h3>
      <ul>
        {languageList.map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      {<img src={flagImage} alt="Flag" />}
    </div>
  );
}
