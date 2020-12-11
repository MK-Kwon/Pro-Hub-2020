import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";

const Dashboard = props => {

    async function get_user_data() {
        const res = await fetch('/api/current_user')
        const json = await res.json()
        console.log(json.email)
      }
      get_user_data();
    
    
      return (
        <div>
          <Container>
            <div className="uk-card uk-card-default uk-width-1-2@m">
              <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle uk-grid">
                  <div className="uk-width-auto">
                    <img className="uk-border-circle" width="40" height="40" src=""></img>
                  </div>
                  <div className="uk-width-expand">
                    <h3 className="uk-card-title uk-margin-remove-bottom">Name</h3>
                    <p className="uk-text-meta uk-margin-remove-top">Location</p>
    
                  </div>
                </div>
              </div>
              <div className="uk-card-body">
                <p>github username</p>
                <p>email</p>
                <p>bio</p>
                <p>skills</p>
              </div>
            </div>
         <p style={{ margin: "auto" }}>
          <button className="uk-button uk-button-default uk-button-large" style={{ color: "white" }}><Link to="/createteam">CreateTeam</Link></button>
          <button className="uk-button uk-button-primary uk-button-large" style={{ color: "white" }}><Link to="/searchteam">Search Team</Link></button>
         </p>
          </Container>
        </div>
        );
}

export default Dashboard;