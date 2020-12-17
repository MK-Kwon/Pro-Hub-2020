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
        <div>
          {projects.map(project => {
            return (
              <Card style={{ marginBottom: "10px", backgroundColor: "rgba(255, 255, 255, 0.78)" }} className={classes.root} id={project._id} key={project._id}>
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
          })}
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
export default connect(get_user_data, actions)(ProjectProfile);