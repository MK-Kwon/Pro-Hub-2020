import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { usePosition } from 'use-position'
import API from "../../utils/API"

const CreateProject = props => {
  const user = props.auth || {};

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

  const { latitude, longitude } = usePosition();
  const [projectState, setProjectState] = useState({
    users: [],
    project_name: "",
    team_name: "",
    team_lead: `${user.first_name} ${user.last_name}`,
    description: "",
    tags: "",
    location: "",
    num_members: 2
  });
  const get_location = () => {
    API.getLocation(latitude, longitude)
      .then(res => {
        const city = `${res.data.address.city}, ${res.data.address.state}`
        setProjectState({ ...projectState, location: city })
      })
      .catch(err => console.log(err));
  };
  const handleCreateProject = (event) => {
    // event.preventDefault();
    const data = {
      _id: projectState.id,
      project_name: projectState.project_name,
      team_lead: projectState.team_lead,
      description: projectState.description,
      tags: projectState.tags,
      location: projectState.location,
      num_members: projectState.num_members,
      users: [user._id]

    }

    API.postProject(data)
      .then(res => {
        console.log("After Request")
        console.log(res.data)
      })
      .catch(err => console.log(err));


  };

  const handleNameChange = event => {
    setProjectState({ ...projectState, project_name: event.target.value })
  };
  const handleDescriptionChange = event => {
    setProjectState({ ...projectState, description: event.target.value })
  }
  const handleTagsChange = event => {
    setProjectState({ ...projectState, tags: event.target.value })
  };
  const handleLocationChange = event => {
    setProjectState({ ...projectState, location: event.target.value })
  };
  const handleMembersChange = event => {
    setProjectState({ ...projectState, num_members: event.target.value })
  }
  return (
    <motion.div initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants} className="contentContainer">
      <Container>
        <div id="createTeamContainer">
          <h3 className="pageTitle">Create your Project</h3>
          <hr></hr>
          <div id="team_form_d">
            <input
              className="enter_project_name"
              value={projectState.project_name}
              type="text"
              placeholder="Enter Project Name"
              onBlur={(e) => e.target.placeholder = "Enter Project Name"}
              onFocus={(e) => e.target.placeholder = ""}
              onChange={(e) => handleNameChange(e)}>
            </input>
            <p className="team_lead">Team Lead: {user.first_name} {user.last_name}</p>
            <textarea
              className="description_t"
              type="input"
              value={projectState.description}
              placeholder="Write a short description about your project"
              onBlur={(e) => e.target.placeholder = "Write a short description about your project"}
              onFocus={(e) => e.target.placeholder = ""}
              onChange={(e) => handleDescriptionChange(e)}>
            </textarea>
            <input
              className="tags"
              type="text"
              placeholder="Tags"
              value={projectState.tags}
              onBlur={(e) => e.target.placeholder = "Tags"}
              onFocus={(e) => e.target.placeholder = ""}
              onChange={(e) => handleTagsChange(e)}>
            </input>
            <input
              id="spinbox_i"
              type="number"
              min="2"
              max="5"
              value={projectState.num_members}
              required placeholder="Number of Teammates"
              onBlur={(e) => e.target.placeholder = "Number of Teammates"}
              onFocus={(e) => e.target.placeholder = ""}
              onChange={(e) => handleMembersChange(e)}>
            </input>
            <div id="location_div">
              <input
                value={projectState.location}
                id="city_i"
                tyoe="text"
                placeholder="Enter Home City"
                onBlur={(e) => e.target.placeholder = "Enter Home City"}
                onFocus={(e) => e.target.placeholder = ""}
                onChange={(e) => handleLocationChange(e)}>
              </input>
              <button
                id="add_current_location_b"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={get_location}
              >Use Current Location</button>
            </div>
            {/* <input tyoe="number" step="3" placeholder="Tags" onBlur={(e) => e.target.placeholder = "Tags"} onFocus={(e) => e.target.placeholder = ""}></input> */}

          </div>


          <div id="buttonContainer">
            <Link to="/searchusers">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons"
                onClick={handleCreateProject}>Submit Project</motion.button>
            </Link>
          </div>
        </div>
      </Container>
    </motion.div >
  );
}
// export default CreateTeam;
function get_user_data({ auth }) {
  return { auth }
}
export default connect(get_user_data, actions)(CreateProject);