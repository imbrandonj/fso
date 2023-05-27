// imported hooks:
import { useState } from 'react';

export default function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  // state:
  const [selected, setSelected] = useState(random(anecdotes.length));
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  // event handler functions:
  const nextAnec = () => setSelected(random(anecdotes.length)); // random anecdote selection
  const vote = index => {
    // vote event increments `points` state
    const copy = [...points];
    copy[index] += 1;
    setPoints(copy);
  };

  // tally of the anecdote with the most votes
  let mostVotes = 0;
  let popularAnec; // anecdote string with the most votes
  for (let i = 0; i < points.length; i++) {
    // iterate thru `points` state (vote history)
    if (points[i] > mostVotes) {
      mostVotes = points[i];
      popularAnec = anecdotes[i];
    }
  }

  // return component
  if (mostVotes === 0) {
    // no votes yet
    return (
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <br />
        has {points[selected]} votes
        <br />
        <button onClick={() => vote(selected)}>vote</button>
        <button onClick={nextAnec}>next anecdote</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {points[selected]} votes
      <br />
      <button onClick={() => vote(selected)}>vote</button>
      <button onClick={nextAnec}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      {popularAnec}
      <br />
      has {mostVotes} votes
    </div>
  );
}

// random number generator utility function
function random(max) {
  return Math.floor(Math.random() * max);
}
