import React, { useContext } from 'react';

import { AuthContext } from 'store/auth';

export const Cockpit = ({ title, togglePeople, authenticate }) => {
  const authContext = useContext(AuthContext);

  return (
    <div className="cockpit-wrapper">
      <h1>{title + (authContext.isAuthenticated ? ' ✅' : ' ❌')}</h1>
      <p>This is really working!</p>
      <button onClick={() => togglePeople()}>Toggle</button>
      <button onClick={() => authenticate()}>Authenticate</button>
    </div>
  )
}