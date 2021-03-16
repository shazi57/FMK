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
      })
      .finished.then(() => {
        anime({
          targets: '.svg-line',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 1500,
          delay(el, i) { return i * 250; },
          direction: 'alternate',
          loop: true,
        });
      });
  });

  return (
    <div className="container">
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
    </div>
  );
};

export default hot(module)(App);
