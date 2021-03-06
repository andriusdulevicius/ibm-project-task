import React, { useState } from 'react';
import { logSearch } from '../../services/fetchData';
import { Link } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = ({ getWantedArticles }) => {
  const [inputError, setInputError] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.target.searchInput.value = '';
    e.preventDefault();
    if (inputValue.trim().length === 0) setInputError('empty');
    else {
      getWantedArticles(inputValue);
      logSearch({ title: inputValue });
    }
  };

  const validateInput = (value) => {
    if (inputError !== '') setInputError('');
    if (!/^[a-zA-Z0-9 ]+$/.test(value) && value !== '') setInputError('invalid');
    if (value.length >= 40) setInputError('tooLong');
  };

  return (
    <header className='navbar-style'>
      <div className='container search-bar'>
        <a className='navbar-title' href='/'>
          <strong>IBM</strong> articles <strong>search</strong>
        </a>
        <form onSubmit={handleSubmit} className='main-form'>
          <div className='input-block mr-2 mb-2'>
            {inputError !== '' && (
              <span className='error-msg'>
                {inputError === 'empty'
                  ? `Search can not be empty..`
                  : inputError === 'tooLong'
                  ? `Your text is too long..`
                  : `Please do not use special chars..`}
              </span>
            )}
            <input
              onChange={(e) => {
                setInputValue(e.target.value);
                validateInput(e.target.value);
              }}
              className={`form-control input-field mr-sm-2 ${inputError !== '' ? 'error' : ''}`}
              type='search'
              name='searchInput'
              placeholder='Search for articles...'
              aria-label='Search'
            />
          </div>
          <div>
            <button className='btn btn-primary  ' type='submit'>
              Search
            </button>
            <Link to='/stats' className='btn btn-outline-primary  ml-2'>
              Search history statistics
            </Link>
          </div>
        </form>
      </div>
    </header>
  );
};
export default SearchBar;
