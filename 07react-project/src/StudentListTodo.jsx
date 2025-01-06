import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./assets/StudentListTodo.css";

function StudentListTodo() {
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    email: "",
    age: '',
  });

  function handleInput(event, field) {
    let result = event.target.value;

    const resultObj = { ...studentInfo, [field]: result };
    setStudentInfo(resultObj)

    console.log(resultObj);
  }

  return (
    <div className="main">

      <h3>Your Name: <span style={{color:'red'}}>{studentInfo.name}</span></h3>
      <h3>Your Email: <span style={{color:'purple'}}>{studentInfo.email}</span></h3>
      <h3>Your Age: <span style={{color:'black'}}>{studentInfo.age}</span></h3>

      <form action="">
        <label htmlFor="">Name: </label>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(event) => {
            handleInput(event, "name");
          }}
        />
        <br />

        <label htmlFor="">Email: </label>
        <input type="text" placeholder="Enter Email" onChange={(event)=>{
            handleInput(event,"email")
        }}/>
        <br />

        <label htmlFor="">Age: </label>
        <input type="number" placeholder="Enter Age" onChange={(event)=>{
            handleInput(event,"age")
        }}/>
        <br />

        <button>Add Profile</button>
      </form>
    </div>
  );
}

export default StudentListTodo;
