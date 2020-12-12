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
    <div className="contentContainer">
      <Container>
        <div id="profileCard" className="uk-card uk-card-default uk-width-1-1@m" style={{ margin: "auto" }}>
          <div className="uk-card-header">
            <div className="uk-grid-medium uk-flex-middle uk-grid">
              <div className="uk-width-auto">
                <img className="uk-border-circle" width="40" height="40" alt="profile pic" src="https://picsum.photos/200"></img>
              </div>
              <div className="uk-width-expand">
                <h2 id="profileName" className="uk-card-title uk-margin-remove-bottom">Name</h2>
                <p className="uk-text-meta uk-margin-remove-top">Location</p>

              </div>
            </div>
          </div>
          <div className="uk-card-body">
            <p>Github username</p>
            <p>Email</p>
            <hr></hr>
            <p>Bio</p>
            <hr></hr>
            <p>Skills</p>
          </div>
        </div>
        <div id="buttonContainer">
        <button className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" ><Link to="/createteam">Create Team</Link></button>
          <button className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" ><Link to="/searchteam">Search Team</Link></button>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;