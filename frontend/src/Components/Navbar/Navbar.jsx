// import React, { useContext, useState } from 'react';
// import './Navbar.css';
// import logo from '../Assets/logo.png';
// import cart_ic from '../Assets/cart_icon.png';
// import { Link } from 'react-router-dom';
// import { ProductContext } from '../../Context/ProductContext';

// const Navbar = () => {
//   const [menu, setMenu] = useState("home"); // default active menu
//   const { getTotalCartItems } = useContext(ProductContext);

//   return (
//     <div className='Navbar'>
//       {/* Logo */}
//       <div className="Navlogo">
//         <img src={logo} alt="" />
//         <p>Shopying</p>
//       </div>

//       {/* Menu */}
//       <ul className="menu">
//         <li 
//           onClick={() => setMenu("home")} 
//           className={menu === "home" ? "active" : ""}
//         >
//           <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
//         </li>
//         <li 
//           onClick={() => setMenu("mens")} 
//           className={menu === "mens" ? "active" : ""}
//         >
//           <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
//         </li>
//         <li 
//           onClick={() => setMenu("womens")} 
//           className={menu === "womens" ? "active" : ""}
//         >
//           <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
//         </li>
//         <li 
//           onClick={() => setMenu("mobiles")} 
//           className={menu === "mobiles" ? "active" : ""}
//         >
//           <Link style={{ textDecoration: 'none' }} to='/mobiles'>Mobile</Link>
//         </li>
//         <li 
//           onClick={() => setMenu("furnitures")} 
//           className={menu === "furnitures" ? "active" : ""}
//         >
//           <Link style={{ textDecoration: 'none' }} to='/furnitures'>Furniture</Link>
//         </li>
//       </ul>

//       {/* Cart & Login */}
//       <div className="navlogincart">
//         <Link to='/cart'>
//           <img src={cart_ic} alt="" />
//         </Link> 
//         <div className="cartcount">{getTotalCartItems()}</div>
//         <Link to='/login'>
//           <button>Login</button>
//         </Link> 
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React, { useContext, useRef } from 'react';
 import './Navbar.css'; 
// import './nav.css';
 import logo from '../Assets/logog.png'; 
 import cart_ic from '../Assets/cart_icon.png';
 import { Link, useLocation } from 'react-router-dom';
  import { ProductContext } from '../../Context/ProductContext';
  import menubar_icon from '../Assets/menu_icon.png';


  const Navbar = () => {
    
  const { getTotalCartItems } = useContext(ProductContext); 
  const menuRef = useRef();
  const menubar_toggle = (e)=>{
          menuRef.current.classList.toggle('nav-menu-visible');
          e.target.classList.toggle('open');
  }
  const location = useLocation(); 
  return ( <div className='Navbar'>

     {/* Logo */} 
     <div className="Navlogo"> 
      <img src={logo} alt="" /> 
      <p>Shopying</p> 
      </div>

       {/* Menu */}
       <img className='nav-menu' onClick={menubar_toggle} src={menubar_icon} alt="" />          
        <ul ref={menuRef} className="menu">
         <li className={location.pathname === "/" ? "active" : ""}><Link to='/'>Home</Link>
           </li> <li className={location.pathname === "/mens" ? "active" : ""}> 
           <Link to='/mens'>Men</Link> </li>
            <li className={location.pathname === "/womens" ? "active" : ""}> <Link to='/womens'>Women</Link> </li> <li className={location.pathname === "/mobiles" ? "active" : ""}> 
            <Link to='/mobiles'>Mobile</Link> 

            </li> <li className={location.pathname === "/furnitures" ? "active" : ""}> 
            <Link to='/furnitures'>Furniture</Link> </li> </ul>

             {/* Cart & Login */} 

            <div className="navlogincart"> <Link to='/cart'> 
    
            <img src={cart_ic} alt="" /> </Link><div className="cartcount">{getTotalCartItems()}</div>
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>logout</button>
        :   <Link to='/login'>  <button>Login</button> </Link>}
           
            </div> 
            
            </div>
             );
             
             } 

export default Navbar;