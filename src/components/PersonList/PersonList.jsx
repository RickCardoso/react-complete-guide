import React from 'react';

import { Person } from 'components/Person';

export const PersonList = ({ people, changeName, deletePerson }) => {
  const peopleComponents = people.map((person, index) => {
    let hobbies = '';
    if (!!person.hobbies) hobbies = `My hobbies are: ${person.hobbies}!`;
    return (
      <Person
        click={() => deletePerson(index)}
        change={(event) => changeName(event, person.id)}
        name={person.name}
        age={person.age}
        key={person.id}>
        {hobbies}
      </Person>
    );
  })

  return peopleComponents;
}