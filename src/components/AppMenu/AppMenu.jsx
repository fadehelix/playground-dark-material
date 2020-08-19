import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/core';
import { AppMenuGroup } from '../index';

import Data from '../../data/data';

const StyledMenu = withStyles({
  paper: {
    backdropFilter: 'blur(2px)',
    background: 'rgba(0, 0, 0, .3)',
    borderRadius: '3px',
    border: '1px solid #707070',
    display: 'flex',
    padding: 0,
  },
  list: {
    padding: 0,
    paddingRight: 0,
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));

function AppMenu({ anchorElement }) {
  const [anchorEl, setAnchorEl] = useState(true);
  const [expandedGroup, setExpandedGroup] = useState('group-0');
  const [groups, setGroups] = useState(null);

  useEffect(() => {
    setGroups(Data.getAllData);
  }, []);

  const handleExpand = (panel) => (event, newExpanded) => {
    setExpandedGroup(newExpanded ? panel : false);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      {anchorElement(handleOpen)}
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {!!groups &&
          groups.map((group, index) => (
            <AppMenuGroup
              key={index}
              title={group.displayText}
              expandHandler={handleExpand}
              sectionId={`group-${index}`}
              expandedSectionId={expandedGroup}
              pages={group.nodes}
            />
          ))}
      </StyledMenu>
    </div>
  );
}

AppMenu.propTypes = {
  anchorElement: PropTypes.func,
};

export default AppMenu;
