import React from 'react';
import Article from '../Article/Article';
import './Articles.css';

const Articles = ({ articles }) => {
  return (
    <div className='container'>
      <h3 className='mt-4 articles-h2'>Please type in a word or a phrase of articles you are looking for..</h3>
      <div className='container mt-5'>
        <div className='row '>
          {articles && articles.map((article, index) => <Article article={article} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default Articles;
