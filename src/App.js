import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);
  const [fetching, setFetching] = useState(true);

  const getFromApi = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries`
      );
      setCountries(response.data);
      setFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFromApi();
  }, []);
  console.log(countries);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            fetching ? (
              <h1>Please wait</h1>
            ) : (
              <CountriesList countries={countries} />
            )
          }
        />
        <Route
          path="/country/:id"
          element={
            fetching ? (
              <h1>I said WAIT!</h1>
            ) : (
              <CountryDetails countries={countries} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
