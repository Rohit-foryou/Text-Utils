import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
      console.log("uppercase is clicked" + text)
      let newText =  text.toUpperCase();
      setText(newText)
  }
  const handleOnChange = (event)=>{
      console.log("On change")
      setText(event.target.value)
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
