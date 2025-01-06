import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './NewStudentForm.css'

function NewStudentForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  function handleInput(event, fieldName) {
    const result = event.target.value;

    if (fieldName === "firstName") {
      setFirstName(result);
    } else if (fieldName === "lastName") {
      setLastName(result);
    } else if (fieldName === "age") {
      setAge(result);
    }
    // console.log(result,fieldName)
  }

  return (
    <div>
      <div className="products">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Card.Body>
            <Card.Title>S24 Ultra</Card.Title>
            <Card.Text>
              Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB,
              256GB Storage)
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.amazon.in/Samsung-Smartphone-Titanium-Storage-_without/dp/B0CT5BJC16/ref=sr_1_1?adgrpid=157855484357&dib=eyJ2IjoiMSJ9.ffRO-Sv2k0eXWrxGcHbapTW27nQn62_-Fus3NWEeEYbctmeNw3wU1hQLzpBwr5JAvqQsBHS_Ob9OzB_JSYK6PBcfoMBAYGo7gZcZ6jAzBQBI630WPuCh2DvctW1J4wwfCbcfV10kaGBgExYSbt2EDT-3tniB_rAtodzmQqycd6uDdiLuReT4AKvzNTxRqu98Kf9iOud4UwQRsTuWsg-qAzpBByY11asokFqpHm-45ps.wLzM7qKD1TbUzumQxuIzQo9muCOxJv4QpBOoRKRK2Hw&dib_tag=se&gad_source=1&hvadid=688036487431&hvdev=c&hvlocphy=1007788&hvnetw=g&hvqmt=e&hvrand=6763990933097781134&hvtargid=kwd-2246404753384&hydadcr=24567_2265462&keywords=s24%2Bultra%2Bamazon&nsdOptOutParam=true&qid=1735974558&sr=8-1&th=1"
              target="blank"
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Card.Body>
            <Card.Title>S24 Ultra</Card.Title>
            <Card.Text>
              Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB,
              256GB Storage)
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.amazon.in/Samsung-Smartphone-Titanium-Storage-_without/dp/B0CT5BJC16/ref=sr_1_1?adgrpid=157855484357&dib=eyJ2IjoiMSJ9.ffRO-Sv2k0eXWrxGcHbapTW27nQn62_-Fus3NWEeEYbctmeNw3wU1hQLzpBwr5JAvqQsBHS_Ob9OzB_JSYK6PBcfoMBAYGo7gZcZ6jAzBQBI630WPuCh2DvctW1J4wwfCbcfV10kaGBgExYSbt2EDT-3tniB_rAtodzmQqycd6uDdiLuReT4AKvzNTxRqu98Kf9iOud4UwQRsTuWsg-qAzpBByY11asokFqpHm-45ps.wLzM7qKD1TbUzumQxuIzQo9muCOxJv4QpBOoRKRK2Hw&dib_tag=se&gad_source=1&hvadid=688036487431&hvdev=c&hvlocphy=1007788&hvnetw=g&hvqmt=e&hvrand=6763990933097781134&hvtargid=kwd-2246404753384&hydadcr=24567_2265462&keywords=s24%2Bultra%2Bamazon&nsdOptOutParam=true&qid=1735974558&sr=8-1&th=1"
              target="blank"
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Card.Body>
            <Card.Title>S24 Ultra</Card.Title>
            <Card.Text>
              Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB,
              256GB Storage)
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.amazon.in/Samsung-Smartphone-Titanium-Storage-_without/dp/B0CT5BJC16/ref=sr_1_1?adgrpid=157855484357&dib=eyJ2IjoiMSJ9.ffRO-Sv2k0eXWrxGcHbapTW27nQn62_-Fus3NWEeEYbctmeNw3wU1hQLzpBwr5JAvqQsBHS_Ob9OzB_JSYK6PBcfoMBAYGo7gZcZ6jAzBQBI630WPuCh2DvctW1J4wwfCbcfV10kaGBgExYSbt2EDT-3tniB_rAtodzmQqycd6uDdiLuReT4AKvzNTxRqu98Kf9iOud4UwQRsTuWsg-qAzpBByY11asokFqpHm-45ps.wLzM7qKD1TbUzumQxuIzQo9muCOxJv4QpBOoRKRK2Hw&dib_tag=se&gad_source=1&hvadid=688036487431&hvdev=c&hvlocphy=1007788&hvnetw=g&hvqmt=e&hvrand=6763990933097781134&hvtargid=kwd-2246404753384&hydadcr=24567_2265462&keywords=s24%2Bultra%2Bamazon&nsdOptOutParam=true&qid=1735974558&sr=8-1&th=1"
              target="blank"
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        
      </div>

      <br />

      <label htmlFor="">First Name: </label>
      <input
        type="text"
        onChange={(event) => {
          handleInput(event, "firstName");
        }}
      />

      <br />

      <label htmlFor="">Last Name :</label>
      <input
        type="text"
        onChange={(event) => {
          handleInput(event, "lastName");
        }}
      />
      <br />

      <label htmlFor="">Age: </label>
      <input
        type="number"
        onChange={(event) => {
          handleInput(event, "age");
        }}
      />

      <h2>Your Inputs are: </h2>

      <h3>
        First Name: <span style={{ color: "red" }}>{firstName}</span>
      </h3>
      <h3>
        Last Name: <span style={{ color: "pink" }}>{lastName}</span>
      </h3>
      <h3>
        Age Name: <span style={{ color: "yellow" }}>{age}</span>
      </h3>
    </div>
  );
}

export default NewStudentForm;
