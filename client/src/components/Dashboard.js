import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';

const Dashboard = props => {

    return (
        <div>
            <Container>
                <div className="uk-card uk-card-default uk-width-1-2@m">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle uk-grid">
                            <div className="uk-width-auto">
                                <img className="uk-border-circle" width="40" height="40" src=""></img>
                            </div>
                            <div className="uk-card-body">
                                <p>github username</p>
                                <p>email</p>
                                <p>bio</p>
                                <p>skills</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p uk-margin>
                    <button class="uk-button uk-button-default uk-button-large">Create Team</button>
                    <button class="uk-button uk-button-primary uk-button-large">Search Team</button>
                </p>
            </Container>
        </div>


    );

}

export default Dashboard;