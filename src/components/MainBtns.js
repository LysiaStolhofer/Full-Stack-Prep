import React from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const MainBtns = () => (
    <React.Fragment>


        <ul>
            <li>
                <Link to="/Prep">
                    <Button variant="success" size="lg">
                        <FontAwesomeIcon icon={faCode} col={5} />
                        Prep for Inteview
                    </Button>
                </Link>
            </li>
            <li>
                <Link to="/Take">
                    <Button variant="success" size="lg">
                        <FontAwesomeIcon icon={faCode} col={5} />
                        Take a Mock Interview
                    </Button>
                </Link>
            </li>
            <li>
                <Link to="/Add">
                    <Button variant="success" size="lg">
                        <FontAwesomeIcon icon={faCode} col={5} />
                        Add an Interview Question
                    </Button>
                </Link>
            </li>
        </ul>











        <div>

            <Link to="/Prep">

                {' '}

                <Card as={Button} bg="success" text="white" className="mx-auto" style={{ width: '18rem' }}>
                    <Card.Title>
                        <FontAwesomeIcon icon={faCode} col={5} /><br />
                        Add Interview Question
                </Card.Title>
                </Card>
            </Link>

            <Link to="/Take">
                <Card as={Button} bg="success" text="white" className="mx-auto text-center" style={{ width: '18rem' }}>
                    <Card.Title>
                        <FontAwesomeIcon icon={faCode} col={5} /><br />
                        Add Interview Question
                </Card.Title>
                </Card>
            </Link>

            <Link to="/Add">
                <Card as={Button} bg="success" text="white" className="mx-auto" style={{ width: '18rem' }}>
                    <Card.Title>
                        <FontAwesomeIcon icon={faCode} col={5} /><br />
                        Add Interview Question
                </Card.Title>
                </Card>
            </Link>

        </div>

    </React.Fragment>
);

export default MainBtns;