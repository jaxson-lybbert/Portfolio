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

    // Add actual emailing capability here later

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div>
      <h1>Contact</h1>
      <Form>
        <Row>
          <Col>
            <h3>Name</h3>
            <Form.Control
              value={firstName}
              name="firstName"
              onChange={handleInputChange}
              placeholder="First name"
            />
            <Form.Control
              value={lastName}
              name="lastName"
              onChange={handleInputChange}
              placeholder="Last name"
            />
          </Col>
          <Col>
            <h3>Email</h3>
            <Form.Control
              value={email}
              name="email"
              onChange={handleInputChange}
              placeholder="Email"
            />
          </Col>
          <Col>
            <h3>Message</h3>
            <Form.Control
              value={message}
              name="message"
              onChange={handleInputChange}
              as="textarea"
              placeholder="Type your message here"
              style={{ minWidth: "50%", height: "100px" }}
            />
          </Col>
        </Row>
        <Button id="submitBtn" type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
