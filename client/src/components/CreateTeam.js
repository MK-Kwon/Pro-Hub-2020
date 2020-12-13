import React from 'react'
import ReactDOM from 'react-dom'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom"
import { connect } from 'react-redux';
import * as actions from '../actions';


const CreateTeam = props => {

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

    return (
      animations
        <motion.div initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants} className="contentContainer">
            <Container>
                <div id="createTeamContainer">

        <div className="contentContainer">
            <Container>
                <div id="createTeamContainer">
                    <h1>Create your Team!</h1>
                    <hr></hr>
                    {/* Needs to be a form */}
                    <div>
                        <p>Team Name</p>
                        <p>Team Name: </p>
                        <p>Number of Members: </p>

                        <p>Description: </p>

                        <p>Location: </p>
                    </div>
                </div>
                <div id="buttonContainer">

                    <Link to="/dashboard"><motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Back to Dashboard</motion.button></Link>
                    <Link to="/searchusers"> <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Submit Team</motion.button></Link>

                        <p>Team Lead</p>

                        <p>Description</p>

                        <p>Location</p>
                    </div>
                </div>
                <div id="buttonContainer">
                    <Link to="/dashboard"><button className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Back to Dashboard</button></Link>
                    <Link to="/searchusers"> <button className="uk-button uk-button-secondary uk-button-large uk-width-1-2@m buttons" >Submit Team</button></Link>

                </div>
            </Container>
        </motion.div>
    );
}

// export default CreateTeam;
function get_user_data({ auth }) {
  return { auth }
}

export default connect(get_user_data, actions)(CreateTeam); 