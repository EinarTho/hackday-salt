import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchComponent(props) {
  const { fetch, yearInputChange, monthInputChange, wordInputChange } = props;
  return (
    <div>
      <input type="text" placeholder="Year" onChange={yearInputChange} />
      <input type="text" placeholder="word" onChange={wordInputChange} />
      <Link to="/search">
        <p onClick={fetch}>Search</p>
      </Link>
    </div>
  );
}
