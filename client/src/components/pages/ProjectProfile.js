// This component is to display user data on the page. If they want to update their information, they must go to the dashboard component.
import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { motion } from "framer-motion"
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import API from "../../utils/API"

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

const ProjectProfile = props => {
  const user = props.auth || {};
  console.log(user)
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

  useEffect(() => {
    get_project_ids();
    get_users();
  }, []);
  const [projectState, setProjectState] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectUsers, setProjectUser] = useState([]);

  const get_users = () => {
    API.getUsers()
      .then(res => {
        const users = res.data
        setProjectState(users)
      })
      .catch(err => console.log(err));
  };

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

        })
        get_projects_from_user(user_project_ids)
      })
  }

  const showUser = (userId) => {
    // console.log("showUser");
    // console.log(userId);
    API.getUser(userId)
      .then(res => {
        console.log("showUser");
        console.log(res.data);
        const users = res.data
        setProjectUser(users)
      })
  }
  const get_projects_from_user = (data) => {
    const projects = [];
    data.forEach(id => {
      API.getProject(id)
        .then(res => {
          projects.push(res.data)
          setProjects(projects);
          projects.map(project_users => {
            console.log("projects.map")
            console.log(project_users)
            const project = project_users.users;
            project.map(id => {
              console.log("project.map")
              console.log(id)
              showUser(id);
            })
          })

          return;
        })
        .catch(err => console.log(err));
    })

  };
  return (
    <motion.div initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants} className="contentContainer">
      <Container>
        <div id="profileCard">
          <div>
            {projects.map(project => {
              return (
                <div className="myproject-card">
                  <Card style={{ width: "90%", margin: "30px auto", backgroundColor: "rgba(255, 255, 255, 0.95)", padding: "160px, 10px, 5px, 50px" }} id={project._id} key={project._id}>
                    <CardContent>
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
                  </Card>
                </div>
              )
            })}
          </div>
          <div id="buttonContainer">
            <Link to="/createproject"><motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Create Project</motion.button></Link>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}
function get_user_data({ auth }) {
  return { auth }
}
export default connect(get_user_data, actions)(ProjectProfile);