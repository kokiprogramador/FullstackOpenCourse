import Header from './Header.jsx';
import Total from './Total.jsx'
import Content from './Content.jsx'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const hello = "hello, how are you?"
  const ExercisesTotal = exercises1 + exercises2 + exercises3;

  return (
    <div>
        {/*1.1 Starts*/}
        <Header course={course}/>
        <Content part={part1} content={exercises1}/>
        <Header course={course}/>
        <Content part={part1} content={exercises2}/>
        <Header course={course}/>
        <Content part={part1} content={exercises3}/>
        <br/>
        <Total total={ExercisesTotal}/>
    </div>
    )
}

export default App