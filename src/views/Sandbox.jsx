import React from "react";
import Form from 'react-bootstrap/Form';
import QuestionCard from '../components/Card';
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Home from "./Home";

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
                <QuestionCard />
            </div>
        </React.Fragment>
    );
};

export default Add;
