import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar/searchBar';
import Articles from './components/articles/articles';
import getArticles from './services/fetchData';
// import dummyArt from './dummyData.json';

const App = () => {
  const [articles, setArticles] = useState([]);

  const getAllArticles = async (searchingFor) => {
    const fetchedData = await getArticles(searchingFor);
    console.log(fetchedData);
    // const fetchedArt = dummyArt;
    setArticles(fetchedData.articles);
  };
  return (
    <div className='App'>
      <SearchBar getWantedArticles={getAllArticles} />
      <Articles articles={articles} />
    </div>
  );
};

export default App;
