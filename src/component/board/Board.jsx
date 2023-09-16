import React, { useState } from 'react';
import "./Board.css"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import AddItem from '../AddItem/AddItem';
import Items from '../Items/Items';


function Board(props) {




  return (
    <div className='board'>
    <div className='board_top'>
    <p className='board_top_title'>Todos <span>{props.todos.length}</span></p>
    </div>
    <div className='board_cards custom-scroll'>
    <AddItem 
      setTodos={props.setTodo}
      setNavText={props.onNavText}
    />
    {
     props.loding ?
     <Stack spacing={1}>
     <Skeleton animation="wave" variant="rectangular" height={100} />
     <Skeleton animation="wave" variant="rectangular" height={100} />
     <Skeleton animation="wave" variant="rectangular" height={100} />
     </Stack> :
     props.todos.map((item, index) => {
        console.log(item)
        return <Items 
        key={item._id} 
        id={index}
        dbId={item._id}
        todo={item.todo}
        date={item.date}
        Done={item.isDone}
        onDel={props.onDelete}
         />
      })
    }
   
    </div>
    </div>
  )
}

export default Board;