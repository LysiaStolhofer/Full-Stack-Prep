import React from "react";
import { Form, Col, Row, Spinner } from "react-bootstrap";
import { BrowserRouter as Route, Link } from "react-router-dom";
import { QuestionCard } from "../components";

const Prep = () => {
  return (
    <React.Fragment>
      <h2 className="text-center">Prep for Your Interview</h2>

      <Form>
        <Form.Row className="justify-content-center">
          <Form.Group as={Col} xs={4} md={4} controlId="formInputTopic">
            <Form.Label>Select Full Stack Topic</Form.Label>
            <Form.Control as="select">
              <option>Frontend Fundamentals</option>
              <option>Javascript Fundamentals</option>
              <option>Repository Fundamentals</option>
              <option>Database Fundamentals</option>
              <option>JS Server Fundamentals</option>
              <option>Framework Fundamentals</option>
              <option>Mixed Topics</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} xs={4} md={4} controlId="formInputLevel">
            <Form.Label>Select Question Difficulty</Form.Label>
            <Form.Control as="select">
              <option>Entry</option>
              <option>Junior</option>
              <option>Mid-Level</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
      </Form>

      <hr />

      {/* THIS IS WHERE THE GAME QUESTIONS SHOULD LOAD UP */}

      <Row className="py-1">
        <Col xs={6} md={4}><QuestionCard /></Col>
        <Col xs={6} md={4}><QuestionCard /></Col>
        <Col xs={6} md={4}><QuestionCard /></Col>
      </Row>

      <Row className="py-1">
        <Col xs={6} md={4}><QuestionCard /></Col>
        <Col xs={6} md={4}><QuestionCard /></Col>
        <Col xs={6} md={4}><QuestionCard /></Col>
      </Row>

      <Row className="py-1">
        <Col xs={6} md={4}><QuestionCard /></Col>
        <Col xs={6} md={4}><QuestionCard /></Col>
        <Col xs={6} md={4}><QuestionCard /></Col>
      </Row>

    </React.Fragment>
  );
};

export default Prep;
