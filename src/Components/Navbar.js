import React from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'

function NavMenu({onChange,searchcondition,setSearchcondition}) {
  const addpage = ()=>{
    onChange('addpage')
  }
  const homepage = ()=>{
    onChange('home')
  }
  let search ={name:'',rating:0}
  const handleSearch=()=>{
    setSearchcondition(search)
    console.log(search)
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
    <Form inline>
      <FormControl type="text" placeholder="Movie name" className="mr-sm-2" onChange={x=>search.name=x.target.value}/>
      <Form.Control type='number' placeholder='rating' onChange={x=>search.rating=x.target.value} ></Form.Control>
      <Button onClick={handleSearch}>Search</Button>
    </Form>
  </Navbar>
        </div>
    )
}

export default NavMenu
