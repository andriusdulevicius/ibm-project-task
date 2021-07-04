import React from 'react';
import { logArticle } from '../../services/fetchData';

const Article = (props) => {
  const { publishedAt, title, description, image, url } = props.article;

  const handleOnClick = () => {
    logArticle({ title, url });
  };

  return (
    <div className='col-12 col-sm-6 col-lg-4 w-80 card one-article'>
      <img src={image} className='card-img-top ' alt={title} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <h6 className='card-text'>{publishedAt}</h6>
        <p className='card-text'>{description.split(' ').splice(0, 12).join(' ') + '...'}</p>
        <a href={url} target='_blank' rel='noreferrer' className='btn btn-primary' onClick={handleOnClick}>
          Read original article
        </a>
      </div>
    </div>
  );
};

export default Article;
