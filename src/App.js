
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState('null');
  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert('null');
        }, 1500);
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />} />
          <Route path="/about" element={<About />} /> {/* Add route for About */}
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
