import React, { useEffect, useState } from 'react';
import "./Items.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';

function Items(props) {
  const {id, todo, date, onDel, dbId, Done} = props;
  const [lineThrough, setLineThrough] = useState(false)
  const [delBtn, setDelBtn] = useState(false)
  

  useEffect(() => {
    setLineThrough(Done)
    setDelBtn(Done)
  },[]);

  const handlChange = async (e) => {
    try{
      const api = "https://react-todolist-app-server.onrender.com";
      const allData = await axios.get(api);
      const patchApi = `https://react-todolist-app-server.onrender.com/${allData.data[e.target.id]._id}`
      const updatedIsDone = await axios.patch(patchApi, {
        isDone: e.target.checked
      });
      setLineThrough(updatedIsDone.data.isDone);
      setDelBtn(updatedIsDone.data.isDone)
    }
    catch(err){
      console.log(err)
    }
  };
  const handledelete = () => {
    onDel(id, dbId)
    document.getElementById(id).classList.add("delete")
  }

  
  return (
    <div id={id} onClick={() => console.log("clicked")} className='card'>
        <div className='card_title' style={{textDecoration: props.style || lineThrough ? "line-through" : "none"}}>
        <input id={id} name={Done} type='checkbox' onChange={handlChange} defaultChecked={Done ? true : false} />
        <span>{todo}</span>      
        </div>
        <div className='card_footer'>
        <p><AccessTimeIcon /> {date}</p>
        <span>
        {delBtn && <DeleteOutlineIcon onClick={handledelete} />}
        </span>
        </div>
    </div>
  );
}

export default Items;