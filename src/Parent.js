import React from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent() {
    return (
      <div className="blue">
        <p>This is from Parent</p>
        <Child1 />
        <Child2 />
      </div>
    );
  }
  
  export default Parent;