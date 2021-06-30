import React, { Component } from 'react';

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <header className='navbar navbar-dark bg-dark'>
        <a className='navbar-brand' href='/'>
          IBM articles task
        </a>
        <form className='form-inline'>
          <button className='btn btn-success my-2 my-sm-0 mr-2'>Popular articles</button>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search for articles...'
            aria-label='Search'
          />
          <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
            Search
          </button>
        </form>
      </header>
    );
  }
}

export default SearchBar;
