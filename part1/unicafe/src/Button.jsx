/* eslint-disable react/prop-types */
export default function Button({ text, handleClick }) {
  return <button onClick={handleClick}>{text}</button>;
}
