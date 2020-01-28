import React from "react";
import Form from "react-bootstrap/Form";
import { Col, Button } from "reactstrap";
import { Link, Route } from "react-router-dom";
import Home from './Home'; 
import './Add.css'


const Add = () => {
  return (
    <React.Fragment>
      <h2 className="text-center" id="font">Add an interview question</h2>
      <hr />
      <Form id="font2">
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
              <option id="yellow">Entry</option>
              <option id="orange">Junior</option>
              <option id="red">Mid-Level</option>
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
        <Form.Row id="place">
          <Form.Group as={Col} controlId="formInputQuestion">
            <Form.Label>Add the Question You want to add.</Form.Label>
            <Form.Control as="textarea" rows="6" />
          </Form.Group>
          <Form.Group as={Col} controlId="formInputAnswer">
            <Form.Label>Add the Answer to the Question.</Form.Label>
            <Form.Control as="textarea" rows="6" />
          </Form.Group>
          <Form.Group as={Col} controlId="formInputCode">
            <Form.Label>If your Question has any code, Enter it here.</Form.Label>
            <Form.Control placeholder="(Seperate it by Enter Key)" as="textarea" rows="6" />
          </Form.Group>
        </Form.Row>
        {/* <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
        <Button id="btn" variant="primary" type="submit">
          Submit
          </Button>
          <Button id="btn2" variant="primary" type="Cancel">
          Cancel
          </Button>
      </Form>
      <Route exact path="/" component={Home} />
    </React.Fragment>
  );
};
export default Add;