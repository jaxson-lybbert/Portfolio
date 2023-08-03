import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { validateEmail } from "../utils/helpers";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [sentMessage, setSentMessage] = useState(false);

  const contactForm = useRef();

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
    emailjs
      .sendForm(
        "service_h4zkx36",
        "template_6uhqz75",
        contactForm.current,
        "CbM_MVmtmbr5ZJmji"
      )
      .then(
        (result) => {
          console.log(result.text);

          setSentMessage(true);

          setTimeout(() => {
            setSentMessage(false);
          }, 10000);

          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
          setErrorMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h1>Contact</h1>
      {sentMessage && <Alert id="alert">Message sent!</Alert>}
      <Form ref={contactForm} onSubmit={handleFormSubmit}>
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
        <Button id="submitBtn" type="submit">
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
