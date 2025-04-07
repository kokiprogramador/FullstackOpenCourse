import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Good {good}</th>
            <th>Neutral {neutral}</th>
            <th>Bad {bad}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
