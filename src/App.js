// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import {useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Routes, Link } from "react-router-dom";


function App() {
  //Dark-Light Mode
  //Use Mode to print value of variable and use setMode for change or assign the value for the variable
  //Use {} to use React js Variable in HTML
  const [Mode,SetMode]=useState('light');

  const toggleMode=()=>{
    if(Mode==='light'){
      SetMode('dark');
      document.body.style.backgroundColor = '#0b5871';
      ShowAlert("Dark mode Enable","success")
      document.title="TextUtils Home - Dark Mode";
    }
    else{
      SetMode('light');
      document.body.style.backgroundColor = 'White';
      ShowAlert("Light mode Enable","danger")
      document.title="TextUtils Home - Light Mode";
    }
  }

  //Alert
  const [alert,setalert]=useState(null);

  const ShowAlert=(message,type)=>{
        setalert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setalert(null);
        }, 2000);
  }

  return (
    <>   
     <BrowserRouter> 
    {/* pass the value as a props(mode)  also pass the arrow function*/}
     <Navbar title="Aarsh" mode={Mode} ToggleMode={toggleMode} alert={alert}/> 
     <Alert alert={alert}/>
     <div className="container">
    
        <Routes>
            <Route path="/about" element={<About mode={Mode}/>}>
            {/* <About />    */}
            </Route>
            {/* <Route path="/">
            <Users />
          </Route>  */}
           <Route path="/" element={<Textform showAlert={ShowAlert} mode={Mode}/>}>
            {/* <Textform showAlert={ShowAlert} mode={Mode}/> */}
            {/* <Home /> */}
           </Route>
        </Routes>
        </div>
        </BrowserRouter>
        
      
        
      {/* <Navbar/> */}
    </>
  );
}

export default App;
