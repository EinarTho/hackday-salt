import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function GraphContainer(props) {
  const { isLoading, wordCountArray, searchInputWord, year } = props;
  console.log(wordCountArray);

  let publishedArticles = 0;

  wordCountArray.forEach((info) => {
    publishedArticles += info.count;
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <Link to="/">Home</Link>
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
        <p>
          Occurances of '{searchInputWord}' in the year {year}. The average
          published articles per month in the {year} by the New York Times was{' '}
          {Math.floor(publishedArticles / 12)}.
        </p>
      </div>
    );
  }
}
//factbox - average published articles that year per month
