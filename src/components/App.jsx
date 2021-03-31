import React, { useState, useEffect } from 'react';
import anime from 'animejs/lib/anime.es';
import { hot } from 'react-hot-loader';
import introFontAnimation from '../animations/introFontAnimation';
import searchBoxFade from '../animations/searchBoxFade';

import Header from './Header';
import './App.css';

const App = () => {
  const [logoLoading, setIsLogoLoading] = useState(true);
  const [searchBoxLoading, setIsSbLoading] = useState(true);
  // const [term, termBeingSearched] = useState('');

  useEffect(() => {
    if (logoLoading) {
      introFontAnimation()
        .finished
        .then(() => {
          setIsLogoLoading(false);
        })
        .then(() => {
          searchBoxFade();
        })
        .then(() => {
          setIsSbLoading(false);
        });
    }
    return () => {
      anime.remove('.ml7 .wrapper .searchBoxWrapper .inputSearch');
    };
  }, [logoLoading, searchBoxLoading]);

  return (
    <div className="container">
      <Header isLoading={logoLoading} />
    </div>
  );
};

export default hot(module)(App);
