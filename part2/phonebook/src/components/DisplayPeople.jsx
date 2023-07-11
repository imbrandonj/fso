// internal imports:
import personsService from '../services/persons.js';

export default function DisplayPeople({
  people,
  setPeople,
  filter,
  triggerNotification,
  setNotification,
}) {
  // axios delete request to db.json (local)
  // updates `people` object state array via `setPeople()`
  const handleDelete = person => {
    let confirmDelete = window.confirm(`Delete ${person.name}?`);
    if (confirmDelete) {
      personsService.destroy(person.id).then(() => {
        personsService.getAll().then(persons => {
          setPeople(persons);
        });

        setNotification({
          type: `success`,
          message: `${person.name} deleted.`,
        });
        triggerNotification(true);
        setTimeout(() => {
          triggerNotification(false);
        }, 5000);
      });
    }
  };

  console.log('people from display: ', people);

  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {people.map(person => {
          if (person.name.toLowerCase().includes(filter.toLowerCase())) {
            return (
              <li key={person.id}>
                {person.name} {person.number}{' '}
                <button onClick={() => handleDelete(person)}>delete</button>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}
