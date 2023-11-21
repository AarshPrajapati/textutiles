import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:"70px"}}>
   {props.alert && <div>
      <div class={`alert alert-${props.alert.type}`} role="alert">
        {props.alert.msg}
    </div>
    </div>}
    </div>
  )
}
