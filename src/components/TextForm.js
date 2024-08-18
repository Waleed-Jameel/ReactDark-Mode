import React from "react";
import { useState } from "react";

const TextForm = (props) => {
  const rem = () =>{
    const vext = document.getElementById('text') ;
    vext.value = ''
   
  }
    const [text,setText] = useState() ;
  return (
    <>
     <div className="container">
     <h1 style={{color:props.textFormB}}>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1" style={{color:props.textFormB}} className="form-label">
          Example textarea
        </label>
        <textarea style={{backgroundColor:props.textFormB,color:props.textFormA,cursor:'pointer'}} 
          className="form-control my-2"
          id="text"
          onChange={(e)=>{setText(e.target.value)}}
          value={text}
          rows="5"
          // onMouseEnter={()=>{cursor:pointer}}
        ></textarea>
        <br></br>
        
        <button  onClick={()=>{setText(text.toUpperCase())
           props.showAlert("Converted to Upper case","success")}} className="btn btn-primary my-2 mx-2">Convert to UpperCase</button>
        <button  onClick={()=>{setText(text.toLowerCase())
        props.showAlert("Converted to Lower case","warning")}} className="btn btn-warning my-2 mx-2">Convert to LowerCase</button>
        <button  onClick={rem} className="btn btn-success mx-4 my-2">Convert to Empty</button>
      </div>

      <div className="container my-3">
        <h1 style={{color:props.textFormB}}>Your Text Summary</h1>
        <p style={{color:props.textFormB}}> Words and  Characters</p>
        <p style={{color:props.textFormB}}>{text}</p>
      </div>
    </>
  );
};

export default TextForm;


// import React from 'react'
// import { Link } from 'react-router-dom';

// const Page404 = () => {
//   return (
//     <div>
//       <h1>Page 404</h1>
//       <Link to="/" >Go to Main Page</Link>
//     </div>
//   )
// } ;

// export default Page404 ;