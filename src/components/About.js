import React, { useState } from "react";

const About = (props) => {
      const [myStyle,setMyStyle] = useState({  color: "black",
          backgroundColor: "white"
  });
  const [btnText,setBtnText] = useState('Enable  Dark Mode');
  const dark = () =>{
    if(myStyle.color == 'black'){
        setMyStyle({ color : "white",
        backgroundColor : "black"
      })
      setBtnText('Enable Light Mode');
    }else{
        setMyStyle({ color: "black",
        backgroundColor: "white"
      })
      setBtnText('Enable Dark Mode');
    }
  }

  return (
    <>
      <div className="container my-3" style={props.myStyle}>
        <h1 className="my-3">About Us</h1>

        <div class="accordion my-3" id="accordionPanelsStayOpenExample">
          <div class="accordion-item" style={props.myStyle}>
            <h2 class="accordion-header">
              <button
                style={props.myStyle}
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. 
              </div>
            </div>
          </div>
          <div class="accordion-item" style={props.myStyle}>
            <h2 class="accordion-header">
              <button
                style={props.myStyle}
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. 
              </div>
            </div>
          </div>
          <div class="accordion-item  " style={props.myStyle}>
            <h2 class="accordion-header">
              <button
                style={props.myStyle}
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse "
            >
              <div class="accordion-body ">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. 
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-outline-danger my-4" onClick={dark} >
          {btnText}
        </button>
      </div>
    </>
  );
};

export default About;

// import React, { useState } from "react";

// const About = () => {

//     const [myStyle,setMyStyle] = useState({  color: "black",
//         backgroundColor: "white"
// });
// const [btnText,setBtnText] = useState('Enable  Dark Mode');
//       const dark = () =>{
//         if(myStyle.color == 'black'){
//             setMyStyle({ color : "white",
//             backgroundColor : "black"
//           })
//           setBtnText('Enable Light Mode');
//         }else{
//             setMyStyle({ color: "black",
//             backgroundColor: "white"
//           })
//           setBtnText('Enable Dark Mode');
//         }
//       }

//      return (
//     <>
//       <div className="container" style={myStyle}>
//         <h1 className="my-3">About Us</h1>

//         <div class="accordion" id="accordionPanelsStayOpenExample">
//   <div class="accordion-item" style={myStyle}>
//     <h2 class="accordion-header">
//       <button style={myStyle} class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
//         Accordion Item #1
//       </button>
//     </h2>
//     <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
//       <div class="accordion-body">
//         <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div class="accordion-item" style={myStyle}>
//     <h2 class="accordion-header">
//       <button style={myStyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
//         Accordion Item #2
//       </button>
//     </h2>
//     <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
//       <div class="accordion-body">
//         <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
//   <div class="accordion-item" style={myStyle}>
//     <h2 class="accordion-header">
//       <button style={myStyle} class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
//         Accordion Item #3
//       </button>
//     </h2>
//     <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
//       <div class="accordion-body">
//         <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//     </div>
//   </div>
// </div>
//         <button className="btn btn-outline-danger my-4" onClick={dark} >
//           {btnText}
//         </button>
//       </div>
//     </>
//   );
// };

// export default About;
