// import React from 'react'
// import './Newcollection.css'
// // import './new.css'
// import new_arrivels from '../Assets/new_arrivels'
// import Item  from '../Item/Item'
// const Newcollection = () => {
//   return (
//     <div className='Newcollection'>
//         <h1>New Arraivals</h1>
        
//         <div className="collections">
//             {new_arrivels.map((item,i)=>{
//                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//             })}
//         </div>
//     </div>
//   )
// }

// export default Newcollection



import './Newcollection.css'
// import './new.css'
import { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Newcollection = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollections') // your API endpoint
      .then((response)=>response.json())
      .then((data)=>setNewArrivals(data));
  }, []);

  return (
    <div className='Newcollection'>
      <h1>New Arrivals</h1>
      <div className="collections">
        {newArrivals.map((item) => (
          <Item 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Newcollection;
