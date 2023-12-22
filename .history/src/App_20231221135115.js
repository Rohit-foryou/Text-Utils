import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";


function App() {
  const [mode, setMode] = useState('dark');
  return (
    <> 
      <Navbar title = "TextUtils" aboutText = "About" mode={mode}/>
      <div className="container my-3">
      <TextForm heading = "Enter the text to analyze"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
