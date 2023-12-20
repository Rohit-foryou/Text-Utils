import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
      console.log("uppercase is clicked")
  }
  const handleOnChange = ()=>{
      console.log("On change")
  }
  const [text, setText] = useState('Enter your text');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
    </div>
  )
}
