import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { connect } from 'react-redux'
import * as actions from '../actions'
import { usePosition } from 'use-position';
import API from "../utils/API";

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

  // const { cityState, useCityState } = useState("Enter Home City");
  const { latitude, longitude, error } = usePosition();
  console.log(latitude)
  console.log(longitude)
  const get_location = () => {

    API.getLocation(latitude, longitude)
      .then(res => {
        console.log(res.data)
        const city = `${res.data.address.city}, ${res.data.address.state}`
        var city_i_e = document.getElementById("city_i").value = city
        // city_i_e.setAttribute("placeholder", city)
        // city_i_e.textContent = city
        // return city
      })
      .catch(err => console.log(err));
  };

  const { projectNameState, useProjectNameState } = useState("");
  const handleCreateProject = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    db.Project.insertOne(
      {
        name: {projectNameState},
        numMembers: Number,
        projectDesc: String,
        projectLoc: String,
        image: String,
        users: [
          {
            type: Schema.Types.ObjectId,
            ref: "users"
          }
        ]
      }
    )
    console.log(input.test.val())
  };


  // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

  // console.log(latitude, longitude, error)
  // const { cityState, useCityState } = useState("Enter Home City");

  return (
    <motion.div initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants} className="contentContainer">
      <Container>
        <div id="createTeamContainer">
          <h1 className="pageTitle">Create your Project!</h1>
          <hr></hr>
          {/* Needs to be a form */}
          <div id="team_form_d">
            <input
              value={this.projectName}
              type="text"
              placeholder="Enter Project Name"
              onBlur={(e) => e.target.placeholder = "Enter Project Name"}
              onFocus={(e) => e.target.placeholder = ""}>

            </input>
            <input
              type="text"
              placeholder="Enter Team Name"
              onBlur={(e) => e.target.placeholder = "Enter Team Name"}
              onFocus={(e) => e.target.placeholder = ""}>

            </input>
            {/* <input onfocus="this.placeholder = ''" onblur="this.placeholder='Address, Neighborhood, City, County'" type="text" name="" id="search_i" placeholder="Address, Neighborhood, City, County"></input> */}
            <p>Team Lead: {user.first_name} {user.last_name}</p>
            <textarea 
              className="description_t" 
              type="input" 
              placeholder="Write a short description about your project" 
              onBlur={(e) => e.target.placeholder = "Write a short description about your project"} 
              onFocus={(e) => e.target.placeholder = ""}>

            </textarea>
            <input 
              type="text" 
              placeholder="Tags" 
              onBlur={(e) => e.target.placeholder = "Tags"} 
              onFocus={(e) => e.target.placeholder = ""}>

            </input>
            <div id="location_div">
              <input 
                id="city_i" 
                tyoe="text" 
                placeholder="Enter Home City" 
                onBlur={(e) => e.target.placeholder = "Enter Home City"} 
                onFocus={(e) => e.target.placeholder = ""}>

              </input>
              <button 
                id="add_current_location_b" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={get_location} className="uk-button uk-button-secondary uk-button-large uk-flex-left buttons">Use Current Location</button>
            </div>
            {/* <input tyoe="number" step="3" placeholder="Tags" onBlur={(e) => e.target.placeholder = "Tags"} onFocus={(e) => e.target.placeholder = ""}></input> */}
            <input 
              id="spinbox_i" 
              type="number" 
              min="2" 
              max="20" 
              required placeholder="Number of Teammates" 
              onBlur={(e) => e.target.placeholder = "Number of Teammates"} 
              onFocus={(e) => e.target.placeholder = ""}>

            </input>
          </div>
        </div>
        <div id="buttonContainer">
          <Link to="/dashboard">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons">Back to Dashboard</motion.button>
          </Link>
          <Link to="/searchusers"> 
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} 
              className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" 
              onClick={handleCreateProject}>Submit Project</motion.button>
          </Link>
        </div>
          <div id="team_form_d">
            <input type="text" placeholder="Enter Project Name" onBlur={(e) => e.target.placeholder = "Enter Project Name"} onFocus={(e) => e.target.placeholder = ""}></input>
            <input type="text" placeholder="Enter Team Name" onBlur={(e) => e.target.placeholder = "Enter Team Name"} onFocus={(e) => e.target.placeholder = ""}></input>
            <p>Team Lead: {user.first_name} {user.last_name}</p>
            <textarea className="description_t" type="input" placeholder="Write a short description about your project" onBlur={(e) => e.target.placeholder = "Write a short description about your project"} onFocus={(e) => e.target.placeholder = ""}></textarea>
            <input type="text" placeholder="Tags" onBlur={(e) => e.target.placeholder = "Tags"} onFocus={(e) => e.target.placeholder = ""}></input>
            <div id="location_div">
              <input id="city_i" tyoe="text" placeholder="Enter Home City" onBlur={(e) => e.target.placeholder = "Enter Home City"} onFocus={(e) => e.target.placeholder = ""}></input>
              <button id="add_current_location_b" whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={get_location} className="uk-button uk-button-secondary uk-button-large uk-flex-left buttons">Use Current Location</button>
            </div>
            <input id="spinbox_i" type="number" min="2" max="20" required placeholder="Number of Teammates" onBlur={(e) => e.target.placeholder = "Number of Teammates"} onFocus={(e) => e.target.placeholder = ""}></input>
          </div>
        </div>
        <div id="buttonContainer">
          <Link to="/dashboard"><motion.button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Back to Dashboard</motion.button></Link>
          <Link to="/searchusers"> <motion.button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Submit Project</motion.button></Link>
        </div>
      </Container>
    </motion.div>
  );
}

// export default CreateTeam;
function get_user_data({ auth }) {
  return { auth }
}
export default connect(get_user_data, actions)(CreateProject);
