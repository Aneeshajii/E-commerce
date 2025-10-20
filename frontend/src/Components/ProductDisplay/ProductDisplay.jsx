// import React, { useContext } from 'react';
// import './ProductDisplay.css';
// // import './PD.css';
// import { ProductContext } from '../../Context/ProductContext';

// const ProductDisplay = (props) => {
//   const { product } = props;
//   const { addToCart } = useContext(ProductContext);

//   return (
//     <div className='ProductDisplay'>
//       <div className="productleft">
//         <div className="product-img-list">
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//         </div>
//         <div className="productdisplay-img">
//           <img className='productdisplay-main-img' src={product.image} alt="" />
//         </div>
//       </div>

//       <div className="productright">
//         <h1>{product.name}</h1>

//         <div className="productdisplay-right-prices">
//           <div className="productdisplay-right-oldprice">₹{product.old_price}</div>
//           <div className="productdisplay-right-newprice">₹{product.new_price}</div>
//         </div>

//         <div className="productdisplay-right-description">
//           Shop mens and womens clothing, mobiles, and furniture all in one place.
//           Discover trendy styles and modern essentials at the best prices.
//         </div>

//         {/* ✅ Show size options only if product is clothing */}
//          {(product.category !== "mobile" && product.category !== "furniture") && (
//           <div className="productdisplay-right-size">
//             <h1>Select Size</h1>
//             <div className="productdisplay-right-sizes">
//               <div>S</div>
//               <div>M</div>
//               <div>L</div>
//               <div>XL</div>
//               <div>XXL</div>
//             </div>
//           </div>
//         )}

//        <button 
//   style={{
//     marginTop: product.category === "mobile" || product.category === "furniture" ? "20px" : "0px"
//   }}
//   onClick={() => { addToCart(product.id) }}>  ADD TO Cart</button>

//       </div>
//     </div>
//   )
// }

// export default ProductDisplay;





import React, { useContext } from 'react';
import './ProductDisplay.css';
import { ProductContext } from '../../Context/ProductContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ProductContext);

  // 🧩 Prevent error if product is not yet loaded
  if (!product) {
    return (
      <div className="productdisplay-loading">
        <h2>Loading product details...</h2>
      </div>
    );
  }

  return (
    <div className='ProductDisplay'>
      <div className="productleft">
        <div className="product-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>

        <div className="productdisplay-img">
          <img
            className='productdisplay-main-img'
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>

      <div className="productright">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-oldprice">₹{product.old_price}</div>
          <div className="productdisplay-right-newprice">₹{product.new_price}</div>
        </div>

        <div className="productdisplay-right-description">
          Shop mens and womens clothing, mobiles, and furniture all in one place.
          Discover trendy styles and modern essentials at the best prices.
        </div>

        {/* ✅ Show size options only if product is clothing */}
        {(product.category !== "mobile" && product.category !== "furniture") && (
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
        )}

        <button
          style={{
            marginTop: product.category === "mobile" || product.category === "furniture" ? "20px" : "0px"
          }}
          onClick={() => addToCart(product.id)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;


// 

// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { ProductContext } from "../../Context/ProductContext";
// import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";

// const Product = () => {
//   const { all_products } = useContext(ProductContext);
//   const { productId } = useParams(); // URL: /product/26

//   // ✅ Find the product using actual ID, not array index
//   const product = all_products.find((p) => p.id === Number(productId));

//   // 🧩 Handle case when product is not yet loaded
//   if (!all_products || all_products.length === 0) {
//     return <h2>Loading products...</h2>;
//   }

//   if (!product) {
//     return <h2>Product not found!</h2>;
//   }

//   return (
//     <div>
//       <ProductDisplay product={product} />
//     </div>
//   );
// };

// export default Product;
