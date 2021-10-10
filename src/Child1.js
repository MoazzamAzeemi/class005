import React, {useContext} from "react";
import ValueContext from "./ValueContext";

function Child1() {
    let v = useContext(ValueContext);
    return (
      <div className="green">
        <p>This is from Child1</p>
        <p>Current number from Child1 using useContext is {v[0]}</p>
        <button onClick={()=>{v[1](++v[0])}}>increase value</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{v[1](--v[0])}}>decrease value</button>
      </div>
    );
  }
  
export default Child1;