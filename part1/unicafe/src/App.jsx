import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StadisticksLine = ({ text, value }) => {
  return (
    <td scope="row">
      {text}: <br /> {value}
    </td>
  );
};

const Display = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <StadisticksLine text="Good" value={good} />
            <StadisticksLine text="Neutral" value={neutral} />
            <StadisticksLine text="Bad" value={bad} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">
              All: <br /> {total}
            </td>
            <td scope="row">
              Average: <br /> {average.toFixed(2)}
            </td>
            <td>
              Positive <br />
              {positive.toFixed(2)} %
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = total > 0 ? (good - bad) / total : 0;
  const positive = total > 0 ? (good * 100) / total : 0;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <br />
      <br />
      <h2>Statistics</h2>
      <Display
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
}

export default App;
