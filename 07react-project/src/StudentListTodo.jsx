import React, { useState } from "react";

import "./assets/StudentListTodo.css";
// import Table from "react-bootstrap/Table";

function StudentListTodo() {
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    email: "",
    age: "",
    count:1
  });

  const [studentList, setStudentList] = useState([]);

  //Function to handle input changes
  let count=1
  function handleInput(event, field,count) {
    let result = event.target.value;
    const resultObj = { ...studentInfo, [field]: result,[count]:count};
    setStudentInfo(resultObj);
    count++

    // console.log(resultObj);
  }

  //Function to add data in list
  
  function addData() {
    
   
    const data = [...studentList, studentInfo];
    setStudentList(data);
    setStudentInfo({
      name: "",
      email: "",
      age: "",
      count:""
      
    });
    

  }
  console.log(studentList);

  //read Spread Operator Docs

  return (
    <div className="main">
      {/* <h3>
        Your Name: <span style={{ color: "red" }}>{studentInfo.name}</span>
      </h3>
      <h3>
        Your Email: <span style={{ color: "purple" }}>{studentInfo.email}</span>
      </h3>
      <h3>
        Your Age: <span style={{ color: "black" }}>{studentInfo.age}</span>
      </h3> */}

      <h2>Enter Deatails: </h2>

      <label htmlFor="">Name: </label>
      <input
        type="text"
        placeholder="Enter name"
        value={studentInfo.name}
        onChange={(event) => {
          handleInput(event, "name");
        }}
      />
      <br />

      <label htmlFor="">Email: </label>
      <input
        type="text"
        placeholder="Enter Email"
        value={studentInfo.email}
        onChange={(event) => {
          handleInput(event, "email");
        }}
      />
      <br />

      <label htmlFor="">Age: </label>
      <input
        type="number"
        placeholder="Enter Age"
        value={studentInfo.age}
        onChange={(event) => {
          handleInput(event, "age");
        }}
      />
      <br />
      <br />

      
      <button
        style={{ padding: 10 }}
        onClick={() => {
          addData(count);
        }}
      >
        Add Profile
      </button>
      <br /><br />
      <h4>Student Details are as Follows: </h4>

      <div>
        <table>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((item,index)=>(
              <tr key={index}>
                <td>{item.count}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentListTodo;
