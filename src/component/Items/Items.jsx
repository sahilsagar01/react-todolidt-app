import React, { useEffect, useState } from 'react';
import "./Items.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';

function Items(props) {
  const {id, todo, date, onDel, dbId, Done} = props;
  const [lineThrough, setLineThrough] = useState(false)
  

  useEffect(() => {
    setLineThrough(Done)
  },[]);

  const handlChange = async (e) => {
    try{
      const api = "http://localhost:3001";
      const allData = await axios.get(api);
      const patchApi = `http://localhost:3001/${allData.data[e.target.id]._id}`
      const updatedIsDone = await axios.patch(patchApi, {
        isDone: e.target.checked
      });
      setLineThrough(updatedIsDone.data.isDone);
    }
    catch(err){
      console.log(err)
    }
  };

  
  return (
    <div className='card'>
        <div className='card_title' style={{textDecoration: props.style || lineThrough ? "line-through" : "none"}}>
        <input id={id} name={Done} type='checkbox' onChange={handlChange} defaultChecked={Done ? true : false} />
        <span>{todo}</span>      
        </div>
        <div className='card_footer'>
        <p><AccessTimeIcon /> {date}</p>
        <span>
        <DeleteOutlineIcon onClick={()=> onDel(id, dbId)} />
        </span>
        </div>
    </div>
  );
}

export default Items;