// imported components:
import Statistics from './Statistics.jsx';
import Button from './Button.jsx';

// imported hooks:
import { useState } from 'react';

export default function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickGood = () => setGood(good + 1);
  const clickNeutral = () => setNeutral(neutral + 1);
  const clickBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={clickGood} />
      <Button text="neutral" handleClick={clickNeutral} />
      <Button text="bad" handleClick={clickBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}
