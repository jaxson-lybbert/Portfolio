import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import profilePicture from "../assets/Jaxson-Lybbert-Profile-Picture.png";

export default function About() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image
            id="profile"
            src={profilePicture}
            alt="Jaxson Lybbert Profile"
          />
          <h1>Jaxson Lybbert</h1>
        </Col>
      </Row>
      <Row>
        <h2>About Me</h2>
        <Col lg={12}>
          <p>
            I am an enthusiastic young developer. I am currently attending edX's
            Full Stack coding bootcamp through the University of Denver. The
            course is challenging but exciting, and I am looking forward to
            entering the professional world as a web developer. I excel in both
            front end and back end development, specializing in JavaScript ES6
            logic.
          </p>
        </Col>
        <Col lg={12}>
          <p>
            I first fell in love with coding when I was in high school. The
            first program I ever wrote was on a TI calculator, and all it did
            was multiply two numbers together and display the result. Now,
            calculators already do that, right? But there was something special
            about that moment.<i>I</i>
            did that! I was able to communicate with a machine to solve a
            problem.
          </p>
        </Col>
        <Col lg={12}>
          <p>
            Fast forward to today, and I am still just as fascinated by coding
            and all it has to offer. I'm excited to build applications that will
            bring real solutions to people and to continue this journey that
            started all those years ago.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
