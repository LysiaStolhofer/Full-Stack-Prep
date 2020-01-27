import React from 'react';
import { Row, Col, Container, Image } from "react-bootstrap";
import { Nav, NavItem, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

const Landing = (props) => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        <Container className="mx-auto">
            <Row>
                <Col xs={6} md={4}>
                    <Image src="./FullStackPrep.png" fluid />
                </Col>
            </Row>

            <Row className="mx-auto">
                <Col>
                    <Row>
                        YOUR dream job is just one "PREP" away
                </Row>
                    <Row>

                    </Row>

                    {!isAuthenticated && (
                        <Nav className="navbar">
                            <NavItem>
                                <Button
                                    id="qsLoginBtn"
                                    color="success"
                                    block
                                    onClick={() => loginWithRedirect({})}
                                >
                                    Click Here to get Started
                        </Button>
                            </NavItem>
                        </Nav>
                    )}
                </Col>

                <Col>

                </Col>

            </Row>
        </Container>
    );
};

export default withRouter(Landing);