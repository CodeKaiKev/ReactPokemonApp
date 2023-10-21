import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header2.css';
import { Routes, Route, Link } from 'react-router-dom';
function Header ({setWhichPage, setBackG, setCardColour}) {
  return (
    <div className="p-3 mb-2 bg-danger text-white">
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} >
          <Container fluid>
            <Container >
              <Navbar.Brand class="centerBrand">
                <img src="https://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG3.png" class="imgTitle"/>
              </Navbar.Brand>
            </Container>
            <div class="expandThing">
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} placement="end" class="expandThing"/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
             
            >
              
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Pokemon Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1"><Link to="/">Return Back</Link></Nav.Link>
                  {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                  {/* <Nav.Link href="#action12" onClick={() => setState('light')}>Light Mode</Nav.Link>
                  <Nav.Link href="#action12" onClick={() => setState('dark')}>Dark Mode</Nav.Link> */}
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
        
      ))}
    </div>
  );
}

export default Header;