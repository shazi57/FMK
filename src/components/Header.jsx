import React from 'react';
import './Header.css';
import SearchForm from './SearchForm';

const Header = (props) => {
  const { isLoading } = props;

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
        {(isLoading ? null : <SearchForm />)}
      </div>
    </div>
  );
};

export default Header;
