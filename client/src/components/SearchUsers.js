import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";

const SearchUsers = props => {

    return (
        <div>
            <Container>
                <h1>Find Team Mates!</h1>
                <div>
                    <h1 className="pageTitle">Find Team-Mates</h1>
                    <img src="https://via.placeholder.com/500" alt="user profile"></img>

                    <p style={{ margin: "auto" }}>
                        <button className="uk-button uk-button-default uk-button-large" style={{ color: "white" }}><Link to="/dashboard">Back to Dashboard</Link></button>
                        <button className="uk-button uk-button-primary uk-button-large"><Link to="/emailUser">Ask them to join</Link></button>
                    </p>
                </div>
            </Container>
        </div>
    );
}

export default SearchUsers;