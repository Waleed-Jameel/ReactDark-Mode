import React from 'react'


const Alert = (props) => {
    const capitalize = (word)=>{
       const lower = word.toLowerCase() 
       return lower.charAt(0).toUpperCase() + lower.slice(1)  ; 
    }
  return (
    <>
       <div className={`alert alert-${props.alert.type} alert-dismissible fade show m-2" role="alert"`}>
         <strong>{props.alert.type}</strong> : {props.alert.msg} 
       </div>
    </>
  )
}

export default Alert

// import React from "react";
// import {BrowserRouter ,Router , Link } from 'react-router-dom' ;
// import About from "./About";
// function Home(){
//   return(
//     <>
//      <div className="container">
//         <h1>Home Component</h1>
//         <p>This is Home Page for us in React JS.
//       </p>
//       <Link to="/about">Go to  About page</Link><br></br>
//       <Link to="/" >Go to Main Page</Link>
//      </div>  
//     </>
//   )
// }
// export default Home ;