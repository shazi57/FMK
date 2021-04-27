import React from 'react';
import './Header.css';
import SearchForm from './SearchForm';

const Header = (props) => {
  const {
    isLoading, term, onTermChange, confirmSearch,
  } = props;

  return (
    <div className="ml7">
      <span className="text-wrapper">
        {('Visualize Your Music Stats').split('').map((letter) => {
          if (letter === ' ') {
            return (<span className="whiteSpace" />);
          }
          return (
            <span className="letter">
              {letter}
            </span>
          );
        })}
      </span>
      <div className="searchBoxWrapper">
        {(isLoading ? null
          : (
            <SearchForm
              term={term}
              onTermChange={onTermChange}
              confirmSearch={confirmSearch}
            />
          ))}
      </div>
    </div>
  );
};

export default Header;
