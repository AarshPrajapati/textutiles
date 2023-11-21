import { useState } from "react"
import React  from 'react'


export default function Textform(props) {
    const handleUpclick = () =>{
        // console.log("Hello");
        let newtext=text.toUpperCase();
        if(newtext===""){
          props.showAlert("Please Enter the text in Textbox","danger");
        }
        else if(text===newtext){
          props.showAlert("Text Already in UperCase buddy!","primary");
        }
        else{
          setText(newtext);
          props.showAlert("Text Converted into UperCase","success");
        }
    }

    const handleClearclick = () =>{
        // console.log("Hello");
        let newtext='';
        setText(newtext);
        props.showAlert("Text Clear","success");
    }

    const handlelowclick = () =>{
      // console.log("Hello");
      let newtext=text.toLowerCase();
      if(newtext===""){
        props.showAlert("Please Enter the text in Textbox","danger");
      }
      else if(text===newtext){
        props.showAlert("Text Already in LowerCase buddy!","primary");
      }
      else{
        setText(newtext);
        props.showAlert("Text Converted into LowerCase","success");
      }
      
  }

    const handleUpchange = (event) =>{
        // console.log("Hello");
        setText(event.target.value);
    }
    const [text,setText]= useState('Enter Text here');
  return (
    <>
    <div>
    <div className="mb-3 container" style={{color: props.mode==='dark'?'white':'black'}}>{/*ternary operator just like if-else and use {{}} to write style in React JS*/}
    <h1>Enter the text to analyze below</h1><br/>
        {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
         <textarea className="form-control" value={text} onChange={handleUpchange} id="exampleFormControlTextarea1" rows="3" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'#0b5871':'white'}}></textarea>
         <br></br>
         <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>ToUpperCase</button>
         <button className="btn btn-primary mx-1 my-1" onClick={handlelowclick}>ToLowerCase</button>
         <button className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear Text</button>
         <br/><br/>
         <h2>Your text summery</h2>
         <div>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</div>
         <h2>Preview</h2>
         <p>{text===""?"Enter Something in the Textbox for Preview":text}</p>
    </div>
    </div>
    </>
  )
}
