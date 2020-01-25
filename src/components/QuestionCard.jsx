import React from "react";
import { Card, Row, Col, Accordion, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const QuestionCard = () => (

    <React.Fragment>

        <Card border="secondary" style={{ width: '20rem' }}>
            <Card.Header>
                <Row>
                    <Col sm={8}>Topic - 1 | Level - 2</Col>
                    <Col sm={4}>60</Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Card.Title>Is react a framework or a library?</Card.Title>
                <Card.Text>
                    <code>
                        npx create-react-app my-app <br />
                        cd my-app <br />
                        npm start <br />
                    </code>
                </Card.Text>
            </Card.Body>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Show the Answer
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. ... React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Card.Footer className="text-muted" >
                <Form as={Row} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Form.Label>How Did You Do?</Form.Label>
                    <FontAwesomeIcon icon={faThumbsUp} color="green" />
                    <Form.Check label="Pos" type="radio" id="quest-pos" />
                    <FontAwesomeIcon icon={faThumbsDown} color="red" />
                    <Form.Check label="Neg" type="radio" id="qust-neg" />
                </Form>
            </Card.Footer>
        </Card >

    </React.Fragment >);

export default QuestionCard;