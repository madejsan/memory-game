import '../global.css';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Routes from '@routes/routes.loadable';
import { theme } from '@theme/theme';
import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);
