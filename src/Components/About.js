import { useState } from "react"
import React from 'react'//rcf

export default function About(props) {
    // const [Mystyle,setMystyle]=useState({
    //     color:'red',
    //     backgroundcolor:'black'
    // })
    let Mystyle={
        color: props.mode==='dark'?'white':'black',
        backgroundColor : props.mode==='dark'?'#0b5871':'white'
    }
    // const [Mystyle,setMystyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const [btnMode,setbtnMode]=useState('DarkMode');
    // const DarkLight=()=>{
    //     if(Mystyle.color==="black"){
    //         setMystyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         });
    //         setbtnMode('LightMode');
    //      }
    //      else{
    //         setMystyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         });
    //         setbtnMode('DarkMode');
    //      }
    // }
  return (
    <div style={{border : "3px solid", color:props.mode==='dark'?'white':'black'}}>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={Mystyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button style={Mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" style={Mystyle} data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button style={Mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div style={Mystyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button style={Mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div style={Mystyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
        </div>
      </div>
      {/* <button onClick={DarkLight} className="btn btn-primary my-4 mx-2">{btnMode}</button> */}
    </div>
  )
}
