import React from 'react'
import { Button, Container, Nav,Navbar as NavbarBs  } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

function Navbar() {
               
                const {openCart, cartQuantity}=useShoppingCart()
  return (

<NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
    <Container>
      <Nav className='me-auto'>
        <Nav.Link to="/"      as={NavLink}>Home</Nav.Link>
        <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
        <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
      </Nav>
      <Button variant="outline-primary"className="rounded-circle" style={{width:"3rem" ,height:"3rem"}}>cart
      <div className='rounded-circle bg-danger d-flex justify-content-center align-item-center  '
      onClick={openCart}
      >
              {cartQuantity}   
      </div>
      </Button>

</Container>

</NavbarBs>
 )
  
};

export default Navbar;


