import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import './assets/StudentListTodo.css'

function StudentsListTodo() {
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    email: "",
    age: 0,
  });
  const [studentList, setStudentList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  //Function to handle inputs changes
  function handleInput(event, field) {
    let result = event.target.value;
    const resultObj = { ...studentInfo, [field]: result };
    setStudentInfo(resultObj);
  }

  //function to add data in list
  function addData() {
    const data = [...studentList, studentInfo];
    setStudentList(data);
    setStudentInfo({
      name: "",
      email: "",
      age: 0,
    });
  }
  //To set value for Edit index
  const editData = (index) => {
    setEditIndex(index);
    setStudentInfo(studentList[index]);
  };

  function updateData() {
    const newList = studentList.map((item, index) =>
      index === editIndex ? studentInfo : item
    );
    setStudentList(newList);
    setEditIndex(null);
    setStudentInfo({
      name: "",
      email: "",
      age: "",
    });
  }
//   console.log(studentList);

const deleteData = (index) => {
    const newList = [...studentList]; 
    newList.splice(index, 1); 
    setStudentList(newList); 
  };
  

  return (
    <div>
      <div className="input" style={{display:"flex",justifyContent:"space-evenly",flexWrap:"nowrap",flexDirection:"column",alignItems:"center"}}>
        <br />
        <h1 className="heading">Welcome to Student Details Application</h1>
        <br />
        <label htmlFor="">Name : </label>
        <input
          type="text"
          placeholder="Enter Name"
          value={studentInfo.name}
          onChange={(event) => {
            handleInput(event, "name");
          }}
        />
        

        <label htmlFor="">Email : </label>
        <input
          type="text"
          placeholder="Enter Email"
          value={studentInfo.email}
          onChange={(event) => {
            handleInput(event, "email");
          }}
        />
        

        <label htmlFor="">Age : </label>
        <input
          type="text"
          placeholder="Enter age"
          value={studentInfo.age}
          onChange={(event) => {
            handleInput(event, "age");
          }}
        />
        <br />
        <br />

        {editIndex === null ? (
          <Button
            variant="success"
            onClick={addData}
            style={{ marginLeft: 20 }}
          >
            Add Details
          </Button>
        ) : (
          <>
            <Button variant="success" onClick={updateData}>
              Save Changes
            </Button>

            <Button variant="danger">Cancel Changes</Button>
          </>
        )}

        <br />
        <br />
      </div>

      <h3>Student Details:</h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => {
                    editData(index);
                  }}
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => {deleteData(index)}}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default StudentsListTodo;
