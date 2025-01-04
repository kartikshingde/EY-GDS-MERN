import React from "react";

import "./assets/StyleLearn.css";

function StyleLearn() {
  const firstName = "Kartik";
  let lastName = "Shingde";
  const age=26
  return (
    <>
      <div className="center-class"><h1>Hello Class</h1></div>
      
      <h1 style={{color:'red'}}>Good Morning!!</h1>

      <h3 style={{backgroundColor:age>20?'aqua  ':'red'}}>Hi Friends</h3>

      {age>24?<h4>You Can Party</h4>:<h2>You Cant Party</h2>}
    </>
  );
}

export default StyleLearn;
