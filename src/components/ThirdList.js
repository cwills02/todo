import React from 'react';

import classes from './ThirdList.module.css';
import Auxillary from './Auxillary';

const thirdList = (props) => {
  return (
    <Auxillary>
      <h2 className={classes.ThirdList}>
        Third List
      </h2>
      <button onClick={props.onClick}>Add other items</button>
      <input className={classes.TextBox}
      type="text" 
      value={props.otherInput} 
      onChange={props.onChange}
      />
      {props.otherTask}
      </Auxillary>
  );
};

export default thirdList;