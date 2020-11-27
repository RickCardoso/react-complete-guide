import { props } from 'bluebird';
import React from 'react';

const userOutput = (props) => {
  return (
    <div>
      <p>{props.username}</p>
      <p>another</p>
    </div>
  );
}

export default userOutput;