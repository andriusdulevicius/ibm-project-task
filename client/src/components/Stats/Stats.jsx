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
    <div className='stats d-flex'>
      <div className='controls d-flex'>
        <button
          className={(activeTable === 'searches' ? 'active' : '') + ' btn btn-primary m-3'}
          onClick={() => setActiveTable('searches')}
        >
          Searched words
        </button>
        <button
          className={(activeTable === 'articles' ? 'active' : '') + ' btn btn-primary m-3'}
          onClick={() => setActiveTable('articles')}
        >
          Visited articles
        </button>
        <Link to='/' className='btn btn-success m-3'>
          Go back
        </Link>
      </div>
      {data && <Table data={activeTable === 'searches' ? data.searches : data.articles} />}
    </div>
  );
};

export default Stats;
