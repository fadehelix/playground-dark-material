import React from 'react';
import { IconButton } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import style from './App.module.scss';

function App() {
  const handleAppMenuBtnClick = (event) => {
    //do nothig for now
  };

  return (
    <div className={style.App}>
      <header className={style.header}>
        <nav>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleAppMenuBtnClick}
          >
            <AppsIcon />
          </IconButton>
        </nav>
      </header>
      <main></main>
    </div>
  );
}

export default App;
