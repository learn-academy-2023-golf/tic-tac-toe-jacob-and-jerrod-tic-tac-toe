import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (index) => {
    if (squares[index]) {
      return
    }
  
    const newSquares = [...squares]
  
    newSquares[index] = xIsNext ? 'X' : 'O'
    setSquares(newSquares)
    setXIsNext(!xIsNext)
    

  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="gameboard">
        {squares.map((value, index) => {
          return(
          <Square 
          key={index}
          value={value} 
          onClick={() => handleClick(index)}
          />
        )
        })}
      </div>
    </>
  )
}

export default App