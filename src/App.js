import logo from './logo.svg';
// import { Switch , Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React ,{ useState, useEffect } from 'react';
import { BrowserRouter,Link,Router,Route,Routes } from 'react-router-dom';
     

function App() {
  const [mode,setMode] = useState("light") ;
  const [modeTxt,setModeTxt] = useState('Enable Dark Mode') ;
  const [colorMode,setColorMode] = useState("dark") ;
  const [textFormB,setTextFormB] = useState("grey") ;
  const [textFormA,setTextFormA] = useState("white") ;
  const [alert,setAlert] = useState(true) ;
  const [myStyle,setMyStyle] = useState({  color: "black",
        backgroundColor : "white" ,
        border : "1px solid black" 
});

// function start
  const showAlert = (message,type) =>{
    setAlert({
      msg : message ,
      type : type
    })
  } ;

  const togglemode = () =>{
    if(mode === "dark"){
        setMode( "light") ;
        setModeTxt('Enable Dark Mode') ;
        setColorMode( "dark") ;
        document.body.style.backgroundColor="white";
        setTextFormB('grey') ;
        setTextFormA('white') ;
        showAlert("Dark mode disabled","primary");
        document.title='Light Mode' ;
        setMyStyle({  color: "black",  backgroundColor: "white",
        border : "1px solid black"}) ;
    }else{ 
      setMode("dark");
      setModeTxt( 'Enable Light Mode' );
      setColorMode( "light") ;
      document.body.style.backgroundColor="#343434";
      setTextFormB('white') ;
      setTextFormA('black') ;
      showAlert("Light mode disabled","danger");
      document.title="Dark Mode" ;
      setMyStyle({  color: "white",  backgroundColor: "black",
      border : "1px solid white"});
    }
  }
  return (
    <>
       <BrowserRouter>
       <Navbar  colorMode={colorMode} modeTxt={modeTxt} mode={mode} jode={togglemode} title="TextUtility" aboutText="About TextUtility" />
       <Routes>
       <Route path="/alert" element={<Alert alert={alert} />} /> 
       <Route path="/textform" element={<TextForm textFormA={textFormA} textFormB={textFormB} showAlert={showAlert} heading="Enter text Here for Magic" mode={mode}  /> } />
       <Route path="/about" element={<About myStyle={myStyle} />} />    
     
       </Routes>
       </BrowserRouter>
     </>

  );
}

export default App;


