import React, { Fragment } from "react";
import { Card, Accordion, Button } from 'react-bootstrap';

const QuestionCard = () => (

    <React.Fragment>

        <Card border="secondary" style={{ width: '20rem' }}>
            <Card.Header>Topic - Framework Fundementals | Level - Entry</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
    </Card.Text>
            </Card.Body>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Show the Answer
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <Card.Footer className="text-muted">How Did You Do?</Card.Footer>
        </Card>

    </React.Fragment>);

export default QuestionCard;