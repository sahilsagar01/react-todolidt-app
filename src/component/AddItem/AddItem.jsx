import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

import "./AddItem.css";
import axios from "axios";

function AddItem(props) {
  const d = new Date();
  const date = d.toLocaleDateString();

  const [newDate , setNewDate] = useState(date);
  const updateDate = () => {
    const d = new Date();
    const date = d.toLocaleDateString();
    setNewDate(date)
  }
  setInterval(updateDate, 1000)

  const [editable, setEditable] = useState(false);
  const [newItem, setNewItem] = useState({
    todo: "",
    date: date,
    isDone: false
  });

  const handleClick = async(e) => {
    e.preventDefault();
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
        return ([...pV, newItem])
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
          <input name="todo" type="text" placeholder="title" onChange={handleChange} value={newItem.todo}/>
          <div className="editable_edit_footer">
            <Button onClick={handleClick} variant="contained" href="#contained-buttons">
              AddItem
            </Button>

            <CloseIcon onClick={() => setEditable(false)} />
          </div>
        </form>
      ) : (
        <p onClick={() => setEditable(true)}>add item</p>
      )}
    </div>
  );
}
export default AddItem;
