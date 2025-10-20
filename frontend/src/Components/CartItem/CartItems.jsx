import React, { useContext } from 'react'
// import './CartItems.css';
import './Car.css';
import { ProductContext } from '../../Context/ProductContext';
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ProductContext);

  return (
    <div className='cartitems'>
      {/* Header row */}
      <div className="cartitems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {/* Cart items */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-main">
                <img src={e.image} alt="" className="carticon-producticon" />
                <p>{e.name}</p>
                <p>INR {e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>INR {e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  className="cartitems-removeicon"
                  onClick={() => removeFromCart(e.id)}
                  alt="remove"
                />
              </div>
              <hr />
            </div>
          )
        }
        return null;
      })}

      {/* Cart total section */}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="caritems-total-item">
              <h4>Subtotal</h4>
              <p>INR {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="caritems-total-item">
              <h3>Total</h3>
              <h3>INR {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartItems



// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';  // ✅ For navigation
// import { ProductContext } from '../Context/ProductContext';
// import remove_icon from '../Assets/cart_cross_icon.png';
// import './CSS/CartItems.css'; // optional, if you have styles

// const CartItems = () => {
//   const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ProductContext);
//   const navigate = useNavigate(); // ✅ hook to navigate between pages

//   return (
//     <div className='cartitems'>
//       {/* Header row */}
//       <div className="cartitems-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />

//       {/* Cart items */}
//       {all_product.map((e) => {
//         if (cartItems[e.id] > 0) {
//           return (
//             <div key={e.id}>
//               <div className="cartitems-format cartitems-main">
//                 <img src={e.image} alt="" className="carticon-producticon" />
//                 <p>{e.name}</p>
//                 <p>INR {e.new_price}</p>
//                 <button className="cartitems-quantity">{cartItems[e.id]}</button>
//                 <p>INR {e.new_price * cartItems[e.id]}</p>
//                 <img
//                   src={remove_icon}
//                   className="cartitems-removeicon"
//                   onClick={() => removeFromCart(e.id)}
//                   alt="remove"
//                 />
//               </div>
//               <hr />
//             </div>
//           )
//         }
//         return null;
//       })}

//       {/* Cart total section */}
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>Cart Total</h1>
//           <div>
//             <div className="caritems-total-item">
//               <h4>Subtotal</h4>
//               <p>INR {getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="caritems-total-item">
//               <h3>Total</h3>
//               <h3>INR {getTotalCartAmount()}</h3>
//             </div>
//           </div>

//           {/* ✅ Button now navigates to Checkout page */}
//           <button onClick={() => navigate('/checkout')}>
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;
