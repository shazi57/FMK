import React, { useState, useEffect } from 'react';
import anime from 'animejs/lib/anime.es';
import { hot } from 'react-hot-loader';
import axios from 'axios';
import ReactLogo from '../assets/logoCand.svg';
import dataWindowPopin from '../animations/dataWindowPopIn';
import logoDisappearAnimation from '../animations/logoDisappearAnimation';
import logoAnimation from '../animations/logoAnimation';
import introFontAnimation from '../animations/introFontAnimation';
import searchBoxFade from '../animations/searchBoxFade';
import SongList from './SongList';
import Header from './Header';
import './App.css';

const App = () => {
  const [logoLoading, setIsLogoLoading] = useState(true);
  const [term, termBeingSearched] = useState('');
  const [isFirstTimeSearching, setFTS] = useState(true);
  const [confirmedTerm, confirmTerm] = useState('');

  useEffect(() => {
    if (confirmedTerm !== '') {
      axios.get('/search', {
        params: {
          confirmedTerm,
        },
      })
        .then((res) => {
          if (isFirstTimeSearching) {
            logoDisappearAnimation()
              .finished
              .then(() => {
                setFTS(false);
                dataWindowPopin();
              });
          }
          const { data } = res;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [confirmedTerm]);

  useEffect(() => {
    // loading animation
    if (logoLoading) {
      introFontAnimation()
        .finished
        .then(() => {
          setIsLogoLoading(false);
          searchBoxFade();
          logoAnimation();
        });
    }
    return () => {
      anime.remove('.ml7 .wrapper .searchBoxWrapper .inputSearch .logo');
    };
  }, [logoLoading]);

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

      {isFirstTimeSearching
        ? (
          <div className="logoWrapper">
            <ReactLogo className="logo" />
          </div>
        )
        : <SongList />}
    </div>
  );
};

export default hot(module)(App);
