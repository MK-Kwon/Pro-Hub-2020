import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";

const CreateTeam = props => {

    return (
        <div>
            <Container>
                <h1 className="pageTitle">Create your Team!</h1>
                <p style={{ margin: "auto" }}>
                    <button className="uk-button uk-button-default uk-button-large" style={{ color: "white" }}><Link to="/dashboard">Back to Dashboard</Link></button>
                    <button className="uk-button uk-button-primary uk-button-large"><Link to="/searchusers">Submit Team</Link></button>
                </p>
            </Container>
        </div>
    );

}

export default CreateTeam; 