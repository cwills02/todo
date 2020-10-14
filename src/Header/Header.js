import React from 'react';
import classes from './Header.module.css';
import Auxillary from '../components/Auxillary';

const header = (props) => {
  return (
    <Auxillary>
      <h1 className={classes.Header}>To Do List</h1>
    </Auxillary>
  );
};

export default header;