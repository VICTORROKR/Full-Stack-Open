const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ name, exercises }) => {
  return <p>{name} {exercises}</p>
}

// Ahora Content recibe los objetos completos (part1, part2, part3)
const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      {/* Accedemos a las propiedades .name y .exercises de cada objeto */}
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </div>
  )
}

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}

const App = () => {
  const course = 'Half Stack application development'

  // Las variables ahora son objetos
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />

      {/* Pasamos los objetos completos a Content */}
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      {/* Para Total, podemos seguir pasando solo los números accediendo a la propiedad .exercises */}
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>
  )
}

export default App