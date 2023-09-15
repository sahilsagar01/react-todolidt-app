import React, { useEffect, useState } from 'react'
import "./Home.css"
import NavBar from '../../component/Navigaction/Navbar'
import Board from '../../component/board/Board'
import Footer from '../../component/Footer/Footer'
import axios from 'axios'

function Home() {
  const [todos, setTodos] = useState([])


  // const updateCheckBox = async(id, dbId) => {
  //   console.log(id+" updated "+dbId)
  //   try{
  //     const api = `http://localhost:3001/${dbId}`;
  //     console.log(checkBox)
  //     const updateData = await axios.patch(api, {
  //       isDone: !checkBox
  //     })
  //     setCheckBox(!checkBox)
  //     console.log(updateData.data)
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }

  const deleteItem = async(id, dbId) => {
    try{
      const api = `http://localhost:3001/delete/${dbId}`
      const deletedTodo = await axios.delete(api);
      setTodos(pV => {
        return pV.filter((item, index) => {
          return index !== id
        });
      });
    }
    catch(err){
      console.log(err)
    }
    console.log(id+ " "+dbId)
  }

  useEffect(() => {
    const fetchTodoItems = async() => {
      try{
        const api = "http://localhost:3001";
        const allTodo = await axios.get(api);
        setTodos(allTodo.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchTodoItems();
  },[]);


  
  return (
    <div>
        <NavBar />
        <div className='home_boards'>
        <Board 
        todos={todos}
        setTodo={setTodos}
        onDelete={deleteItem}
         />
        </div>
        <Footer />
    </div>
  )
}

export default Home