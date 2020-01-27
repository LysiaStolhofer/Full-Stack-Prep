import React { Component } from 'react';


class TakeAPI extends Component {
    constructor() {
        super();
        //set initial state
        this.state = {
            questions: [],
        };
    }

    //lifecycle method - fetch and API call
    componentDidMount() {
        //add results=10 at the end of API URL so we get 10 questions back 
        fetch('')
            .then(results => {
                return results.json();
            }).then(data => {
                let questions = data.results.map(question => {
                    return (
                        //mock interview question forms for being displayed
                        <div key={question.result}>
                            <form></form>
                        </div>
                    )
                })
                this.setState({ questions: questions });
                console.log("state", this.state.questions);
            })
    }

    //render the data 
    render() {
        return (
            <div>{this.state.questions}</div>
        )
    }
}