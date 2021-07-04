import React, { useState, useEffect } from 'react';
import Table from '../Table/Table';
import { getAllLogData } from '../../services/fetchData';
import { Link } from 'react-router-dom';
import './Stats.css';

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
        <button
          className={(activeTable === 'searches' ? 'active' : '') + ' btn btn-primary m-3'}
          onClick={() => setActiveTable('searches')}
        >
          Searched words statistics on this app
        </button>
        <button
          className={(activeTable === 'articles' ? 'active' : '') + ' btn btn-primary m-3'}
          onClick={() => setActiveTable('articles')}
        >
          Visited articles statistics
        </button>
      </div>
      {data && <Table data={activeTable === 'searches' ? data.searches : data.articles} />}
      <Link to='/' className='btn btn-success float-right mr-2'>
        Go back
      </Link>
    </div>
  );
};

export default Stats;
