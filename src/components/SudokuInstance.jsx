import React, { useState } from 'react'
import SudokuBoard from './SudokuBoard'

const SudokuInstance = ({ boardFromUrl }) => {
  const buildBoardObject = boardArray => {
    const board = []
    for (let rowIndex = 0; rowIndex < boardArray.length; rowIndex++) {
      const boardArrayRow = boardArray[rowIndex]
      const boardRow = []
      for (let colIndex = 0; colIndex < boardArrayRow.length; colIndex++) {
        boardRow.push({
          rowIndex: rowIndex,
          colIndex: colIndex,
          value: boardArray[rowIndex][colIndex]
        })
      }
      board.push(boardRow)
    }
    return board
  }

  const [boardObject, setBoardObject] = useState(buildBoardObject(boardFromUrl))


  return <SudokuBoard boardObject={boardObject}/>
}

export default SudokuInstance