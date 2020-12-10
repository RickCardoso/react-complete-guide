import React from 'react';

export const Cockpit = ({ togglePeople }) => {
  return (
    <div className="cockpit-wrapper">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={() => togglePeople()}>Toggle</button>
    </div>
  )
}