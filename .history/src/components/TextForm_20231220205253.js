import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('Enter your text');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary">Convert To UpperCase</button>
    </div>
  )
}
