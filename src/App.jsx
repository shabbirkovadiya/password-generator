import {  useEffect, useState } from "react";
import "./App.css";
import { toast } from "react-toastify";
import "../src/assets/components/checkbox.css"


export default function PasswordGenerator() {
  const [passLength, setPassLength] = useState(0);
  const [passParameters,setPassParameters] = useState(["uppercase","lowercase"]);
  const [finalPassword, setPassword] = useState(""); 
  const [isCopied,setIsCopied] = useState(false)


 const alphabetLower ="abcdefghijklmnopqrstuvwxyz"
 const alphabetUpper = alphabetLower.toUpperCase();
 const numbers = "0123456789"
 const specialChars = "!@#$%^&*_+-=;:,./";

 useEffect(()=>{
  let timer = setTimeout(() => {
    setIsCopied(false)
  }, 2000);


  return ()=> clearTimeout(timer);
}
  ,[isCopied])

const handleClick = () => {
  if (passLength < 8 || passLength > 20) {
    toast.error("Length must be between 8 and 20 characters");
    return;
  }
 
  else{
     if(passParameters.length <= 1){
     toast.error("Please Select atleast 2 parameters");
  }
  else {
    let password = "";

    for(let i = 0; i < passLength*2 ; i++){
      if(passParameters.includes("uppercase")){
        password += alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)];
      }
        if(passParameters.includes("lowercase")){
        password += alphabetLower[Math.floor(Math.random() * alphabetLower.length)];
      }
        if(passParameters.includes("numbers")){
        password += numbers[Math.floor(Math.random() * numbers.length)];
      }
        if(passParameters.includes("special")){
        password += specialChars[Math.floor(Math.random() * specialChars.length)];
      }
    }
    setPassword([...new Set(password)].join("").slice(0,passLength))
    toast.success("Password Generated");
  }
  }
};


const handleCheckBox = (e) => {
  const {value,checked} = e.target;
  if(checked){
     setPassParameters((prev) => [...prev,value])
  }
  else{
    setPassParameters((prev) => prev.filter((item) => item !== value));
  }
}

const handleCopy = () => {
navigator.clipboard.writeText(finalPassword)
setIsCopied(true)
}

  return (
    <div className="app">
      {/* Navbar */}
      <div className="app-body">
        <h1>Password Generator</h1>
        <div className="tooltip">{finalPassword === ""  ? <p className="hide">hide</p> : isCopied ?  <p className="copied-text">Password Copied !</p> : <p>Click On Password To Copy</p>}</div>
        <div className="passwordDisplay"
        onClick={handleCopy}
        > <input
          type="text"
          placeholder="Password Will Appear Here"
          className="PassLengthInput"
          value={finalPassword}
           disabled/>
           <button>Copy Button</button>
           </div>
       
          
  
<div className="check-box-list">
  <div><label htmlFor="uppercase"><input type="checkbox" id="uppercase" value="uppercase" onChange={handleCheckBox} className="ui-checkbox" checked={passParameters.includes("uppercase")}/>Uppercase</label></div>
  <div><label htmlFor="lowercase"><input type="checkbox" id="lowercase" value="lowercase" onChange={handleCheckBox} className="ui-checkbox" checked={passParameters.includes("lowercase")}/>lowercase</label></div>
  <div><label htmlFor="numbers"><input type="checkbox" id="numbers" value="numbers" onChange={handleCheckBox} className="ui-checkbox" checked={passParameters.includes("numbers")}/>numbers</label></div>
  <div><label htmlFor="special"><input type="checkbox" id="special" value="special" onChange={handleCheckBox} className="ui-checkbox"checked={passParameters.includes("special")} />special</label></div>
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
