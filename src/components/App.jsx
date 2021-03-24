import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import introFontAnimation from '../animations/introFontAnimation';
import Header from './Header';
import './App.css';

const App = () => {
  const [loading, setLoadingStatus] = useState(true);

  useEffect(() => {
    introFontAnimation();
  });

  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default hot(module)(App);
