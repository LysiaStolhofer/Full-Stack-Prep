import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Loading from "../components/Loading";
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

            <Card>
                <Card.Header as="h3" className="text-center">{user && user.given_name}'s Progress</Card.Header>
                <Card.Body as={Row}>
                    <Col>
                        <img
                            src={user && user.picture}
                            alt="user-img"
                            thumbnail
                        />
                    </Col>
                    <Col>
                        <UserStats />
                    </Col>

                </Card.Body>
            </Card>

        </React.Fragment>
    );
};

export default UserChart;