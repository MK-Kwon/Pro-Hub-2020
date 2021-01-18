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
      variants={pageVariants} className="contentContainer">
      <Container>
        <div id="profileCard">
          <div className="uk-card-header">
            <div className="uk-grid-large uk-flex-middle uk-grid">
              <div className="uk-width-auto">
                <img
                  // src={user.github_photo ? (user.photo, console.log("user.photo", user.photo)) : (user.github_photo, console.log("user.github_photo", user.github_photo))} 
                  src={user.github_photo ? user.github_photo : user.photo}
                  id="profile_picture_img"
                  className="uk-border-circle"
                  width="40" height="40"
                  alt="profile pic" ></img>
              </div>
              <div className="uk-width-expand">
                <h3 id="profileName" className="uk-card-title uk-margin-remove-bottom">{user.first_name} {user.last_name}<span style={{ fontStyle: "italic" }}>'s Profile</span></h3>
                <p className="uk-text-meta uk-margin-remove-top">{user.location}</p>
              </div>
            </div>
          </div>
          <div id="profile-background" className="uk-card-body">
            <Card class="profile-padding" style={{ width: "98%", margin: "2px", padding: "50px 30px 30px 100px", backgroundColor: "rgba(255, 255, 255, 0.78)" }} className={classes.root}>
              <ul>
                <div>
                  <li><p className="profile"><span style={{ color: "#863dfa", fontWeight: "900" }}>Email: </span> {user.email}</p></li>
                  <li>{user.github_username ? <p className="github-profile"><a className="github-profile-link" target="_blank" rel="noopener noreferrer" href={user.github_url} alt="Github Link"><span className="github-profile-link" style={{ color: "#863dfa", fontWeight: "900" }}>Github Profile</span></a>|| Followers: {user.followers} || Following: {user.following} || Repos: {user.repos}</p> : <> </>}</li>
                </div>
                <div>
                  <li><p className="profile"><span style={{ color: "#863dfa", fontWeight: "900" }}>Bio: </span>{user.bio}</p></li>
                  <li><p className="profile"><span style={{ color: "#863dfa", fontWeight: "900" }}>Skills: </span>{user.skills}</p></li>
                  <li><p className="profile"><span style={{ color: "#863dfa", fontWeight: "900" }}>City: </span>{user.location}</p></li>
                </div>
              </ul>
            </Card>
            <ul>
              <li className="myproject"><p className="profile-project"><span style={{ color: "#505152", fontWeight: "900", fontSize: "1.25rem", margin: "0" }}>My Projects</span></p></li>
            </ul>
            {projects.map(project => {
              console.log(project)
              return (
                <div>
                  <CardContent class="project-padding" style={{ width: "98%", margin: "5px", backgroundColor: "rgba(255, 255, 255, 0.95)", padding: "50px 20px 20px 100px" }} className={classes.root} id={project._id} key={project._id}>
                      <ul>
                        <li><p className="profile"><span style={{ color: "#863dfa", fontWeight: "900", fontSize: "1rem" }}>Name: </span>{project.project_name}</p></li>
                        <li><p className="profile"><span style={{ color: "#863dfa", fontWeight: "900", fontSize: "1rem" }}>Description: </span>{project.description}</p></li>
                        <li><p className="profile"><span style={{ color: "#863dfa", fontWeight: "900", fontSize: "1rem" }}>Tags: </span>{project.tags} </p></li>
                        <li><p className="profile"><span style={{ color: "#863dfa", fontWeight: "900", fontSize: "1rem" }}>Team Members: </span>
                          {projectUsers.map(user => {
                            let full_name = `${user.first_name}  ${user.last_name}, `;
                            return full_name
                          })}
                          <br />
                        </p></li>
                      </ul>
                  </CardContent>
                </div>
              )
            })}
            <div id="buttonContainer">
              <Link to="/editProfile"><motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Update Profile</motion.button></Link>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
function get_user_data({ auth }) {
  return { auth }
}
export default connect(get_user_data, actions)(Profile);