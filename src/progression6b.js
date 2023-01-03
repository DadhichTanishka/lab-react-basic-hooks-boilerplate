import React,{useContext} from "react";
import { Toggletheme } from "./progression6a";
function UseContext() {
    const theme=useContext(Toggletheme);
    const themeStyle={
        backgroundColor:theme?"black":"grey",
        color:theme?"grey":"black",
        padding:"2rem",
        margin:"2rem"
    }
    return(
        <div style={themeStyle}>
        this is made by Tanishka
        </div>
    )
}
export default UseContext;