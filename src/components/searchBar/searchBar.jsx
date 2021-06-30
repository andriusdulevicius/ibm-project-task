import React, { Component } from 'react';

class SearchBar extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getWantedArticles(e.target.searchInput.value);
  };

  render() {
    return (
      <header className='navbar navbar-dark bg-dark'>
        <a className='navbar-brand' href='/'>
          IBM articles search
        </a>
        <form onSubmit={this.handleSubmit} className='form-inline'>
          <input
            className='form-control mr-sm-2'
            type='search'
            name='searchInput'
            placeholder='Search for articles...'
            aria-label='Search'
          />
          <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
            Search
          </button>
          <button className='btn btn-success my-2 my-sm-0 ml-2'>Most popular articles</button>
        </form>
      </header>
    );
  }
}

export default SearchBar;
