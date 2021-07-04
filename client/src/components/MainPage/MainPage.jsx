import React, { useState } from 'react';
import './MainPage.css';
import SearchBar from '../SearchBar/SearchBar';
import Articles from '../Articles/Articles';
import { getArticles } from '../../services/fetchData';

const MainPage = () => {
  const [articles, setArticles] = useState([]);

  const getAllArticles = async (searchingFor) => {
    const fetchedData = await getArticles(searchingFor);
    setArticles(fetchedData.articles);
  };
  return (
    <div className='MainPage'>
      <SearchBar getWantedArticles={getAllArticles} />
      <Articles articles={articles} />
    </div>
  );
};

export default MainPage;
