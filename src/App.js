import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import style from './App.module.scss';

import { AppMenu } from './components';

function App() {
  // const [el, setEl] = useState(null);

  // const handleAppMenuBtnClick = (event) => {
  //   setEl(event.currentTarget);
  // };

  return (
    <div className={style.App}>
      <header className={style.header}>
        <nav>
          <AppMenu
            anchorElement={(handleAppMenuBtnClick) => (
              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleAppMenuBtnClick}
              >
                <AppsIcon />
              </IconButton>
            )}
          />
        </nav>
      </header>
      <main></main>
    </div>
  );
}

export default App;
