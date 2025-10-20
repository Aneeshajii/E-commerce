import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {


  const {all_product} = useContext(ProductContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div className='Product'>
        <ProductDisplay product={product}/>
    </div>
  )
}

export default Product