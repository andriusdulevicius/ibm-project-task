import React from 'react';
import './Table.css';

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
    <table className='table stats-table'>
      <thead>
        <tr>
          {Object.keys(cleanData[0]).map((key) => (
            <th key={key}>{key === 'updatedAt' ? 'LAST UPDATED' : key.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cleanData.map((entry) => (
          <tr key={entry.updatedAt}>
            {Object.entries(entry).map(([key, value]) => (
              <td key={key}>
                {key === 'url' ? (
                  <a href={value} target='_blank' rel='noreferrer'>
                    Go to original article
                  </a>
                ) : key === 'updatedAt' ? (
                  new Date(value).toLocaleString('en-GB', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                ) : (
                  value
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
