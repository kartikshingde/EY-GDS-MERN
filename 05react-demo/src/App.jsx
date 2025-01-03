
import './App.css'

import Header from "./Header";
import Navbar from "./Navbar";
import Home from "./Home";
import { useState } from "react";

import AddCount from "./AddCount";
import DecreaseCount from "./DecreaseCount";
import MainComponenet from "./MainComponenet";
import Data from "./Data";

function App() {
  //JS
  const [count,setCount]=useState(0)
  // const [color,setColor]=useState('red')
  
  // console.log(count)
  const age = 21;
  const Name="Kartik"
  function addCount() {
        
      setCount(count+1)
      
      
      
  }
  function decreaseCount(){
    setCount(count-1)
  }



  return (
    <>
      {/* { {age > 20 ? <h3>You can party</h3> : <h3>You cannot party</h3>} }   Ternary Operator */}

      {/* <h1>Hello React !!! From App.jsx </h1> */}


      {/* <Home Name={Name} age={age}/>
      <Header Name={Name}/>
      <Navbar/> */}

      
      {/* <div >
        <h2>Count is {count}</h2>
        <br />
      </div> */}

      {/* <AddCount addCount={addCount}/>
      <DecreaseCount decreaseCount={decreaseCount}/> */}

      {/* <MainComponenet /> */}
      <Data/>
 
    </>
  );
}

export default App; 

// React fragment ->   <>...</>   like a empty div used to reduce extra memory usage
