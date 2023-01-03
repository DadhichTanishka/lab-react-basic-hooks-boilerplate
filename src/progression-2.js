import React ,{userState, useState} from 'react'

function UseState2() {
 const [currAge,setAge]=useState(19);
 const [currSib,setSib]=useState(1);

 const handleAge=()=>{
    setAge(currAge+1);
 }
 const handleSib=()=>{
    setSib(currSib+1);
 }
 return (
    <div>
        <h3>My current age is {currAge}</h3>
        <h4>My siblings {currSib}</h4>
        <button onClick={handleAge}>Get older</button>
        <button onClick={handleSib}>get more sib</button>
    </div>
 )
}

export default UseState2;