import React from 'react'
import{Col,Row} from "react-bootstrap"
import storeitems from"../data/storeitems.json";
import Storeitem from './Storeitem';

function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
{
storeitems.map((item)=>(
<Col key={item.id}>
   
   <Storeitem {...item}/>

</Col>


))}
      </Row>
    </>
  )
}

export default Store
