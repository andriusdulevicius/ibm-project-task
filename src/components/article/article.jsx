import React, { Component } from 'react';

class Article extends Component {
  render() {
    const { publishedAt, title, description, image, url } = this.props.article;
    return (
      <div className='col-12 col-sm-6 col-lg-4 w-80 card one-article'>
        <img src={image} className='card-img-top pt-3' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <h6 className='card-text'>{publishedAt}</h6>
          <p className='card-text'>{description.split(' ').splice(0, 12).join(' ') + '...'}</p>
          <a href={url} target='_blank' rel='noreferrer' className='btn btn-primary'>
            Read original article
          </a>
        </div>
      </div>
    );
  }
}

export default Article;
