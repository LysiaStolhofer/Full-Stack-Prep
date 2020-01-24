import React from "react";
import { Card, Row, Col, Accordion, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const MainBtn = () => (
    <React.Fragment>
        <Card bg="primary" text="white" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        <br />
        <Card bg="secondary" text="white" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>Secondary Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        <br />
        <Card bg="success" text="white" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>Success Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
        <br />

    </React.Fragment>
);

export default MainBtn;