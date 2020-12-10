import React from 'react';

export const Person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years youngs!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};