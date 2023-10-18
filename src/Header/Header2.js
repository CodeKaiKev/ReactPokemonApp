import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header2.css';
function Header2 ({setWhichPage, setBackG,setState}) {
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
                  <Nav.Link href="#action1">Home</Nav.Link>
                  {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                  <NavDropdown
                    title="Pokemon Generations"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action2" onClick={() => {setWhichPage('Gen1'); setBackG(`https://images4.alphacoders.com/934/thumb-1920-934051.png`)}}>Generation I - Kanto</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3" onClick={() => {setWhichPage('Gen2'); setBackG(`https://i.etsystatic.com/37268737/r/il/8fc0f5/4249376796/il_fullxfull.4249376796_hxsd.jpg`)}}>Generation II - Johto</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4" onClick={() => {setWhichPage('Gen3'); setBackG(`https://static.planetminecraft.com/files/resource_media/screenshot/1416/hoenn_map_lrg.jpg`)}}>Generation III - Hoenn</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" onClick={() => {setWhichPage('Gen4'); setBackG(`https://i.redd.it/qfu6je16f4i71.jpg`)}}>Generation IV - Sinnoh</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action6" onClick={() => {setWhichPage('Gen5'); setBackG(`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80ff523f-ff84-457d-a547-464588d3a3d3/daqi4o3-df638c38-b6a1-413c-a448-f161505c5093.png/v1/fill/w_1024,h_574,q_80,strp/the_unova_region_by_willdinomaster55_daqi4o3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc0IiwicGF0aCI6IlwvZlwvODBmZjUyM2YtZmY4NC00NTdkLWE1NDctNDY0NTg4ZDNhM2QzXC9kYXFpNG8zLWRmNjM4YzM4LWI2YTEtNDEzYy1hNDQ4LWYxNjE1MDVjNTA5My5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lQ6J_U-ic_Sf03Zp_RoKC13hC8QVKPdc6X-gOXscZmw`)}}>Generation V - Unova</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action7" onClick={() => {setWhichPage('Gen6');setBackG(`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1dce4052-2f5c-40d1-9d51-97a8f4ef119a/ded33wf-edf77f01-12e7-4bad-b80f-44a76e3c82da.png/v1/fill/w_1280,h_840,q_80,strp/hd_kalos_map_by_datboihomework_ded33wf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQwIiwicGF0aCI6IlwvZlwvMWRjZTQwNTItMmY1Yy00MGQxLTlkNTEtOTdhOGY0ZWYxMTlhXC9kZWQzM3dmLWVkZjc3ZjAxLTEyZTctNGJhZC1iODBmLTQ0YTc2ZTNjODJkYS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MXMHnhm6UCnsy1ZjFEv6wRrGTx0H7UVEdTO1LJ5GjQI`)}}>Generation VI - Kalos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action8" onClick={() => setWhichPage('Gen7')}>Generation VII - Alola</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action9" onClick={() => setWhichPage('Gen8')}>Generation VIII - Galar</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action9" onClick={() => setWhichPage('Hisui')}>Generation VIII - Hisui</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action10" onClick={() => setWhichPage('Gen9')}>Generation IX - Paldea</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action11" onClick={() => setWhichPage('Refresh')}>Refresh Here Then Pick Gen</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action12" onClick={() => setState('light')}>Light Mode</Nav.Link>
                  <Nav.Link href="#action12" onClick={() => setState('dark')}>Dark Mode</Nav.Link>
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