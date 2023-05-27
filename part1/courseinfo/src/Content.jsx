/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

/* 
  Content component displays course parts
  `parts` is an array of objects containing `name` and `exercises` properties
*/
export default function Content({ parts }) {
  return (
    <div>
      {parts.map((part) => (
        <li key={part.name}>
          {part.name}: {part.exercises}
        </li>
      ))}
    </div>
  );
}
