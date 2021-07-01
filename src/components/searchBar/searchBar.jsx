import React, { useState } from 'react';

const SearchBar = ({ getWantedArticles }) => {
  const [inputError, setInputError] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) setInputError('empty');
    else getWantedArticles(inputValue);
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
          IBM articles search
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
              className={`form-control mr-sm-2 ${inputError !== '' ? 'error' : ''}`}
              type='search'
              name='searchInput'
              placeholder='Search for articles...'
              aria-label='Search'
            />
          </div>
          <div>
            <button className='btn btn-outline-primary  ' type='submit'>
              Search
            </button>
            <button className='btn btn-primary  ml-2'>Most popular articles</button>
          </div>
        </form>
      </div>
    </header>
  );
};
export default SearchBar;
