import React from 'react';
import "./Board.css"
import AddItem from '../AddItem/AddItem';
import Items from '../Items/Items';


function Board(props) {
  return (
    <div className='board'>
    <div className='board_top'>
    <p className='board_top_title'>To do <span>{props.todos.length}</span></p>
    </div>
    <div className='board_cards custom-scroll'>
    <AddItem 
      setTodos={props.setTodo}
    />
    {
      props.todos.map((item, index) => {
        console.log(item)
        return <Items 
        key={index} 
        id={index}
        dbId={item._id}
        todo={item.todo}
        date={item.date}
        Done={item.isDone}
        onDel={props.onDelete}
        onUpdCheckBox={props.onUpdate}
         />
      })
    }
   
    </div>
    </div>
  )
}

export default Board;