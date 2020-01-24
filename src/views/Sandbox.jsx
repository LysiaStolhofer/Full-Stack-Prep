import React from 'react';
import QuestionCard from '../components/QuestionCard';
import { Link } from 'react-router-dom';

const Sandbox = () => {
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

export default Sandbox;
