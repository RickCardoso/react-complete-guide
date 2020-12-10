import React from 'react';

export const Cockpit = ({ title, togglePeople }) => {
  return (
    <div className="cockpit-wrapper">
      <h1>{title}</h1>
      <p>This is really working!</p>
      <button onClick={() => togglePeople()}>Toggle</button>
    </div>
  )
}