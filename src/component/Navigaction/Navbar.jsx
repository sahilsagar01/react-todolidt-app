import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { pink } from '@mui/material/colors';
import "./NavBar.css"

function NavBar() {
  return (
    <>
      {/* {['md'].map((expand) => (
        <Navbar key={expand}  bg='none' expand={expand} className=" bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">To Do List</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Options
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className='linkHome'>Home</Nav.Link>
                  <Nav.Link href="#action2" className='linkAbout'>About</Nav.Link>
                  <Nav.Link href="#action2" className='linkContacts'>Contacts</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3" disabled>Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4" disabled>
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" disabled>
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} */}
      <div className='navbar'>
        <div className='leftCont'>
          <h1>Todo List</h1>
        </div>
        <div className='rightCont'>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#contacts'>Contacts</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;