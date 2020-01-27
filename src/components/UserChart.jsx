import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Loading from "./Loading";
import { useAuth0 } from "../react-auth0-spa";
import UserStats from "./UserStats";
import './UserChart.css'

const UserChart = () => {
    const { loading, user } = useAuth0();

    if (loading || !user) {
        return <Loading />
    }
    console.log(user)

    return (
        <Container >
            <Card id="margin"bg="dark" text="white" >
                <Card.Header as="h3" >{user && user.given_name} My Full Stack Progress</Card.Header>
                <Card.Body>
                    <Row className="align-items-center">
                        <Card.Img id="size" variant="top" src={user && user.picture} />
                        
                        <Col>
                            <UserStats />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserChart;