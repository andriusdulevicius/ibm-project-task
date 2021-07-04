import React from 'react';

const ignoreDataList = ['_id', 'createdAt', '__v'];
const getCleanData = (data) => {
  const cleanedData = data.map((d) => {
    const filtered = Object.entries(d).filter(([key, value]) => !ignoreDataList.includes(key));
    return Object.fromEntries(filtered);
  });

  const sortedData = cleanedData.sort((a, b) => b.count - a.count);
  return sortedData;
};

function Table({ data }) {
  const cleanData = getCleanData(data);

  return (
    <table className='table'>
      <thead>
        <tr>
          {Object.keys(cleanData[0]).map((key) => (
            <th>{key.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cleanData.map((entry) => (
          <tr>
            {Object.entries(entry).map(([key, value]) => (
              <td>{key === 'url' ? <a href={value}>{value}</a> : value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
