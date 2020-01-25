import React from "react";
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const MainBtns = () => (
    <React.Fragment>

        <Col className="justify-content-between  ">

            <Link to="/Prep">
                <Card body bg="success" text="white" col={3} className=" text-center shadow mb-2">
                    <FontAwesomeIcon icon={faCode} col={5} />{" "}
                    Prep for Inteview
                    </Card>
            </Link>

            <Link to="/Take">
                <Card body bg="success" text="white" col={3} className=" text-center shadow my-2">
                    <FontAwesomeIcon icon={faCode} col={5} />{" "}
                    Take a Mock Interview
                    </Card>
            </Link>

            <Link to="/Add">
                <Card body bg="danger" text="white" col={3} className=" text-center shadow my-2">
                    <FontAwesomeIcon icon={faCode} col={5} />{" "}
                    Add a Question
                    </Card>
            </Link>

        </Col>

    </React.Fragment>
);

export default MainBtns;