import React from 'react';
import { Link } from 'react-router-dom';
import Loading from "../components/Loading";
import MainBtns from '../components/MainBtns';
import Highlight from '../components/Highlight';
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
                <h2>Highlight</h2>
                <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
                <br />
                <hr />
                <h2>Main Buttons</h2>
                <MainBtns />
                <hr />




            </div>
        </React.Fragment>
    );
};

export default Sandbox;
