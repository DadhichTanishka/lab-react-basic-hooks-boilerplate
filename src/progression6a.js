import React, { useState } from "react";
import './App.css';
import UseContext from "./progression6b";
export const Toggletheme=React.createContext()
function Progression6(){
    const [state,setState]=useState(true)
    const handleToggle=()=>{
        setState(state=>!state)
    }
    return(
        <Toggletheme.Provider value={state}>
            <button onClick={handleToggle}>Toggle</button>
            <UseContext/>
        </Toggletheme.Provider>
    )
}
export default Progression6;