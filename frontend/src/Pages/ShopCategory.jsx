import React,{useContext} from 'react'
import './CSS/ShopCategory.css';
import Item from '../Components/Item/Item';
import { ProductContext } from '../Context/ProductContext';


const ShopCategory = (props) => {   
   const {all_product} = useContext(ProductContext);
  return (
  <div className='ShopCategory'>
     <div className="productcategory">
    {all_product.map((item,i) => {
      if(props.category===item.category){
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
      }
      else {
        return null;
      }
    })}
     </div>
    </div>
  )
}

export default ShopCategory