import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import * as actions from '../actions'
import { motion } from "framer-motion"
import API from "../utils/API";


const Dashboard = props => {
  const user = props.auth || {};
  // var link_github_b_e = document.getElementById("link_github_b")
  var link_github_b_e = document.querySelector("#link_github_b")
  const [username, setUsername] = useState("");
  const [usernameElement, setUsernameElement] = useState(<input
    id="username_i"
    tyoe="text"
    placeholder="Enter Github Username"
    onBlur={(e) => e.target.placeholder = "Enter Github Username"}
    onFocus={(e) => e.target.placeholder = ""}
    onChange={(e) => setUsername(e.target.value)}>
  </input>);
  const [bio, setBio] = useState("");
  const [githubData, setGithubData] = useState("");
  console.log(user.photo)
  const picture = user.photo
  const [userPhoto, setUserPhoto] = useState(picture);
  const [linkGithubButton, setlinkGithubButton] = useState("Link your Github Account");

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

  const get_github = (username) => {
    // console.log("hello")
    // if (link_github_b_e !== null) {
    //   console.log(link_github_b_e)
    // }
    // const username = "livingkurt"
    API.getGithub(username)
      .then(res => {
        console.log(res.data)
        const github = res.data
        setBio(github.bio)
        setUsernameElement([
          <p key="1" id="username_lable_p">Github Username:</p>,
          <p key="2" id="username_p" style={{ width: "70%", margin: "20px 0px" }}>{github.login} </p>
        ])
        setGithubData(<p key="1">Followers: {github.followers} Following: {github.following} Repos: {github.public_repos}</p>)
        setUserPhoto(github.avatar_url)
      })
      .catch(err => console.log(err));
  };
  const handleGithubClick = event => {
    event.preventDefault();
    get_github(username);
    setlinkGithubButton("Unlink Github Account")
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
                <img className="uk-border-circle" width="40" height="40" alt="profile pic" src={userPhoto || user.photo}></img>
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
              <div id="username_div">
                {usernameElement}
              </div>
              <button
                id="link_github_b"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleGithubClick}
                className="uk-button uk-button-secondary uk-button-large uk-flex-left buttons">{linkGithubButton}</button>
            </div>
            <hr></hr>
            <p>Email: {user.email}</p>
            <hr></hr>
            {githubData}
            <p>Bio:</p>
            <textarea
              className="description_t"
              type="text"
              value={bio}
              placeholder="Describe yourself here " o
              nBlur={(e) => e.target.placeholder = "Describe yourself here "}
              onFocus={(e) => e.target.placeholder = ""}>
            </textarea>
            <p>Skills:</p>
            <textarea
              className="description_t"
              type="text"
              placeholder="Enter skills here "
              onBlur={(e) => e.target.placeholder = "Enter skills here "}
              onFocus={(e) => e.target.placeholder = ""}>
            </textarea>
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