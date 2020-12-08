import React, { Component } from 'react';
import Box from '@material-ui/core/Box';

const Dashboard = props => {

    return (
        <div>

            <div class="uk-card uk-card-default uk-width-1-2@m">
                <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle uk-grid">
                        <div class="uk-width-auto">
                            <img class="uk-border-circle" width="40" height="40" src={props.github_image}></img>
                        </div>
                        <div class="uk-width-expand">
                            <h3 class="uk-card-title uk-margin-remove-bottom">{props.name}</h3>
                            <p class="uk-text-meta uk-margin-remove-top">{props.location}</p>

                        </div>
                    </div>
                </div>
                <div class="uk-card-body">
                    <p>{props.github_bio}</p>
                    <p>{props.email}</p>
                    <p>{props.bio}</p>
                    <p>{props.skills}</p>
                </div>
            </div>
            <p uk-margin>
                <button class="uk-button uk-button-default uk-button-large">Create Team</button>
                <button class="uk-button uk-button-primary uk-button-large">Search Team</button>
            </p>
        </div>


    );

}

export default Dashboard;