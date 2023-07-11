export default function Notification({ type, message }) {
  const success = {
    color: 'green',
    backgroundColor: 'lightGrey',
    border: '3px solid green',
    padding: '0.5rem',
    margin: '1rem 0',
    fontSize: '1.8rem',
  };

  const error = {
    color: 'red',
    backgroundColor: `lightGrey`,
    border: '3px solid red',
    padding: '0.5rem',
    margin: '1rem 0',
    fontSize: '1.8rem',
  };

  // display `success` style or `error` style depending on `type` prop value
  let style = type === 'success' ? success : error;

  return <div style={style}>{message}</div>;
}
