import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Loading from "./Loading";
import { useAuth0 } from "../react-auth0-spa";
import UserStats from "./UserStats";

const UserChart = () => {
    const { loading, user } = useAuth0();

    if (loading || !user) {
        return <Loading />
    }
    console.log(user)

    return (
        <React.Fragment>

            <Card bg="dark" text="white" >
                <Card.Header as="h3" >{user && user.given_name} My Full Stack Progress</Card.Header>

                <Card.Body>
                    <Row className="align-items-center">
                        <Col>
                            <Card.Img variant="top" src={user && user.picture} />
                        </Col>
                        <Col>
                            <UserStats />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        </React.Fragment>
    );
};

export default UserChart;