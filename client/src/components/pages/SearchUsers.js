import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import API from "../../utils/API"
import { makeStyles } from '@material-ui/core/styles'
// import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import * as actions from '../../actions'

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



        <h1 className="pageTitle">Find Team-Mates</h1>
        <h4>Swipe left or right to browse potential teammates</h4>
        {/* UIKit's slideshow to cycle through the user database. */}

        <div style={{ backgroundColor: "rgba(33, 33, 33, 0.664)", maxHeight: "986px", marginBottom: "132px" }}>
          <div className="uk-visible-toggle uk-light finderContainer" tabIndex="-1" uk-slideshow="animation: pull">
            <ul className="uk-slideshow-items">
              {projectState.map(user => {
                return (
                  <li
                    value={user._id}
                    onClick={() => handleAddUsers(user._id)}
                  >
                    {/* onChange={(e) => console.log(user._id)} > */}
                    <h4>{user.first_name} {user.last_name}</h4>
                    <p className="userInfo">{user.location}</p>
                    <img className="searchImage" src={user.photo} alt="user profile" uk-cover></img>
                    <br></br>
                    <p className="userInfo">{user.bio}</p>

                  </li>
                )
              })}
            </ul>
          </div>

          <h3 style={{ color: "white" }} className="pageTitle">Select Project</h3>
          <a className="uk-position-center-left uk-position-small uk-hidden-hover" uk-slidenav-previous href="#" uk-slideshow-item="previous"></a>
          <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
          {/* <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column" }}> */}

          <div style={{ color: "white", width: "100%", height: "200px", overflowX: "hidden", overflowX: "auto", textAlign: "justify" }}>


            {projects.map(project => {
              return (
                // <Link to="/Profile" id="projectButtonsDisplay">
                <motion.button
                  id={project._id}
                  key={project._id}
                  onClick={() => selectProject(project._id, logged_in_user._id)}
                  value={project._id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="uk-button uk-button-secondary uk-button-large buttons"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  style={{ color: "white", maxWidth: "503px" }}
                >
                  {project.project_name}
                </motion.button>
                // </Link>
              )
            })}
          </div>
          {/* </div> */}
          <p style={{ margin: "auto" }}>
            <Link to="/projectProfile">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="uk-button uk-button-secondary uk-button-large buttons"
                style={{ color: "white" }}>Back to Project</motion.button>
            </Link>
            <Link to="/emailuser">
              <motion.button
                id="menuButton"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="uk-button uk-button-secondary uk-button-large buttons"
                aria-controls="simple-menu"
                aria-haspopup="true"
                style={{ color: "white" }}
                onClick={handleAddUsers}
              >
                Ask them to join
            </motion.button></Link>
          </p>
        </div>
      </Container>
    </motion.div >
  );
}

function get_user_data({ auth }) {
  return { auth }
}
export default connect(get_user_data, actions)(SearchUsers);


