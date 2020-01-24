import React from 'react';
import { Link } from 'react-router-dom';
import UserChart from '../components/UserChart';
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

const Sandbox = () => {

    const { loading, user } = useAuth0();

    if (loading || !user) {
        return <Loading />
    }
    console.log(user)

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
                <UserChart />
            </div>
        </React.Fragment>
    );
};

export default Sandbox;
