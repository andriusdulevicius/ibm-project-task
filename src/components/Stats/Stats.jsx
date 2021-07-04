import React, { useState, useEffect } from 'react';
import Table from '../Table/Table';
import { getAllLogData } from '../../services/fetchData';

const Stats = () => {
  const [data, setData] = useState(undefined);
  const [activeTable, setActiveTable] = useState('searches');

  useEffect(() => {
    (async () => {
      try {
        const result = await getAllLogData();
        setData(result);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className='stats'>
      <div className='controls'>
        <button className={activeTable === 'searches' ? 'active' : ''} onClick={() => setActiveTable('searches')}>
          Search Stats
        </button>
        <button className={activeTable === 'articles' ? 'active' : ''} onClick={() => setActiveTable('articles')}>
          Articles States
        </button>
      </div>
      {data && <Table data={activeTable === 'searches' ? data.searches : data.articles} />}
    </div>
  );
};

export default Stats;
