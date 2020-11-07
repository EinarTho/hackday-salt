const fetch = require('node-fetch');

const months = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mars',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sept',
  10: 'Okt',
  11: 'Nov',
  12: 'Des',
};

const fetchMonth = async (info) => {
  console.log(info);
  const response = await fetch(
    `https://api.nytimes.com/svc/archive/v1/${info.year}/${info.month}.json?api-key=${key}`
  );
  const toJSON = await response.json();
  const resultArray = toJSON.response.docs;
  const articleCount = toJSON.response.docs.length;
  const query = info.query;
  let count = 0;
  let occuranceCount = 0;
  while (count < articleCount) {
    if (resultArray[count].abstract.includes(query)) {
      occuranceCount++;
    }
    count++;
  }
  return {
    count,
    occuranceCount,
    frequency: occuranceCount / articleCount,
    month: months[info.month],
  };
};

const getData = async (year, query) => {
  const fetchInfo = [];
  for (let i = 0; i < 12; i++) {
    fetchInfo.push({
      year,
      month: i + 1,
      query,
    });
  }
  const values = await Promise.all([
    fetchMonth(fetchInfo[0]),
    fetchMonth(fetchInfo[2]),
    fetchMonth(fetchInfo[4]),
    fetchMonth(fetchInfo[6]),
    fetchMonth(fetchInfo[8]),
    fetchMonth(fetchInfo[10]),
  ]);
  console.log(values);
  return values;
};

module.exports = getData;
