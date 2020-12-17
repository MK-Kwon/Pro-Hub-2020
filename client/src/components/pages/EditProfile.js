import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { motion } from "framer-motion"
import { usePosition } from 'use-position';
import API from "../../utils/API";
import { updateUser, fetchUser } from '../../actions'

const EditProfile = props => {

  const user = props.auth || {};

  console.log("Edit Profile.js")
  console.log(user)
  console.log(user.github_url)

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

  // =============================================
  //              CREATING STATES
  //==============================================
  const { latitude, longitude } = usePosition();
  const [userState, setUserState] = useState({
    github_username: user.github_username,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    github_photo: user.github_photo,
    photo: user.photo,
    location: user.location,
    skills: user.skills,
    bio: user.bio,
    followers: user.followers,
    following: user.following,
    repos: user.repos,
    github_url: user.github_url,
  });

  const [linkGithubButton, setlinkGithubButton] = useState(user.github_username ? true : false);


  // =============================================
  //        API Calls and Input Changes
  //==============================================

  const get_github = (username) => {
    if (!linkGithubButton) {
      API.getGithub(username)
        .then(res => {
          console.log(res.data)
          const github = res.data
          console.log("get_github")
          console.log(github.github_url)
          setUserState({
            ...userState,
            bio: github.bio,
            followers: github.followers,
            following: github.following,
            repos: github.public_repos,
            github_url: github.html_url,
            github_photo: github.avatar_url
          })
          setlinkGithubButton(true)
        })
        .catch(err => console.log(err));

    }
    else {
      console.log("Link Github Button False")

      setUserState({
        ...userState,
        bio: user.bio,
        github_username: "",
        followers: "",
        following: "",
        repos: "",
        github_url: "",
        photo: user.photo,
        github_photo: ""
      })
    }


  };
  const handleGithubClick = event => {
    event.preventDefault();
    get_github(userState.github_username);
    setlinkGithubButton(false)
  };
  const update_user_profile = () => {
    const data = {
      github_username: userState.github_username,
      first_name: userState.first_name,
      last_name: userState.last_name,
      email: userState.email,
      photo: userState.photo,
      github_photo: userState.github_photo,
      location: userState.location,
      skills: userState.skills,
      bio: userState.bio,
      followers: userState.followers,
      following: userState.following,
      repos: userState.repos,
      github_url: userState.github_url,
    }
    API.updateUser(user._id, data).then(() => {
      // with redux you can tell it to refresh from the server
      // OR you can directly pass the data in
      // 
      console.log("Finish")
      props.fetchUser()
      // return <Redirect to="/profile" />


    })
      .catch(err => console.log(err));
  };
  const handleSkillChange = event => {
    setUserState({ ...userState, skills: event.target.value })
  };
  const handleBioChange = event => {
    setUserState({ ...userState, bio: event.target.value })
  }
  const handleLocationChange = event => {
    setUserState({ ...userState, location: event.target.value })
  };
  const handleUsernameChange = event => {
    setUserState({ ...userState, github_username: event.target.value })
  }
  const get_location = () => {
    API.getLocation(latitude, longitude)
      .then(res => {
        const city = `${res.data.address.city}, ${res.data.address.state}`
        setUserState({ ...userState, location: city })
      })
      .catch(err => console.log(err));
  };
  return (
    <motion.div initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants} className="contentContainer">
      <Container>
        <div id="profileCard" className="uk-card uk-card-default uk-width-1-1@m" style={{ margin: "auto" }}>
          <div className="uk-card-header">
            <div className="uk-grid-medium uk-flex-middle uk-grid">
              <div className="uk-width-auto">
                <img id="profile_picture_img" className="uk-border-circle" width="40" height="40" alt="profile pic" src={(linkGithubButton) ? userState.github_photo : userState.photo}></img>
              </div>
              <div className="uk-width-expand">
                <h2 id="profileName" className="uk-card-title uk-margin-remove-bottom">{userState.first_name} {userState.last_name}</h2>
                <p className="uk-text-meta uk-margin-remove-top">{userState.location}</p>
              </div>
            </div>
          </div>
          <div className="uk-card-body">
            <div id="location_div">
              <div id="username_div">
                {(!linkGithubButton) ? (
                  <input
                    id="username_i"
                    type="text"
                    placeholder="Enter Github Username"
                    onBlur={(e) => e.target.placeholder = "Enter Github Username"}
                    onFocus={(e) => e.target.placeholder = ""}
                    onChange={(e) => handleUsernameChange(e)}>
                  </input>
                )
                  : (
                    <>
                      {/* <p id="username_lable_p">Github Username:</p> */}
                      <p id="username_p" style={{ width: "70 % " }}>Github Username: {userState.github_username} </p>
                      {userState.github_username ? <p style={{ margin: "10px 0px 0px 0px" }}><a target="_blank" rel="noopener noreferrer" href={userState.github_url} alt="Github Link">Github Profile</a> || Followers: {userState.followers} || Following: {userState.following} || Repos: {userState.repos}</p> : <> </>}
                    </>
                  )
                }
              </div>
              <button
                id="link_github_b"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleGithubClick}
                className="uk-button uk-button-secondary uk-button-large uk-flex-left buttons">{(!linkGithubButton) ? "Link Github Account" : "Unlink Github Account"}</button>
            </div>
            <hr></hr>
            <p>Email: {userState.email}</p>
            <hr></hr>
            <p>Bio:</p>
            <textarea
              className="description_t"
              type="text"
              onChange={(e) => handleBioChange(e)}
              value={userState.bio}
              placeholder="Describe yourself here "
              onBlur={(e) => e.target.placeholder = "Describe yourself here "}
              onFocus={(e) => e.target.placeholder = ""}>
            </textarea>
            <p>Skills:</p>
            <textarea
              className="description_t"
              type="text"
              onChange={(e) => handleSkillChange(e)}
              value={userState.skills}
              placeholder="Enter skills here "
              onBlur={(e) => e.target.placeholder = "Enter skills here "}
              onFocus={(e) => e.target.placeholder = ""}>
            </textarea>
            <div id="location_div">
              <br></br>
              <p style={{ "padding-right": "10px" }}>City: </p>
              <input
                value={userState.location}
                id="city_i"
                type="text"
                onChange={(e) => handleLocationChange(e)}
                placeholder="Enter Home City"
                onBlur={(e) => e.target.placeholder = "Enter Home City"}
                onFocus={(e) => e.target.placeholder = ""}>
              </input>
              <button
                id="add_current_location_b"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={get_location}
                className="uk-button uk-button-secondary uk-button-large uk-flex-left buttons">Use Current Location</button>
            </div>

            <Link to="/profile"><motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} onClick={update_user_profile} className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Update Profile</motion.button></Link>
          </div>
        </div>
        <div id="buttonContainer">
          <Link to="/createproject"><motion.button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Create Team</motion.button></Link>
          <Link to="/searchproject"><motion.button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Search Team</motion.button></Link>
        </div>
      </Container>
    </motion.div >
  );
}
function get_user_data({ auth }) {
  return { auth }
}
export default connect(get_user_data, { updateUser, fetchUser })(EditProfile);