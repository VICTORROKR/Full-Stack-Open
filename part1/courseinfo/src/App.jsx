// Ahora Header recibe el objeto 'course' completo, así que debemos acceder a 'course.name'
const Header = ({ course }) => {
  return <h1>{course.name}</h1>
}

const Part = ({ name, exercises }) => {
  return <p>{name} {exercises}</p>
}

// Content sigue recibiendo el array 'parts' y accediendo por índices
const Content = ({ parts }) => {
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

// Total sigue recibiendo el array 'parts' para sumar los ejercicios
const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  )
}

const App = () => {
  // Todo agrupado en un solo objeto 'course'
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      {/* Pasamos el objeto course completo al Header */}
      <Header course={course} />

      {/* Pasamos el array que vive dentro del objeto course a Content y Total */}
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App