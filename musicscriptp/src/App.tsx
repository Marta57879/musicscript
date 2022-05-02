import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/homepage/Nav';
import HeadSection from './components/homepage/HeadSection';
import { ThemeProvider } from 'theme-ui'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Nav />
      <HeadSection />
    </div>
    </ThemeProvider>
  );
}

export default App;
