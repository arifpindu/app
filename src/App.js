import * as React  from "react";
import { useState } from "react";
import "./App.css";
import './index.css'
import Textform from "./Components/Textform";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import About from './Components/About'
import { Routes, Route } from "react-router-dom"

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log("hello");
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  return (
    <>
     <Routes>
        <Route path="/" element={ <> <Navbar text="MyWebsite" mode={theme} toggleTheme={toggleTheme} />
        <Alert alert={alert}></Alert>
        <div className="container my-4">
          <Textform heading="Enter text:" alert={showAlert} mode={theme}></Textform>
            </div> </> } />
        <Route path="about" element={<>  <Navbar text="MyWebsite" mode={theme} toggleTheme={toggleTheme} />
        <Alert alert={alert}></Alert>
        <div className="container my-4">
          <About></About>
            </div></>} />
     
      </Routes>
     
       
       
      
    </>
  );
}

export default App;
