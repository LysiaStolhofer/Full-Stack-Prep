import React from "react";
import { ProgressBar } from "react-bootstrap";
import Loading from "./Loading";
import { useAuth0 } from "../react-auth0-spa";
import './UserStats.css'

const UserStats = () => {
    const { loading, user } = useAuth0();

    if (loading || !user) {
        return <Loading />
    }
    console.log(user)

    return (
        <React.Fragment>
            <div class="margin">
                Frontend Fundamentals
                <ProgressBar animated variant="success" now={45} label="45%" />
                </div>
                <div class="margin">
                JavaScript Fundamentals
                <ProgressBar animated variant="info" now={76} label="76%" />
                </div>
                <div class="margin">
                Repository Fundamentals
                <ProgressBar animated variant="warning" now={82} label="82%" />
                </div>
                <div class="margin">
                Database Fundamentals
                <ProgressBar animated variant="danger" now={64} label="64%" />
                </div>
                <div class="margin">
                JS Server Fundamentals
                <ProgressBar animated variant="primary" now={90} label="90%" />
                </div>
                <div class="margin2">
                Framework Fundamentals
                <ProgressBar animated variant="secondary" now={72} label="72%" />
            </div>
        </React.Fragment>

    );
};

export default UserStats;