import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function StudentsListTodo() {
    const [studentInfo, setStudentInfo] = useState({
        name: "",
        email: "",
        age: 0,
    });
    const [studentList, setStudentList] = useState([]);
    const [editIndex, setEditIndex] = useState(null)

    //Function to handle inputs changes
    function handleInput(event, field) {
        let result = event.target.value
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
    }

    function updateData(){
        const newList =studentList.map((item,index) =>
            index === editIndex ? studentInfo : item
        );
        setStudentList(newList);
        setEditIndex(null);
        setStudentInfo({
            name: "",
            email: "",
            age: 0,
        });
    }

    console.log(studentList);


    return (
        <div>

            <label htmlFor="">Name : </label>
            <input
                type="text" placeholder="Enter Name"
                value={studentInfo.name}
                onChange={(event) => {
                    handleInput(event, "name")
                }} /><br />

            <label htmlFor="">Email : </label>
            <input type="text" placeholder="Enter Email"
                value={studentInfo.email} onChange={(event) => {
                    handleInput(event, "email")
                }} /><br />

            <label htmlFor="">Age : </label>
            <input type="text" placeholder="Enter age"
                value={studentInfo.age}
                onChange={(event) => {
                    handleInput(event, "age")
                }} /><br />
                <br />

            {editIndex === null ? (
                <button onClick={addData}>Add Profile</button>
            ) : (
                <>
                    <button onClick={updateData} style={{backgroundColor:'green'}}>Save Changes</button>
                    
                    <button style={{backgroundColor:'red'}}>Cancel Changes</button>
                </>
            )}

            <h3>Student List</h3>

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
                                <Button variant="info" onClick={() => { editData(index) }}>Edit</Button>
                            </td>
                            <td>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>


    )
}

export default StudentsListTodo