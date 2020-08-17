import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
  palette: {
    type: 'dark',
    navButtonColor: {
      color: '#ff0000',
    },
  },
});

const AppTheme = ({ children }) => {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default AppTheme;
