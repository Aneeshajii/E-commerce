import React, { createContext, useEffect, useState } from "react";
import { data } from "react-router-dom";
// import all_product from '../Components/Assets/all_product';

export const ProductContext = createContext(null);

//2

const getDefaultCart = ()=> {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}

const ProductContextProvider = (props) => {        
                                          
    
    
   const [all_product,setAll_Product] = useState([]);
    // const contextValue = {all_product};
// 3 very next step after the 2
const [cartItems,setCartItems] = useState(getDefaultCart());

useEffect(()=>{
    fetch('http://localhost:4000/allproducts')
    .then((response)=>response.json())
    .then((data)=>setAll_Product(data))

    if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/getcart',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:"",

        }).then((response)=>response.json())
        .then((data)=>setCartItems(data));
    }
},[])

// console.log(cartItems);
 
const addToCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    // console.log(cartItems);
    if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/addtocart',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:JSON.stringify({"itemId":itemId}),
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
    }
    
}

const removeFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/removefromcart',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:JSON.stringify({"itemId":itemId}),
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
    }
}
// afet cart setup
const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
           {
            let itemInfo = all_product.find((product)=>product.id===Number(item))
            totalAmount += itemInfo.new_price * cartItems[item];
           }
    }
  return totalAmount;
}
// 
// cart count

const getTotalCartItems = () =>{
    let totalItems = 0;
    for (const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            totalItems+= cartItems[item];
        }
    }
    return totalItems;
}

// 

const contextValue = {getTotalCartItems,getTotalCartAmount ,all_product,cartItems,addToCart,removeFromCart};

    return(
        <ProductContext.Provider value={contextValue}>
                  {props.children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider;



// import React, { createContext, useEffect, useState } from "react";

// export const ProductContext = createContext(null);

// // 🧩 Create empty cart with all product IDs initially 0
// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index <= 300; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };

// const ProductContextProvider = (props) => {
//   const [all_product, setAll_Product] = useState([]);
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   // 🧩 Fetch all products from backend
//   useEffect(() => {
//     fetch("http://localhost:4000/allproducts")
//       .then((response) => response.json())
//       .then((data) => setAll_Product(data))
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   // 🛒 Add item to cart
//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: (prev[itemId] || 0) + 1,
//     }));
//   };

//   // 🗑 Remove item from cart
//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
//     }));
//   };

//   // 💰 Calculate total amount
//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = all_product.find(
//           (product) => product.id === Number(item)
//         );
//         if (itemInfo) {
//           totalAmount += itemInfo.new_price * cartItems[item];
//         }
//       }
//     }
//     return totalAmount;
//   };

//   // 🧮 Count total items
//   const getTotalCartItems = () => {
//     let totalItems = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItems += cartItems[item];
//       }
//     }
//     return totalItems;
//   };

//   // 🌐 All context values available to entire app
//   const contextValue = {
//     all_product,
//     cartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     getTotalCartItems,
//   };

//   return (
//     <ProductContext.Provider value={contextValue}>
//       {props.children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductContextProvider;
