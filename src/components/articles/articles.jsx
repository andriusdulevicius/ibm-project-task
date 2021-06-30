import React, { Component } from 'react';
import Article from '../article/article';

class Articles extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2 className='mt-3 articles-h2'>Please take a look at our articles collection</h2>
        <div className='container mt-5'>
          <div className='row justify-content-between'>
            {this.props.articles.map((a) => (
              <Article article={a} key={a.title.slice(5)} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
