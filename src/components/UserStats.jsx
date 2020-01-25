import React from "react";
import { Card, Row, Col, ProgressBar } from "react-bootstrap";
import Loading from "./Loading";
import { useAuth0 } from "../react-auth0-spa";

const UserStats = () => {
    const { loading, user } = useAuth0();

    if (loading || !user) {
        return <Loading />
    }
    console.log(user)

    return (
        <React.Fragment>
            <div>
                Frontend Fundamentals
                <ProgressBar animated variant="success" now={76} label="76" />
                JavaScript Fundamentals
                <ProgressBar animated variant="info" now={76} label="76" />
                Repository Fundamentals
                <ProgressBar animated variant="warning" now={76} label="76" />
                Database Fundamentals
                <ProgressBar animated variant="danger" now={76} label="76" />
                JS Server Fundamentals
                <ProgressBar animated variant="primary" now={76} label="76" />
                Framework Fundamentals
                <ProgressBar animated variant="secondary" now={76} label="76" />
            </div>
        </React.Fragment>

    );
};

export default UserStats;