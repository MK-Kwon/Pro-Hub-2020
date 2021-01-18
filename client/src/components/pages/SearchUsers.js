import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import API from "../../utils/API"
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
// This page should cycle through users.
const SearchUsers = (props) => {
  const logged_in_user = props.auth || {};

  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "-100vw",
      scale: 1.2
    }
  };
  useEffect(() => {
    get_projects();
    get_users();
  }, []);
  const [projectState, setProjectState] = useState([]);
  const [projects, setProjects] = useState([]);

  const get_users = () => {
    API.getUsers()
      .then(res => {
        const users = res.data
        setProjectState(users)
      })
      .catch(err => console.log(err));
  };
  const get_projects = () => {
    API.getProjects()
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => console.log(err));
  };
  const selectProject = (projectId, userId) => {
    console.log("selectProject");
    console.log("projectId");
    console.log(projectId);
    console.log("projectId");
    console.log(userId);
    API.addUsers(projectId, userId)
      .then(res => {
        console.log("After Add User")
        console.log(res.data)
        // setProjects(res.data);
        addProjectToUser(userId, projectId);
      })
      .catch(err => console.log(err));
  };
  const addProjectToUser = (userId, projectId) => {
    console.log(userId)
    console.log(projectId)
    API.addProject(userId, projectId)
      .then(res => {
        console.log(res);
        // setUser(res.data);
      })
  }
  const handleAddUsers = (id) => {
    console.log(id);
    // get_projects();
    API.addUsers(projectState._id, id)
      .then(res => {
        console.log(projectState._id);
        console.log(res)
        console.log(id)
      })
      .catch(err => console.log(err));
  };

  return (
    <motion.div initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants} >
      <Container >
        <div id="searchUserCard">
          <h3 className="pageTitle-user-search">Find Team-Mates</h3>
          <p className="search-user-instruction">Swipe left or right to browse potential teammates</p>
          {/* UIKit's slideshow to cycle through the user database. */}
          <div className="uk-width-auto">
            <div className="uk-visible-toggle uk-light finderContainer" tabIndex="-1" uk-slideshow="animation: pull">
              <ul className="uk-slideshow-items">
                {projectState.map(user => {
                  return (
                    <li
                      value={user._id}
                      onClick={() => handleAddUsers(user._id)}
                    >
                      {/* onChange={(e) => console.log(user._id)} > */}
                      <CardContent style={{ width: "98%", margin: "5px", backgroundColor: "rgba(255, 255, 255, 0.95)", padding: "50px 20px 20px 100px" }} >
                          <div className="uk-width-expand">
                            <p id="profileName-user-search" className="uk-card-title uk-margin-remove-bottom"><span style={{ fontStyle: "italic", fontWeight: "900" }}>{user.first_name} {user.last_name}</span></p>
                            <p className="uk-text-meta uk-margin-remove-top">{user.location}</p>
                          </div>
                          <ul>
                            <div>
                              <p className="profile"><span style={{ color: "#863dfa", fontWeight: "900" }}>Email: </span> {user.email}</p>
                              {user.github_username ? <p className="github-profile"><a className="github-profile-link" target="_blank" rel="noopener noreferrer" href={user.github_url} alt="Github Link"><span className="github-profile-link" style={{ color: "#863dfa", fontWeight: "900" }}>Github Profile</span></a>|| Followers: {user.followers} || Following: {user.following} || Repos: {user.repos}</p> : <> </>}
                            </div>
                            <div>
                              <p className="profile"><span style={{ color: "#863dfa", fontWeight: "900" }}>Bio: </span>{user.bio}</p>
                              <p className="profile"><span style={{ color: "#863dfa", fontWeight: "900" }}>Skills: </span>{user.skills}</p>
                              <p className="profile"><span style={{ color: "#863dfa", fontWeight: "900" }}>City: </span>{user.location}</p>
                            </div>
                          </ul>
                      </CardContent>
                      <Link to="/emailuser">
                        <motion.button
                          id="menuButton"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons"
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          style={{ color: "white" }}
                          onClick={handleAddUsers}
                        >
                          CONTACT
                        </motion.button></Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </motion.div >
  );
}

function get_user_data({ auth }) {
  return { auth }
}
export default connect(get_user_data, actions)(SearchUsers);


