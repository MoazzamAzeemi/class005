import React, {useReducer} from "react";
import numberReducer from "./numberReducer";

function Child2() {
    let [state, dispatch] = useReducer(numberReducer, 99);

    return (
      <div className="yellow">
        <p>This is Child2</p>
        <p>Current state from useReducer is : {state}  </p>
        <button onClick={()=>{dispatch({type:"Add", val:27});}}>Add</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{dispatch({type:"Subtract", val:45});}}>Subtract</button>
      </div>
    );
  }

export default Child2;