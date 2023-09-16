
import "./NavBar.css"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Spinner from 'react-bootstrap/Spinner';
function NavBar(props) {
  return (
    <>
      <div className='navbar'>
        <div className='cont'>
          <h1>{props.addItem  || "Todo List"} {props.addItem === "Waiting for server... "
           ? 
          <Spinner animation="grow" variant="light" size="sm" />
          :
          <FormatListBulletedIcon />}</h1>
        </div>
      </div>
    </>
  );
}

export default NavBar;