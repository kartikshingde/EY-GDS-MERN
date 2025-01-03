import React, { useEffect, useState } from "react";

function MainComponenet() {
  const [result, setResult] = useState(0);
  const [count, setCount] = useState(0);

  const [studentName, setStudentName] = useState([
    {name:"Kartik",id:1,age:21,email:"sk@gmail.com"},
    {name:"sandip",id:2,age:22,email:"ss@gmail.com"}
    

  ]);

  function addCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    //useEffect takes 2 parameters-> 1.Arror Fn 2.Dependency Array/component
    function sum(a, b) {
      setResult(result + a + b);
    }
    sum(4, 7);
  }, [count]);
  //   console.log(result);

  console.log(studentName);

  return (
    //map is used to render list on UI

    <div>
      <ul style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:25}}>
        {studentName.map((element) => (
          <React.Fragment key={element.id}>
            <li>{element.name}</li>
            <li>{element.age}</li>
          </React.Fragment>  
        ))}
      </ul>

      <h2>Result:{result}</h2>
      {count}
      <button onClick={addCount}>Add</button>
    </div>
  );
}

export default MainComponenet;
