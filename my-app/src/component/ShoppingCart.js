import React from 'react'
import {Offcanvas, Stack} from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItems from './CartItems';
import formatCurrency from './formateCurrency';
import storeItems from "../data/storeitems.json";
function ShoppingCart({isOpend}) {
    const {cartItems,closeCart}=useShoppingCart();
  return (
<Offcanvas show ={isOpend} onHide={closeCart} placement='end'>
    <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
{cartItems.map((item)=>(
    < CartItems key={item.id} {...item }/>
))}<Stack>
<div className='ms-auto fw-bold fs-5'>
    Total{""}
    {formatCurrency(
    cartItems.reduce((total,cartItems)=>{
        const item =storeItems.find((i)=>i.id === cartItems.id);
return total + (item?.price||0)*cartItems.quntity;
    },0)
   )} 
</div>
</Stack>
</Offcanvas.Body>
</Offcanvas>
   )
}

export default ShoppingCart;