import Header from "./Header.jsx";
import Total from "./Total.jsx";

const parts = [
  {
    name: "Fundamentals of React",
    exercises: 10,
  },
  {
    name: "Using props to pass data",
    exercises: 7,
  },
  {
    name: "State of a component",
    exercises: 14,
  },
];

const Parts = (props) => {
  <p>
    {props.part} {props.content}
  </p>;
};

const Content = (props) => {
  return (
    <div>
      <Parts part={part1} content={exercises1} />
      <Parts part={part2} content={exercises2} />
      <Parts part={part3} content={exercises3} />
    </div>
  );
};

const App = () => {
  const hello = "hello, how are you?";
  const ExercisesTotal = exercises1 + exercises2 + exercises3;
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
