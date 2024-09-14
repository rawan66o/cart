import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import  storeitems from '../data/storeitems.json';
import formatCurrency from './formateCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';

function CartItems({id,quntity}) {
    const{  removeItemFromCart}=useShoppingCart();
    const item=storeitems.find((i)=>i.id===id)
    if(item==null)
    return null;
    return (
  <Stack 
  direction='horizontal' 
  gap={2}
   className='d-flex align-item-center'>
<img src={item.imgUrl} alt=" cart-img " style={{ width:"125px" ,height:"75px",ObjectFit:"cover" }}/>
<div className='me-auto'>
    <div >
        {item.name}{" "}
        {quntity >1&&(<span className='text-muted' style={{fontSize:"0.65rem"}}>
          x{quntity}
          </span>
          )}
        <div className='text-muted' style={{fontSize:"0.75rem"}} >
        {formatCurrency(item.price)}
    </div>
    </div>
    <div>
       {formatCurrency(item.price*quntity)} 
     </div>
</div>  

      <div>
       {formatCurrency(item.price*quntity)} 
      </div>

 <Button variant='outline-danger' size='sm' onClick={()=>removeItemFromCart(id)}> 
x
  
 </Button>
</Stack>
  )
}

export default CartItems;
