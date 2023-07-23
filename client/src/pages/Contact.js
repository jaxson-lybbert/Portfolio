import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Form>
      <Row>
        <Col>
          <Form.Control
            value={firstName}
            name="firstName"
            onChange={handleInputChange}
            placeholder="First name"
          />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
    </Form>
    // <div>
    //   <p>
    //     If you have any questions or would like to contact me, please fill out
    //     the following form, and I'll get back to you as soon as I can.
    //   </p>
    //   <form className="form">
    //     <input
    //       value={firstName}
    //       name="firstName"
    //       onChange={handleInputChange}
    //       type="text"
    //       placeholder="First Name"
    //     />
    //     <input
    //       value={lastName}
    //       name="lastName"
    //       onChange={handleInputChange}
    //       type="text"
    //       placeholder="Last Name"
    //     />
    //     <input
    //       value={email}
    //       name="email"
    //       onChange={handleInputChange}
    //       type="email"
    //       placeholder="Email"
    //     />
    //     <textarea
    //       rows="5"
    //       cols="60"
    //       value={message}
    //       name="message"
    //       onChange={handleInputChange}
    //       placeholder="Enter message here"
    //     ></textarea>
    //     <button type="button" onClick={handleFormSubmit}>
    //       Submit
    //     </button>
    //   </form>
    //   {errorMessage && (
    //     <div>
    //       <p className="error-text">{errorMessage}</p>
    //     </div>
    //   )}
    // </div>
  );
}
