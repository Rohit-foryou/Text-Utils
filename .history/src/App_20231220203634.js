import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <> 
      <Navbar title = "TextUtils" aboutText = "AboutTextutils"/>
      <TextForm/>
    </>
  );
}

export default App;
