import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import * as actions from '../actions'
import { motion } from "framer-motion"
import API from "../utils/API";


const Dashboard = props => {
  // var link_github_b_e = document.getElementById("link_github_b")
  var link_github_b_e = document.querySelector("#link_github_b")

  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: "100vw",
      scale: 1.2
    }
  };

  const user = props.auth || {};

  const get_github = () => {
    // console.log("hello")
    if (link_github_b_e === null) {
      console.log(link_github_b_e.value)
    }
    // API.getGithub(username)
    //   .then(res => {
    //     console.log(res.data)
    //     const github = res.data
    //   })
    //   .catch(err => console.log(err));
  };


  return (
    <motion.div initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants} className="contentContainer" className="contentContainer">
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
            {/* <p>Github: </p> */}
            <div id="location_div">
              <input

                id="city_i"
                tyoe="text"
                placeholder="Enter Github Username"
                onBlur={(e) => e.target.placeholder = "Enter Github Username"}
                onFocus={(e) => e.target.placeholder = ""}>

              </input>
              <button
                id="link_github_b"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => get_github()}
                className="uk-button uk-button-secondary uk-button-large uk-flex-left buttons">Link your Github Account</button>
            </div>
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
          <Link to="/createproject"><motion.button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Create Team</motion.button></Link>
          <Link to="/searchproject"><motion.button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Search Team</motion.button></Link>
        </div>
      </Container>
    </motion.div>
  );
}
function get_user_data({ auth }) {
  return { auth }
}
export default connect(get_user_data, actions)(Dashboard);