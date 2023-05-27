/* eslint-disable react/prop-types */
// imported components:
import StatisticsLine from './StatisticsLine.jsx';

export default function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad; // total tally
  const average = (good - bad) / all; // good: 1, neutral: 0, bad: -1
  const positive = (good / all) * 100 + ' %';

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={positive} />
        </tbody>
      </table>
    </>
  );
}
