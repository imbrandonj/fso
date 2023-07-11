// imported components:
import PersonForm from './components/PersonForm.jsx';
import FilterName from './components/FilterName.jsx';
import DisplayPeople from './components/DisplayPeople.jsx';
import Notification from './components/Notification.jsx';

// imported modules:
import personsService from './services/persons.js';

// external imports:
import { useState, useEffect } from 'react';

export default function App() {
  const [people, setPeople] = useState([]); // phonebook array of people objects
  const [person, setPerson] = useState({ name: '', number: '' }); // person being edited, added, or displayed in <Notification />
  const [filterName, setFilterName] = useState('');
  const [triggerNotification, setTriggerNotification] = useState(false); // toggle if <Notification /> should be displayed
  const [notification, setNotification] = useState({ type: '', message: '' }); // to be passed to <Notification />

  console.log('people from app: ', people);
  console.log('person from app: ', person);

  useEffect(() => {
    personsService.getAll().then(persons => {
      setPeople(persons);
    });
  }, []);

  return (
    <>
      <h1>Phonebook</h1>
      {triggerNotification ? (
        <Notification type={notification.type} message={notification.message} />
      ) : null}
      <FilterName filter={filterName} setFilter={setFilterName} />
      <PersonForm
        people={people}
        setPeople={setPeople}
        setPerson={setPerson} // person being edited, added, or displayed in <Notification />
        triggerNotification={setTriggerNotification} // trigger notication event
        setNotification={setNotification} // set what the notification should be
      />
      <DisplayPeople
        people={people}
        setPeople={setPeople}
        filter={filterName}
        triggerNotification={setTriggerNotification} // trigger notication event
        setNotification={setNotification} // set what the notification should be
      />
    </>
  );
}
