import React from 'react';

import './SearchForm.css';
import './Header.css';

const SearchForm = (props) => {
  const { term, onTermChange, confirmSearch } = props;

  return (
    <form className="formSearch" onSubmit={confirmSearch}>
      <input
        onChange={onTermChange}
        defaultValue={term}
        className="inputSearch"
        type="text"
        placeholder="search your favorite music here and press enter"
      />
    </form>
  );
};

export default SearchForm;
