import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button  from 'react-bootstrap/Button';
import HomeIcon from '@material-ui/icons/Home';

const NavRegister = () => {
    return(
            <Navbar className="justify-content-center" bg="dark" variant="info">
              <Navbar.Brand href="/" style={{color:'white',display:'flex'}}><HomeIcon/>MyStuff Service</Navbar.Brand>
              <Nav className="justify-content-left">
              <Nav.Link href="/">Home<br></br>Acceuil</Nav.Link>
              {/* <Nav.Link href="/login"><br></br>Déja un membre</Nav.Link> */}
              <Nav.Link href="/">Who are we<br></br>Qui sommes nous</Nav.Link>
              <Nav.Link href="/">Contact us<br></br>Contacter-nous</Nav.Link>
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form> */}
          </Navbar>
    )
}
export default NavRegister;