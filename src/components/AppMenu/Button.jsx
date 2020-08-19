import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-start',
    padding: '15px',
    opacity: '.5',
    fontWeight: 'bold',
    width: '100px',
  },
  customRoot: {
    '&:hover': {
      background: 'rgba(230, 230, 230, .04)',
      opacity: 1,
    },
    '&:focus': {
      background: 'rgba(230, 230, 230, .04)',
      opacity: 1,
    },
  },
}));

Button.propTypes = {
  value: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['outlined', 'contained']),
};
Button.defaultProps = {
  variant: 'contained',
};

function Button({ value, variant }) {
  const classes = useStyles();
  return (
    <ButtonBase
      classes={{
        root: classes.root,
      }}
      className={classes.customRoot}
    >
      <div
        style={{
          alignItems: 'center',
          background:
            'linear-gradient(90deg, #b224ef 0.16%, #a830f1 13.44%, #8364fb 71.33%, #7579ff 99.68%)',
          borderRadius: '3px',
          display: 'flex',
          fontWeight: '18px',
          height: '36px',
          justifyContent: 'center',
          marginBottom: '5px',
          textTransform: 'uppercase',
          width: '36px',
        }}
      >
        {value.slice(0, 2)}
      </div>
      {value}
    </ButtonBase>
  );
}

export default Button;
