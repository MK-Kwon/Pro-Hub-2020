import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";

const CreateTeam = props => {

    return (
        <div className="contentContainer">
            <Container>
                <div id="createTeamContainer">
                    <h1>Create your Team!</h1>
                    <hr></hr>
                    {/* Needs to be a form */}
                    <div>
                        <p>Team Name</p>
                        <p>Team Lead</p>

                        <p>Description</p>

                        <p>Location</p>
                    </div>
                </div>
                <div id="buttonContainer">
                    <Link to="/dashboard"><button className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Back to Dashboard</button></Link>
                    <Link to="/searchusers"> <button className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Submit Team</button></Link>
                </div>
            </Container>
        </div>
    );
}

export default CreateTeam; 