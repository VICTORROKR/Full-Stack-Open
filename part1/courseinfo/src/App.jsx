const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ name, exercises }) => {
  return <p>{name} {exercises}</p>
}

// Content ahora recibe el array "parts"
const Content = ({ parts }) => {
  return (
    <div>
      {/* Accedemos a cada objeto del array mediante su índice */}
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

// Total también recibe el array "parts"
const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  // Los objetos ahora están agrupados en un array
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />

      {/* Pasamos el array completo como un solo prop a Content y Total */}
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App