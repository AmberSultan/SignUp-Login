import React, { useState } from 'react';
import './LoginSignup.css';

import peopleImage from '../component/images/people.png';
import emailImage from '../component/images/email.png';
import passwordImage from '../component/images/padlock.png';

const LoginSignup = () =>{

    //const[variableName , action] = useState(' ');
  const[action, setAction] = useState('Sign Up');  


  return (
    <div className='container'>
      <div className="header">
        <div className="heading">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
      {action === "Login" ? <div></div>:
        <div className="input">
          <img src={peopleImage} alt="people" />
          <input type="text" placeholder='Name' />
        </div>}
        <div className="input">
          <img src={emailImage} alt="email" />
          <input type="email" name="" id="" placeholder='Email'/>
        </div>
        <div className="input">
          <img src={passwordImage} alt="password" />
          <input type="password" name="" id="" placeholder='Password' />
        </div>
      </div>
      {action === "Sign Up" ? <div></div> :  <div className="forget">
        <p>Forget password? <span><a href="/">Click here</a></span></p>
      </div>}
     
      <div className="buttons">
        <button className ={action==="Login"?"submit gray":"submit"} type="button" onClick={()=>{setAction("Sign Up")}}>Signup</button>
        <button className ={action==="Sign Up"?"submit gray":"submit"} type="button" onClick={()=>{setAction("Login")}}>Login</button>
      </div>
    </div>
  );
};

export default LoginSignup;
