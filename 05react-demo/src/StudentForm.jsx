import React, { useState } from "react";

function StudentForm() {
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const handleFirstName = (event) => {
    // console.log(event)
    let firstResult = event.target.value;
    setFirstName(firstResult);
  };
  const handleLastName = (event) => {
    let lastResult = event.target.value;
    setLastName(lastResult);
  };

  return (
    <div>
      <label htmlFor="firstname">First Name: </label>
      <input type="text" value={firstName} onChange={handleFirstName} />
      <br />
      <label htmlFor="lastname">Last Name: </label>
      <input type="text" value={lastName} onChange={handleLastName} />

      <h2>Your Inputs are: </h2>

      <h3>First Name: <span style={{color:'red'}}>{firstName}</span></h3>

      <h3>Last Name: <span style={{color:'pink'}}>{lastName}</span></h3>
    </div>
  );
}

export default StudentForm;