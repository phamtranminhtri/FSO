const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} exercise={props.exercises[0]} />
      <Part part={props.parts[1]} exercise={props.exercises[1]} />
      <Part part={props.parts[2]} exercise={props.exercises[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises: {props.num_exercises}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part}: {props.exercise}
      </p>
    </div>
  )
}

const App = () => {
  const course = "Half stack app development"
  const part1 = "Fundamental of React"
  const exercise1 = 10
  const part2 = "Using props to pass data"
  const exercise2 = 7
  const part3 = "State of a component"
  const exercise3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} exercises={[exercise1, exercise2, exercise3]} />
      <Total num_exercises={exercise1 + exercise2 + exercise3} />
    </div>
  )
}

export default App