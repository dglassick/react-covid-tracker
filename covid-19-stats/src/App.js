import './App.css';
import React, { useState, useEffect } from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import InfoBox from './components/InfoBox/InfoBox';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const countries = data.map(country => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = event => {
    const countryCode = event.target.value;
    console.log(countryCode);
    setCountry(countryCode);
  };

  return (
    <div className='app'>
      <div className='app__header'>
        <h1>COVID-19 Tracker</h1>
        <FormControl className='app__dropdown'>
          <Select varient='outlined' value={country} onChange={onCountryChange}>
            <MenuItem value='worldwide'>Worldwide</MenuItem>
            {countries.map(country => (
              <MenuItem key={country.name} value={country.value}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className='app__stats'>
        <InfoBox title='Coronavirus Cases' cases={123} total={2000} />
        <InfoBox title='Revocered' cases={1234} total={3000} />
        <InfoBox title='Deaths' cases={123} total={4000} />
      </div>
    </div>
  );
}

export default App;
