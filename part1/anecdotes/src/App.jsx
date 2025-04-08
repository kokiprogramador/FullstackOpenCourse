import { useState } from "react";

const MostVotes = ({ mostVotedAnecdote, votes }) => {
  return (
    <div>
      <h1>The anecdote with most votes</h1>
      {mostVotedAnecdote}
      <br />
      <p>has {votes} votes</p>
    </div>
  );
};

const App = () => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * anecdotes.length);
  };

  const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
  };

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  const handleVotes = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };

  const maxVotes = Math.max(...vote);
  const mostVotedIndex = vote.indexOf(maxVotes);
  const mostVotedAnecdote = anecdotes[mostVotedIndex];

  return (
    <div>
      <div>{anecdotes[selected]}</div>{" "}
      <Button
        onClick={() => setSelected(getRandomNumber())}
        text="next anecdote"
      />
      <div>
        <br />
        has {vote[selected]} votes
        <br />
        <br />
        <Button onClick={handleVotes} text="vote" />
      </div>
      {maxVotes > 0 && (
        <MostVotes mostVotedAnecdote={mostVotedAnecdote} votes={maxVotes} />
      )}
    </div>
  );
};

export default App;
