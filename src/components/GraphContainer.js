import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/ClipLoader';

export default function GraphContainer(props) {
  const { isLoading, wordCountArray, searchInputWord, year } = props;
  console.log(wordCountArray);

  let publishedArticles = 0;

  if (wordCountArray.length > 0) {
    wordCountArray.forEach((info) => {
      publishedArticles += info.count;
    });
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <br />
        <br />
        <div className="line-chart">
          <LineChart width={400} height={400} data={wordCountArray}>
            <Line type="monotone" dataKey="occuranceCount" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
          </LineChart>
        </div>
        <br />
        <p className="graph-description">
          Occurances of the word '{searchInputWord}' in the year {year}. <br />{' '}
          The average published articles per month in the year {year} by the New
          York Times was {Math.floor(publishedArticles / 6)}.
        </p>
        <Link to="/">
          <p className="search-button">Home</p>
        </Link>
      </div>
    );
  }
}
//factbox - average published articles that year per month
