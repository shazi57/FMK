import React from 'react';
import './SearchForm.css';
import './Header.css';

const SearchForm = (props) => {
  return (
    <form className="formSearch">
      <input className="inputSearch" type="text" placeholder="search your favorite music here" />
    </form>
  );
};

export default SearchForm;
