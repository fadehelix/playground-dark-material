import React from 'react';
import PropTypes from 'prop-types';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import { AppMenuButton } from 'components';

Group.propTypes = {
  sectionId: PropTypes.string,
  expanded: PropTypes.string,
  expandHandler: PropTypes.func,
  title: PropTypes.string,
};

function Group({ expandHandler, sectionId, expandedSectionId, title, pages }) {
  return (
    <Accordion
      square
      expanded={expandedSectionId === sectionId}
      onChange={expandHandler(sectionId)}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {!!pages &&
          pages.map((page) => (
            <AppMenuButton value={page.displayText}></AppMenuButton>
          ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default Group;
