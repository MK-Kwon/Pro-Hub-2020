import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';

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
            <p uk-margin>
              <button className="uk-button uk-button-default uk-button-large">Create Team</button>
              <button className="uk-button uk-button-primary uk-button-large">Search Team</button>
            </p>
          </Container>
        </div>
        );

  // async function get_user_data() {
  //   const res = await fetch('/api/current_user')
  //   const json = await res.json()
  //   console.log(json.email)
  // }
  // get_user_data();

  // console.log(props.auth)
  // // const email = props.auth.email ? props.auth.email : "Email"
  // const email = "Email"
  // const is_not_null = (email) => {
  //   if (email === null) {
  //     return "Not Avaiable";
  //   }
  //   else {
  //     return props.auth.email;
  //   }
  // }
  const auth = props.auth || {};


  return (
    <div className="contentContainer">
      {/* {console.log(props)} */}
      <Container>
        <div id="profileCard" className="uk-card uk-card-default uk-width-1-1@m" style={{ margin: "auto" }}>
          <div className="uk-card-header">
            <div className="uk-grid-medium uk-flex-middle uk-grid">
              <div className="uk-width-auto">
                <img className="uk-border-circle" width="40" height="40" alt="profile pic" src={auth.photo}></img>
              </div>
              <div className="uk-width-expand">
                <h2 id="profileName" className="uk-card-title uk-margin-remove-bottom">{auth.first_name} {auth.last_name}</h2>
                <p className="uk-text-meta uk-margin-remove-top">Location</p>
              </div>
            </div>
          </div>
          <div className="uk-card-body">
            <p>Github username</p>
            <p>Email</p>
            <hr></hr>
            <p>{auth.email}</p>
            <p>Bio</p>
            <hr></hr>
            <p>Skills</p>
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