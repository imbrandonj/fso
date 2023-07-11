// external imports:
import { useState } from 'react';

// internal imports:
import personsService from '../services/persons.js';

export default function PersonForm({
  people, // array of person objects
  setPeople,
  setPerson, // person to be added, edited, or displayed in <Notification />
  triggerNotification, // triggered when person added or deleted
  setNotification, // what the notification should be
}) {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNewName = event => {
    setNewName(event.target.value);
  };

  const handleNewNumber = event => {
    setNewNumber(event.target.value);
  };

  const addPerson = event => {
    event.preventDefault();

    console.log('addPerson submit form');

    // personObj contains newName & newNumber state
    let personObj = {
      name: newName,
      number: newNumber,
    };

    // search for existing person in phonebook
    let personFound = people.find(person => person.name === newName);
    if (personFound) {
      let replace = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );

      // replace person in phonebook and update `people` state
      if (replace) {
        personsService
          .update(personFound.id, personObj)
          .then(() => {
            personsService.getAll().then(persons => {
              setPeople(persons);
            });
          })
          .catch(() => {
            // display and trigger an error notification
            setNotification({
              type: `error`,
              message: `Information of ${personObj.name} has already been removed from server`,
            });
            triggerNotification(true);
            setTimeout(() => {
              triggerNotification(false);
            }, 5000);
          });

        // update `person` state
        setPerson({ name: newName, number: newNumber }); // this does not get updated until after function runs

        // reset input value
        setNewName('');
        setNewNumber('');
      }

      // person does not exist in phonebook, create data for new person:
    } else {
      personsService.create(personObj).then(returnedPerson => {
        setPeople(people.concat(returnedPerson)); // update `people` state
      });

      // display and trigger an added person notification
      setNotification({
        type: `success`,
        message: `${personObj.name} has been added`,
      });
      triggerNotification(true);
      setTimeout(() => {
        triggerNotification(false);
      }, 5000);

      // update `person` state
      setPerson({ name: newName, number: newNumber }); // this does not get updated until after function runs

      // reset input value
      setNewName('');
      setNewNumber('');
    }
  };

  return (
    <div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}
