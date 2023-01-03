import React from "react";
import { useState } from "react";
import "./App.css"
function useState3(){
    const [state,setState]=useState({age:19,siblings:3})
    const handleState=(val)=>{
        setState({
            ...state,[val]:state[val]+1
        })
    }
    const{age , siblings}=state;
    return(
        <div>
            <h3>My current age is{age}</h3>
            <h4>my siblings{siblings}</h4>
            <button onClick={()=>{handleState("age")}}>age</button>
            <button onClick={()=>{handleState("siblings")}}>sib</button>

        </div>
    )
}
export default useState3