// This component is to display user data on the page. If they want to update their information, they must go to the dashboard component.

import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { motion } from "framer-motion"
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import API from "../../utils/API";



const Profile = props => {
  const user = props.auth || {};
  console.log("Profile.js")
  console.log(user._id)
  console.log(user.github_url)
  // const get_user = () => {
  //   API.getUser(user._id)
  //     .then(res => {
  //       // const users = res.data
  //       console.log(res)
  //       // setProjectState(users)
  //     })
  //     .catch(err => console.log(err));
  // };
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
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
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [projectState, setProjectState] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectUsers, setProjectUser] = useState([]);
  useEffect(() => {
    get_project_ids();
  }, []);
  // const redirect = () => {
  //   if (user) {

  //   }
  // }
  const get_project_ids = () => {
    console.log(user._id)
    API.getUserProjects(user._id)
      .then(res => {
        console.log(res.data);
        const userProjects = res.data;
        const user_project_ids = []
        userProjects.map(userProjectId => {
          user_project_ids.push(userProjectId._id)
          console.log(user_project_ids)
          console.log(user_project_ids)

        })
        get_projects_from_user(user_project_ids)

      })
  }


  const get_projects_from_user = (data) => {
    const projects = [];
    data.forEach(id => {
      API.getProject(id)
        .then(res => {
          projects.push(res.data)
          setProjects(projects);
          projects.map(testing => {
            const moreTest = testing.users;
            moreTest.map(tryingHardHere => {
              return showUser(tryingHardHere);
            })
          })
        })
        .catch(err => console.log(err));
    })

  };
  const showUser = (userId) => {
    API.getUser(userId)
      .then(res => {
        console.log("showUser");
        console.log(res.data);
        const users = res.data
        setProjectUser(users)
      })
  }

  return (
    <motion.div initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants} className="contentContainer" className="contentContainer">
      <Container>
        <div id="profileCard" className="uk-card uk-card-default uk-width-1-1@m" style={{ margin: "auto" }}>
          <div className="uk-card-header">
            <div className="uk-grid-large uk-flex-middle uk-grid">
              <div className="uk-width-auto">
                <img
                  // src={user.github_photo ? (user.photo, console.log("user.photo", user.photo)) : (user.github_photo, console.log("user.github_photo", user.github_photo))} 
                  src={user.github_photo ? user.github_photo : user.photo}
                  id="profile_picture_img"
                  className="uk-border-circle"
                  width="60" height="60"
                  alt="profile pic" ></img>
              </div>
              <div className="uk-width-expand">
                <h3 id="profileName" className="uk-card-title uk-margin-remove-bottom">{user.first_name} {user.last_name}</h3>
                <p className="uk-text-meta uk-margin-remove-top">{user.location}</p>
              </div>
            </div>
          </div>
          <div className="uk-card-body">
            <div>
              <p>Email: {user.email}</p>
              {user.github_username ? <p ><a target="_blank" rel="noopener noreferrer" href={user.github_url} alt="Github Link">Github Profile</a> || Followers: {user.followers} || Following: {user.following} || Repos: {user.repos}</p> : <> </>}
            </div>
            <div>
              <p>Bio: {user.bio}</p>
              <p>Skills: {user.skills}</p>
              <p>City: {user.location}</p>
            </div>
            <p style={{ fontSize: "20px", fontWeidth: "100" }}>Projects</p>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
              {projects.map(project => {
                console.log(project)
                return (
                  <Card style={{ width: "50px", margin: "10px", backgroundColor: "rgba(255, 255, 255, 0.78)" }} className={classes.root} id={project._id} key={project._id}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {project.project_name}
                      </Typography>
                      <Typography className={classes.title} gutterBottom>
                        {project.description}
                      </Typography>
                      <Typography className={classes.pos}>
                        {project.tags}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {projectUsers.map(user => {
                          let full_name = `${user.first_name} ${user.last_name} `;
                          return full_name;
                        })}
                        <br />
                      </Typography>
                    </CardContent>
                  </Card>
                )

                // let full_name = `${user.first_name} ${user.last_name} `;
                // return full_name;
              })}
            </div>
            <Link to="/editProfile"><button
              className="uk-button uk-button-secondary buttons">Update Profile</button></Link>

          </div>
        </div>
        <div id="buttonContainer">
          <Link to="/createproject"><motion.button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Create Project</motion.button></Link>
          <Link to="/searchproject"><motion.button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Search Project</motion.button></Link>
        </div>
      </Container>
    </motion.div>
  );
}
function get_user_data({ auth }) {
  return { auth }
}
export default connect(get_user_data, actions)(Profile);