import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
      // console.log("uppercase is clicked" + text)
      let newText =  text.toUpperCase();
      setText(newText)
  }
  const handleOnChange = (event)=>{
      // console.log("On change")
      setText(event.target.value)
  }
  const [text, setText] = useState('Enter your text');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes Reading</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
