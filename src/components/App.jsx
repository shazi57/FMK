import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import anime from 'animejs/lib/anime.es';
import './App.css';

const App = () => {
  const [loading, setLoadingStatus] = useState(true);

  useEffect(() => {
    anime.timeline({ loop: false })
      .add({
        targets: '.ml7 .letter',
        translateY: ['1.1em', 0],
        translateX: ['0.55em', 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: 'easeOutExpo',
        delay: (el, i) => 50 * i,
      });
  });

  return (
    <div className="container">
      <h1 className="ml7">
        <span className="text-wrapper">
          {('Music Stats').split('').map((letter) => {
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
      </h1>
    </div>
  );
};

export default hot(module)(App);
