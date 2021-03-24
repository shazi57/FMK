import React from 'react';
import './Header.css';

const Header = () => (
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
    <span className="line" />
  </div>
);

export default Header;
