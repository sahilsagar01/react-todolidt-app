import React, { useEffect, useState } from 'react';
import "./Items.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';

function Items(props) {
  const {id, todo, date, onDel, dbId, Done} = props;
  const [lineThrough, setLineThrough] = useState(false)
  


  const handlChange = async(e) => {
    // onUpdCheckBox(id, dbId);
    console.log(e.target.checked)
    try{
      const api = "http://localhost:3001";
      const allData = await axios.get(api);
      console.log(allData.data[e.target.id]._id);

      const patchApi = `http://localhost:3001/${allData.data[e.target.id]._id}`
      const updatedIsDone = await axios.patch(patchApi, {
        isDone: e.target.checked
      });
      console.log(updatedIsDone.data.isDone);
      setLineThrough(updatedIsDone.data.isDone)
    }
    catch(err){
      console.log(err)
    }
  }


  // const handleCheckbox = async(e) =>{
  //   try{
  //     console.log(e.target.checked+" "+e.target.id)
  //     const api = `http://localhost:3001/`
  //   setLineThrough(e.target.checked)
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }

  
  return (
    <div className='card'>
        <div className='card_title' style={{textDecoration: props.style || lineThrough ? "line-through" : "none"}}>
        <input id={id} name={Done} type='checkbox' onChange={handlChange} />
        {todo}        
        </div>
        <div className='card_footer'>
        <p><AccessTimeIcon /> {date}</p>
        <DeleteOutlineIcon onClick={()=> onDel(id, dbId)} />
        </div>
    </div>
  )
}

export default Items;