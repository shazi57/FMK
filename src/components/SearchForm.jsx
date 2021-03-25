import React from 'react';
import './SearchForm.css';
import './Header.css';

const SearchForm = (props) => {
  return (
    <form>
      <input type="text" size="50px" placeholder="search your favorite music here" />
    </form>
  );
};

export default SearchForm;
