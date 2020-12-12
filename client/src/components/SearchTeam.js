import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";

//We need to make the join team button generate an updated table for the user and display it on user dash. User also needs to be added to the roster for the team on Mongoose DB

const CreateTeam = props => {

    return (
        <div>
            <Container>
                <h1>Search for a team</h1>
                <p style={{ margin: "auto"}}>
                <Link to="/dashboard"><button className="uk-button uk-button-default uk-button-large" style={{ color: "white" }}>Back to Dashboard</button></Link>
                    <Link to="/dashboard"><button className="uk-button uk-button-primary uk-button-large" style={{ color: "white" }}>Join Team</button></Link>
                </p>
            </Container>
        </div>
    );

}

export default CreateTeam; 