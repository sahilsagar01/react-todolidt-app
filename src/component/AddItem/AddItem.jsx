import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

import "./AddItem.css";
import axios from "axios";

function AddItem(props) {
  const d = new Date();
  const date = d.toLocaleDateString();

  const [newDate , setNewDate] = useState(date);
  // const updateDate = () => {
  //   const d = new Date();
  //   const date = d.toLocaleDateString();
  //   setNewDate(date)
  // }
  // setInterval(updateDate, 1000)

  const [editable, setEditable] = useState(false);
  const [newItem, setNewItem] = useState({
    todo: "",
    date: date,
    isDone: false
  });

  const handleClick = async(e) => {
    e.preventDefault();
    if(newItem.todo.length < 1) return  //handle no todo input
    try{
      const api = "http://localhost:3001/postTodo";
      const postItem = await axios.post(api, newItem);
      console.log(postItem.data)
      setNewItem(pV => {
        return ({
          ...pV,
          todo: ""
        })
      })
      props.setTodos(pV => {
        return ([...pV, postItem.data])
      })
    }
    catch(err){
      console.log(err)
    }
  }


  const handleChange = (e) => {
    const {name , value} = e.target;
    setNewItem(pV => {
      return ({
        ...pV,
        [name]: value
      })
    })
  };
  return (
    <div className="editable">
      {editable ? (
        <form className="editable_edit">
          <input name="todo" type="text" placeholder="Add todo" onChange={handleChange} value={newItem.todo}/>
          <div className="editable_edit_footer">
            <Button onClick={handleClick} variant="contained" color="secondary" href="#contained-buttons">
              Add Item
            </Button>

            <CloseIcon onClick={() => setEditable(false)} />
          </div>
        </form>
      ) : (
        <p onClick={() => setEditable(true)}>+ New task</p>
      )}
    </div>
  );
}
export default AddItem;
