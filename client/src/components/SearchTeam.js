import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
// This page should cycle through users.
const SearchUsers = props => {
    return (
        <div>
            <Container>
                <h1 className="pageTitle">Find Team-Mates</h1>
                <div className="finderContainer">
                    <img id="searchImage" src="https://via.placeholder.com/500" alt="user profile"></img>

                    <p style={{ margin: "auto" }}>
                        <Link to="/dashboard"><button className="uk-button uk-button-secondary uk-button-large buttons" style={{ color: "white" }}>Back to Dashboard</button></Link>
                        <Link to="/emailUser"><button className="uk-button uk-button-secondary uk-button-large buttons">Ask them to join</button></Link>
                    </p>
                </div>
            </Container>
        </div>
    );
}
export default SearchUsers;