import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header2.css';
import { Routes, Route, Link } from 'react-router-dom';
function Header2 ({setWhichPage, setBackG, setCardColour}) {
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
                  <Nav.Link href="#action1"><Link to="/">Home</Link></Nav.Link>
                  {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                  <NavDropdown
                    title="Pokemon Generations"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item  onClick={() => {setWhichPage('Gen1'); setBackG(`https://archives.bulbagarden.net/media/upload/2/25/LGPE_Kanto_Map.png`)}}>Generation I - Kanto</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => {setWhichPage('Gen2'); setBackG(`https://archives.bulbagarden.net/media/upload/6/64/JohtoMap.png`)}}>Generation II - Johto</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => {setWhichPage('Gen3'); setBackG(`https://archives.bulbagarden.net/media/upload/8/85/Hoenn_ORAS.png`)}}>Generation III - Hoenn</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => {setWhichPage('Gen4'); setBackG(`https://archives.bulbagarden.net/media/upload/0/08/Sinnoh_BDSP_artwork.png`)}}>Generation IV - Sinnoh</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => {setWhichPage('Gen5'); setBackG(`https://archives.bulbagarden.net/media/upload/f/fc/Unova_B2W2_alt.png`)}}>Generation V - Unova</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => {setWhichPage('Gen6');setBackG(`https://archives.bulbagarden.net/media/upload/8/8a/Kalos_alt.png`)}}>Generation VI - Kalos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => {setWhichPage('Gen7'); setBackG(`https://archives.bulbagarden.net/media/upload/thumb/0/0b/Alola_USUM_artwork.png/1200px-Alola_USUM_artwork.png`)}}>Generation VII - Alola</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => {setWhichPage('Gen8'); setBackG(`https://archives.bulbagarden.net/media/upload/c/ce/Galar_artwork.png`)}}>Generation VIII - Galar</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => {setWhichPage('Hisui'); setBackG(`https://archives.bulbagarden.net/media/upload/2/22/Legends_Arceus_Hisui.png`)}}>Generation VIII - Hisui</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => {setWhichPage('Gen9'); setBackG(`https://archives.bulbagarden.net/media/upload/f/fd/Paldea_artwork.png`)}}>Generation IX - Paldea</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => setWhichPage('Refresh')}>Refresh</NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Colour Options"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item  onClick={() => {setCardColour(["dark", "warning", "light"])}}>Dark</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => {setCardColour(["light", "dark", "dark"])}}>Light</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => {setCardColour(["info", "warning", "light"])}}>Blue</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={() => {setCardColour(["success", "info", "light"])}}>Green</NavDropdown.Item>
                  </NavDropdown>
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

export default Header2;