import React from 'react'
import AddItem from '../AddItem/AddItem'
import "./ToDoBoard.css"

function ToDoBoard() {
  return (
    <div className='todoboard'>
    <div className='todoBoard_frame'>
    <AddItem />
    </div>
    </div>
  )
}

export default ToDoBoard;