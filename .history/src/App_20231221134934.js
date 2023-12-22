import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";


function App() {
  const [mode, setMode] = useState('light');
  return (
    <> 
      <Navbar title = "TextUtils" aboutText = "About" mode={darkMode}/>
      <div className="container my-3">
      <TextForm heading = "Enter the text to analyze"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
