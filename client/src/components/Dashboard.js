import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';


const Dashboard = props => {

  const user = props.auth || {};

   return (
    <div className="contentContainer">
      <Container>
        <div id="profileCard" className="uk-card uk-card-default uk-width-1-1@m" style={{ margin: "auto" }}>
          <div className="uk-card-header">
            <div className="uk-grid-medium uk-flex-middle uk-grid">
              <div className="uk-width-auto">
                <img className="uk-border-circle" width="40" height="40" alt="profile pic" src={user.photo}></img>
              </div>
              <div className="uk-width-expand">
                <h2 id="profileName" className="uk-card-title uk-margin-remove-bottom">{user.first_name} {user.last_name}</h2>
                <p className="uk-text-meta uk-margin-remove-top">Location</p>

              </div>
            </div>
          </div>
          <div className="uk-card-body">
            <p>Github username: </p>
            <hr></hr>
            <p>Email: {user.email}</p>
            <hr></hr>
            <p>Bio: </p>
            <textarea className="description_t" type="text" placeholder="Describe yourself here " onBlur={(e) => e.target.placeholder = "Describe yourself here "} onFocus={(e) => e.target.placeholder = ""}></textarea>
            <p>Skills: </p><textarea className="description_t" type="text" placeholder="Enter skills here " onBlur={(e) => e.target.placeholder = "Enter skills here "} onFocus={(e) => e.target.placeholder = ""}></textarea>

            {/* Button to update profile skills and description. */}
            <button className="uk-button uk-button-secondary buttons">Update Profile</button>
          </div>
        </div>
        <div id="buttonContainer">
          <Link to="/createteam"><button className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Create Team</button></Link>
          <Link to="/searchteam"><button className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Search Team</button></Link>
        </div>
      </Container>
    </div>
  );
}
function get_user_data({ auth }) {
  return { auth }
}
export default connect(get_user_data, actions)(Dashboard);