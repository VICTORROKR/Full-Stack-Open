import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  // Inicializa un array con la misma longitud que 'anecdotes' y lo llena de ceros: [0, 0, 0, 0, 0, 0, 0, 0]
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    // 1. Hacemos una copia superficial (shallow copy) del array de votos actual
    const newVotes = [...votes]

    // 2. Incrementamos en 1 el valor en la posición de la anécdota seleccionada
    newVotes[selected] += 1

    // 3. Pasamos el nuevo array a la función que actualiza el estado
    setVotes(newVotes)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>

      {/* Mostramos los votos correspondientes al índice actual */}
      <p>has {votes[selected]} votes</p>

      {/* Botón para votar */}
      <button onClick={handleVote}>vote</button>

      {/* Botón para cambiar de anécdota */}
      <button onClick={handleNextAnecdote}>next anecdote</button>
    </div>
  )
}

export default App