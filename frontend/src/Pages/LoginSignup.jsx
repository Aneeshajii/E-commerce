// import React, { useState } from 'react'
// import './CSS/LoginSignup.css'

// const LoginSignup = () => {

// // last after apis login in sighnup
// const [state,Setstate] = useState("Login");


//   return (

//      <div className="Login-page">
//     <div className="Login-container">
//       <h2>{state}</h2>

//       <form>
//         <div className="input-group">
//          {state==="Sign Up"?<input 
//             type="text" 
//             placeholder="Enter your name" 
//             required 
//             autoComplete="name" 
//           />:<></>}
//         </div>

//         <div className="input-group">
//           <input 
//             type="email" 
//             placeholder="Enter your email" 
//             required 
//             autoComplete="email" 
//           />
//         </div>

//         <div className="input-group">
//           <input 
//             type="password" 
//             placeholder="Enter your password" 
//             required 
//             autoComplete="new-password" 
//           />
//         </div>

//         <button type="submit" className="btn">
//           Continue
//         </button>
//       </form>{state==="Sign Up" ? <p className="login-text">
//         Already have an account? <span >Login here</span>
//       </p>:
//         <p className="login-text">
//         Create an account? <span >Click here</span>
//       </p>}


     
//     </div>
//     </div>
//   )
// }

// export default LoginSignup


// import React, { useState } from "react";
// import './CSS/LoginSignup.css'
// const LoginSignup = () => {
//   const [state, setState] = useState("Login");
//  const [formData,SetFormData] = useState({
//   username:"",
//   password:"",
//   email:""
//  })
//  const changeHandle = (e) =>{
//   SetFormData({...formData,[e.target.name]:e.target.value})
//  }



//   const login = async() =>{
//     console.log("login function Executed",formData);
    
//   }
//    const signup = async() =>{
//     console.log("signup function Executed",formData);
    
//   }


//   return (
//     <div className="Login-page">
//       <div className="Login-container">
//         <h2>{state}</h2>

        
//           <div className="input-group">
//             {state === "Sign Up" && (
//               <input name="username" value={formData.username} onChange={changeHandle}
//                 type="text"
//                 placeholder="Enter your name"
//                 required
//                 autoComplete="name"
//               />
//             )}
//           </div>

//           <div className="input-group">
//             <input name="email" value={formData.email} onChange={changeHandle}
//               type="email"
//               placeholder="Enter your email"
//               required
//               autoComplete="email"
//             />
//           </div>

//           <div className="input-group">
//             <input name="password" value={formData.password} onChange={changeHandle}
//               type="password"
//               placeholder="Enter your password"
//               required
//               autoComplete="new-password"
//             />
//           </div>

//           <button type="submit" className="btn" onClick={()=>{state==="Login"?login():signup()}}>
//             Continue
//           </button>
      

//         {state === "Sign Up" ? (
//           <p className="login-text">
//             Already have an account?{" "}
//             <span
//               onClick={() => setState("Login")}
//               style={{  cursor: "pointer" }}
//             >
//               Login here
//             </span>
//           </p>
//         ) : (
//           <p className="login-text">
//             Create an account?{" "}
//             <span
//               onClick={() => setState("Sign Up")}
//               style={{  cursor: "pointer" }}
//             >
//               Click here
//             </span>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;



import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import { data } from "react-router-dom";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const changeHandle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login
  const login = async (e) => {
    e.preventDefault(); // ✅ Stop page reload
    console.log("Login function executed", formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  };

  // Handle signup
  const signup = async (e) => {
    e.preventDefault(); // ✅ Stop page reload
    console.log("Signup function executed", formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  };

  return (
    <div className="Login-page">
      <div className="Login-container">
        <h2>{state}</h2>

        {/* ✅ Proper form with preventDefault */}
        <form onSubmit={state === "Login" ? login : signup}>
          {state === "Sign Up" && (
            <div className="input-group">
              <input
                name="username"
                value={formData.username}
                onChange={changeHandle}
                type="text"
                placeholder="Enter your name"
                required
                autoComplete="name"
              />
            </div>
          )}

          <div className="input-group">
            <input
              name="email"
              value={formData.email}
              onChange={changeHandle}
              type="email"
              placeholder="Enter your email"
              required
              autoComplete="email"
            />
          </div>

          <div className="input-group">
            <input
              name="password"
              value={formData.password}
              onChange={changeHandle}
              type="password"
              placeholder="Enter your password"
              required
              autoComplete={
                state === "Login" ? "current-password" : "new-password"
              }
            />
          </div>

          <button type="submit" className="btn">
            Continue
          </button>
        </form>

        {/* ✅ Switch between login and signup */}
        {state === "Sign Up" ? (
          <p className="login-text">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              style={{ cursor: "pointer" }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="login-text">
            Create an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              style={{ cursor: "pointer" }}
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
