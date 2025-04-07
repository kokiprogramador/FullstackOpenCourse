import { useState } from "react";

const Display = ({ good, neutral, bad, total, average, positive }) => {
  return (
    <table>
      <thead>
        <tr>
          <td scope="row">
            Good: <br /> {good}
          </td>
          <td scope="row">
            Neutral: <br /> {neutral}
          </td>
          <td scope="row">
            Bad: <br /> {bad}
          </td>
          <td scope="row">
            All: <br /> {total}
          </td>
          <td scope="row">
            Average: <br /> {average}
          </td>
          <td>
            Positive <br />
            {positive} %
          </td>
        </tr>
      </thead>
    </table>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = total / 3;
  const positive = (good + neutral * 100) / 100;
  return (
    <div>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <br />
      <br />
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
