import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'

function NavMenu({onChange}) {
  const addpage = ()=>{
    onChange('addpage')
  }
  const homepage = ()=>{
    onChange('home')
  }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home" onClick={homepage}>Netflix</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home" onClick={homepage}>Home</Nav.Link>
      <Nav.Link href="#Movies" onClick={homepage}>Movies</Nav.Link>
      <Nav.Link href="#Series" onClick={addpage}>Add a Movie</Nav.Link>
    </Nav>
  </Navbar>
        </div>
    )
}

export default NavMenu
