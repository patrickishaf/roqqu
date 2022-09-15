import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './navigation/router';
import { HomeStateProvider } from './contexts/HomeContext';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  margin: 0,
  padding: 0,
  typography: {
    fontFamily: 'Avenir',
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeStateProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </ThemeProvider>
    </HomeStateProvider>
  </React.StrictMode>
);
