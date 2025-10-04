import {  useState } from "react";
import "./App.css";
import { toast } from "react-toastify";
import "../src/assets/components/checkbox.css"


export default function PasswordGenerator() {
  const [passLength, setPassLength] = useState(0);
  const [passParameters,setPassParameters] = useState([]);
  // const [password, setPassword] = useState(null); 

const handleClick = () => {
  if(passLength <= 7){
    toast.error("Length Must Be 8 characters Or More");
  }
  else{
    toast.success("Password Generated")
  }
}

const handleCheckBox = (e) => {
  const {value,checked} = e.target;
  if(checked){
     setPassParameters((prev) => [...prev,value])
  }
  else{
    setPassParameters((prev) => prev.filter((item) => item !== value));
  }
}

  return (
    <div className="app">
      {/* Navbar */}
      <div className="app-body">
        <h1>Password Generator</h1>
        <div className="tooltip"><p>Click On Password To Copy</p></div>
        <div className="passwordDisplay"> <input
          type="text"
          placeholder="Password Will Appear Here"
          className="PassLengthInput"
           disabled/></div>
       
          
  
<div className="check-box-list">
  <div><label htmlFor="uppercase"><input type="checkbox" id="uppercase" value="uppercase" onChange={handleCheckBox} className="ui-checkbox"/>Uppercase</label></div>
  <div><label htmlFor="lowercase"><input type="checkbox" id="lowercase" value="lowercase" onChange={handleCheckBox} className="ui-checkbox"/>lowercase</label></div>
  <div><label htmlFor="numbers"><input type="checkbox" id="numbers" value="numbers" onChange={handleCheckBox} className="ui-checkbox"/>numbers</label></div>
  <div><label htmlFor="special"><input type="checkbox" id="special" value="special" onChange={handleCheckBox} className="ui-checkbox"/>special</label></div>
</div>

             {/* footer */}
             <div className="footer-wrapper">
              <div className="input-wrapper"> 
                <input
          type="number"
          placeholder="Enter Password Length"
          className="PassLengthInput"
          value={passLength}
          onChange={(e)=> setPassLength(Number(e.target.value))}/>
          
        </div>

        <button className="Generate-Btn" type="button" onClick={handleClick}>Generate</button>
             </div>
       
      </div>

 

     
    </div>
  );
}
