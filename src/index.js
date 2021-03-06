import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
