import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
      // console.log("uppercase is clicked" + text)
      let newText =  text.toUpperCase();
      setText(newText)
  }
  const handleLowClick = ()=>{
      let newText =  text.toLowerCase();
      setText(newText)
  }
  const handleClearClick = ()=>{
      let newText =  '';
      setText(newText)
  }
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Unable to copy text to clipboard', error);
      });
  };
  const handleOnChange = (event)=>{
      // console.log("On change")
      setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-success mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>Reset</button>
        <button className="btn btn-warning mx-2" onClick={handleCopyClick}>Copy</button>
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>Total Words - {text.split(" ").length} ||  Total Characters - {text.length}</p>
      <p>Reading Time in min - {0.008*text.split(" ").length}  </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
