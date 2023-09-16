import React, { useEffect, useState } from 'react'
import "./Home.css"
import NavBar from '../../component/Navigaction/Navbar'
import Board from '../../component/board/Board'
import Footer from '../../component/Footer/Footer'
import axios from 'axios'

function Home() {
  const [todos, setTodos] = useState([])
  const [loding, setLoding] = useState(true)
  const [NavText, setNavText] = useState("Waiting for server... ")


 

  const deleteItem = async(id, dbId) => {
    try{
      const api = `https://react-todolist-app-server.onrender.com/delete/${dbId}`
      const deletedTodo = await axios.delete(api);
      setTodos(pV => {
        return pV.filter((item, index) => {
          return index !== id
        });
      });
      setNavText("Todo Deleted")
      setTimeout(() => setNavText("Todo List"), 2000)
    }
    catch(err){
      console.log(err)
    }
    console.log(id+ " "+dbId)
  }

  useEffect(() => {
    const fetchTodoItems = async() => {
      try{
        const api = "https://react-todolist-app-server.onrender.com";
        const allTodo = await axios.get(api);
        setTodos(allTodo.data)
        if(allTodo.data){
          setTimeout(()=>setLoding(false),1000)
          setTimeout(()=>setNavText("Todo List"),1000)
          
        }
        
      }
      catch(err){
        console.log(err)
      }
    }
    fetchTodoItems();
  },[]);


  
  return (
    <div>
        <NavBar addItem={NavText} />
        <div className='home_boards'>
        <Board 
        todos={todos}
        loding={loding}
        setTodo={setTodos}
        onDelete={deleteItem}
        onNavText={setNavText}
         />
        </div>
        <Footer />
    </div>
  )
}

export default Home