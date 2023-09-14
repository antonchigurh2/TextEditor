import './App.css';
import React, { useState } from 'react'
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
/*import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";*/

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
     },2000)
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.title="TextUtils-Darkmode";
      showAlert("Darkmode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title="TextUtils-Lightmode";
      showAlert("Lightmode has been enabled","success");
    }

  }
  return (
   <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3" >


    <TextForm showAlert={showAlert} heading=" Enter the text to analyse below" mode={mode}/>
    

  

{/*<About/>*/}
</div>
   </>
  );
}

export default App;
