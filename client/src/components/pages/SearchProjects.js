import React from 'react'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

//We need to make the join team button generate an updated table for the user and display it on user dash. User also needs to be added to the roster for the team on Mongoose DB

const CreateProject = props => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "-100vw",
      scale: 1.2
    }
  };
  return (
    <div>
      <Container>
        <motion.div initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}>
          <h1 className="pageTitle">Project Search</h1>
          <h4>Swipe left or right to join a project</h4>
          {/* UIKit's slideshow to cycle through the Team database. */}
          <div className="uk-visible-toggle uk-light finderContainer" tabIndex="-1" uk-slideshow="animation: pull">

            <ul className="uk-slideshow-items">
              <li>
                <h4>Project Name</h4>
                <h5>Project Lead</h5>
                <h5>Project Description</h5>
                <h5>Skills Needed</h5>
              </li>
              <li>
                <h4>Project Name</h4>
                <h5>Project Lead</h5>
                <h5>Project Description</h5>
                <h5>Skills Needed</h5>
              </li>
              <li>
                <h4>Project Name</h4>
                <h5>Project Lead</h5>
                <h5>Project Description</h5>
                <h5>Skills Needed</h5>
              </li>
            </ul>

            {/* <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"></a> */}
            {/* <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a> */}

          </div>

          <div>
            <p style={{ margin: "auto" }}>
              <Link to="/profile"><motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large buttons" style={{ color: "white" }}>Back to Profile</motion.button></Link>
              <Link to="/searchproject"><motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large buttons" style={{ color: "white" }}>Join Project</motion.button></Link>
            </p></div>
        </motion.div>
      </Container>
    </div>

  );

}

export default CreateProject;