import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es';
import { hot } from 'react-hot-loader';
import introFontAnimation from '../animations/introFontAnimation';
import searchBoxFade from '../animations/searchBoxFade';

import Header from './Header';
import './App.css';

const App = () => {
  const [loading, setIsLoading] = useState(true);
  // const [term, termBeingSearched] = useState('');

  useEffect(() => {
    if (loading) {
      introFontAnimation()
        .finished
        .then(() => {
          setIsLoading(false);
        })
        .then(() => {
          searchBoxFade();
        });
    }

    return anime.remove('.ml7 .wrapper .searchBoxWrapper');
  }, [loading]);

  return (
    <div className="container">
      <Header isLoading={loading} />
    </div>
  );
};

export default hot(module)(App);
