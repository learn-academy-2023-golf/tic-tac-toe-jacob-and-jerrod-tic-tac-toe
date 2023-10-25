import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (index) => {
    const newSquares = [...squares]
    newSquares[index] = 'X'
    setSquares(newSquares)
    

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