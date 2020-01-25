import React from "react";
import Form from "react-bootstrap/Form";
import { Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Add = () => {
  return (
    <React.Fragment>
      <div>Add an interview question</div>
      <div>
        <ul>
          <li>
            <Link to="/">Done - back to Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formInputTopic">
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

            <Form.Group as={Col} controlId="formInputLevel">
              <Form.Label>Select Question Difficulty</Form.Label>
              <Form.Control as="select">
                <option>Entry</option>
                <option>Junior</option>
                <option>Mid-Level</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formInputTimer">
              <Form.Label>Time to Answer</Form.Label>
              <Form.Control as="select">
                <option>1 minute</option>
                <option>2 minute</option>
                <option>3 minute</option>
                <option>4 minute</option>
                <option>5 minute</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formInputQuestion">
            <Form.Label>Add the Question You want to add to Full Stack Prep</Form.Label>
            <Form.Control as="textarea" rows="4" />
          </Form.Group>

          <Form.Group controlId="formInputAnswer">
            <Form.Label>What is the Answer to the Question.</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group controlId="formInputCode">
            <Form.Label>If your Question has any code, Enter it here (Seperate it by Enter Key)</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="primary" type="submit">
            Return to Dashboard
          </Button>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default Add;
