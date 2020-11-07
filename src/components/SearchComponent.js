import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchComponent(props) {
  const { fetch, yearInputChange, wordInputChange } = props;
  return (
    <div className="search-component">
      <div>
        <h1>Words through times</h1>
      </div>
      <input type="text" placeholder="Year" onChange={yearInputChange} />
      <input type="text" placeholder="word" onChange={wordInputChange} />
      <Link to="/search">
        <p className="search-button" onClick={fetch}>
          Search
        </p>
      </Link>
    </div>
  );
}
