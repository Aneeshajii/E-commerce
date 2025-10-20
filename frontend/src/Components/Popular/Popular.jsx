import React, { useEffect, useState } from 'react'
// import './Popular.css'
import './PP.css';
import data_product from '../Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  
  const [popularProducts,setPopulsrProduts] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/popularproducts')
    .then((response)=>response.json())
    .then((data)=>setPopulsrProduts(data));
  },[])

  return (
    <div className='popular'>
        <h1>POPULAR PRODUCTS</h1>
        <hr />
        <div className="popularitems">
            {data_product.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular