import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchComponent from './components/SearchComponent';
import React, { useState } from 'react';
import GraphContainer from './components/GraphContainer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';

const axios = require('axios');

function App() {
  const [wordCountArray, setWordCountArray] = useState([]);
  const [searchInputYear, setSearchInputYear] = useState('');
  const [searchInputWord, setSearchInputWord] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [arrayOfArrays, setArrayOfArrays] = useState([]);

  function yearInputChange(e) {
    setSearchInputYear(e.target.value);
  }

  function wordInputChange(e) {
    setSearchInputWord(e.target.value);
  }

  async function fetch(e) {
    setIsLoading(true);
    console.log('before fetch');
    const result = await axios.get(
      `http://localhost:3000/api/${searchInputYear}/${searchInputWord}`
    );
    setIsLoading(false);
    console.log(result);
    setArrayOfArrays(...arrayOfArrays, result.data);
  }

  return (
    <div className="App">
      <Header />
      <Router>
        <SearchComponent
          fetch={fetch}
          yearInputChange={yearInputChange}
          wordInputChange={wordInputChange}
        />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <GraphContainer
            isLoading={isLoading}
            wordCountArray={wordCountArray}
            searchInputWord={searchInputWord}
            year={searchInputYear}
          />
        </Route>
      </Router>
    </div>
  );
}

export default App;
