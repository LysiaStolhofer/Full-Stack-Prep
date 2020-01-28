import React from 'react';
import { Col, Container, Image, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Button, Nav, NavItem } from "reactstrap";
import { useAuth0 } from "../react-auth0-spa";

const Landing = (props) => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        <Container>

            <Row className="justify-content-around">
                <Col xs={6} md={5}>
                    <Row>
                        <Image src="./FullStackPrep.png" fluid />
                    </Row>
                    <Row>
                        <h2>YOUR dream job is just one "PREP" away</h2>
                    </Row>
                    <Row>
                        {!isAuthenticated && (
                            <Nav className="navbar" style={{ background: "none", boxShadow: "none" }}>
                                <NavItem className="mx-auto">
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
                    </Row>
                </Col>

                <Col>
                    <Image src="./landing.png" style={{ width: "100%" }} />
                </Col>
            </Row>
        </Container >
    );
};

export default withRouter(Landing);