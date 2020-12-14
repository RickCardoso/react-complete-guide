import React, { useEffect } from 'react';

import { Person } from 'components/Person';

export const PersonList = ({ people, changeName, deletePerson, isAuthenticated }) => {
  useEffect(() => {
    console.log('[PersonList.jsx] use effect');
    const timer = setTimeout(() => alert('Executed!'), 1000);
    return () => {
      clearTimeout(timer);
      console.log('[PersonList.jsx] clean up work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[PersonList.jsx] 2nd use effect');
    return () => {
      console.log('[PersonList.jsx] clean up work in 2nd useEffect');
    }
  });

  const peopleComponents = people.map((person, index) => {
    let hobbies = '';
    if (!!person.hobbies) hobbies = `My hobbies are: ${person.hobbies}!`;
    return (
      <Person
        click={() => deletePerson(index)}
        change={(event) => changeName(event, person.id)}
        name={person.name}
        age={person.age}
        key={person.id}
        isAuthenticated={isAuthenticated}>
        {hobbies}
      </Person>
    );
  })

  return peopleComponents;
}