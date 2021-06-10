
import {Nav} from 'react-bootstrap'

import { Link } from 'react-router-dom'

const Navbar=()=> {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
  
    <Nav.Link href="/BookList">BookList</Nav.Link>
  

      <Link to= "SingleBook">
    <div>SingleBook</div>
    </Link>
  
  
      <Link to ="/Registration">
    <div >Registration</div>
    </Link>
  
  
  </Navbar.Collapse>
</Navbar>
    )
} 
export default Navbar


