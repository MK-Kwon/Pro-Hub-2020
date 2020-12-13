import React from 'react'
import ReactDOM from 'react-dom'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

//We need to make the join team button generate an updated table for the user and display it on user dash. User also needs to be added to the roster for the team on Mongoose DB

const CreateTeam = props => {

    const pageVariants = {
        initial: {
            opacity: 0,
            x: "100vw",
            scale: 0.8
        },
        in: {
            opacity: 1,
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
                    <h1 className="pageTitle">Team Search</h1>
                    <img className="searchImage" src="https://via.placeholder.com/500" alt="team"></img>
                    <p style={{ margin: "auto" }}>
                        <Link to="/dashboard"><motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large buttons" style={{ color: "white" }}>Back to Dashboard</motion.button></Link>
                        <Link to="/dashboard"><motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large buttons" style={{ color: "white" }}>Join Team</motion.button></Link>
                    </p>
                </motion.div>
            </Container>
        </div>
    );
}
export default CreateTeam;