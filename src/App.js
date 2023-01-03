import React from 'react';
import { useState } from 'react';
import './App.css';

function UseState() {
  const [currAge,setAge]=useState(19);

//  const handleAge=()=>{
//   setAge(currAge+1);
//  }
 return(
  <div>
    <h3>My current age is {currAge}</h3>
    <button onClick={()=>setAge(currAge+1)}>Get older</button>
  </div>
 )
}

export default UseState;
