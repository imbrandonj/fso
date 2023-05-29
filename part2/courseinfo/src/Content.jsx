/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

/* 
  Content component displays course parts
  `parts` is an array of objects containing `name` and `exercises` properties
*/
export default function Content({ parts }) {
  return (
    <div>
      {parts.map(part => (
        <p key={part.id}>
          {part.name}: {part.exercises}
        </p>
      ))}
      <p>
        <b>
          total of {parts.reduce((sum, part) => sum + part.exercises, 0)}{' '}
          exercises
        </b>{' '}
      </p>
    </div>
  );
}
