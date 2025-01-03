import React, { useEffect, useState } from "react";
import './Data.css'

function Data() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    async function getData() {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await result.json();

      console.log(data);
      setTodoList(data);
    }
    getData();
  });

  return (
    <div>
      {todoList.map((element) => (
        <div id="complete"  style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:25,} } key={element.id}>
            <div className="complete">
               {
                element.completed && <h3>{element.title}</h3>
               }
            </div>
            <div className="incomplete">
            {
                element.completed?<h1>{element.title}</h1>:""
            }

            </div>
            {/* <div className="incomplete">
                if({element.completed===false})
                <h6>{element.title}</h6>
            </div> */}
          {/* {element.completed === true ? (
            <h1>{element.title}</h1>
          ) : (
            <h6>{element.title}</h6>
          )} */}
        </div>
      ))}
    </div>
  );
}

export default Data;
