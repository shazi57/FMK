import React, { useState, useEffect } from 'react';
import anime from 'animejs/lib/anime.es';
import { hot } from 'react-hot-loader';
import axios from 'axios';
import ReactLogo from '../assets/logoCand.svg';
import logoAnimation from '../animations/logoAnimation';
import introFontAnimation from '../animations/introFontAnimation';
import searchBoxFade from '../animations/searchBoxFade';
import Header from './Header';
import './App.css';

const App = () => {
  const [logoLoading, setIsLogoLoading] = useState(true);
  const [searchBoxLoading, setIsSbLoading] = useState(true);
  const [term, termBeingSearched] = useState('');
  const [confirmedTerm, confirmTerm] = useState('');

  useEffect(() => {
    if (confirmedTerm !== '') {
      axios.get('/search', {
        params: {
          confirmedTerm,
        },
      })
        .then((res) => {
          const { data } = res;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [confirmedTerm]);

  useEffect(() => {
    // devmode
    // setIsLogoLoading(false);
    // setIsSbLoading(false);
    // searchBoxFade();

    // loading animation
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
          logoAnimation();
          setIsSbLoading(false);
        });
    }
    return () => {
      anime.remove('.ml7 .wrapper .searchBoxWrapper .inputSearch .logo');
    };
  }, [logoLoading, searchBoxLoading]);

  const handleSearch = (e) => {
    termBeingSearched(e.target.value);
  };

  const confirmSearch = (e) => {
    confirmTerm(term);
    e.preventDefault();
  };

  return (
    <div className="container">
      <Header
        isLoading={logoLoading}
        term={term}
        confirmSearch={confirmSearch}
        onTermChange={handleSearch}
      />
      <div className="logoWrapper">
        <ReactLogo className="logo" />
      </div>
    </div>
  );
};

export default hot(module)(App);
