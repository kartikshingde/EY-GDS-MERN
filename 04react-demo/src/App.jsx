import { useState } from "react";
import "./App.css";

import Header from "./Header";
import Navbar from "./Navbar";
import Home from "./Home";


function App() {
  //JS
  // const [firstName, setFirstName] = useState("Kartik");

  const age = 21;
  const Name="Kartik"


  return (
    <>
      {/* { {age > 20 ? <h3>You can party</h3> : <h3>You cannot party</h3>} }   Ternary Operator */}

      <h1>Hello React !!! From App.jsx </h1>


      <Home Name={Name} age={age}/>
      <Header Name={Name}/>
      <Navbar/>
 
    </>
  );
}

export default App; 

// React fragment ->   <>...</>   like a empty div used to reduce extra memory usage
