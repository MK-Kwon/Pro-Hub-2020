import React from 'react'
import ReactDOM from 'react-dom'
import Container from '@material-ui/core/Container'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

// This page should cycle through users.

const SearchUsers = props => {

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
    return (
        <motion.div initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants} >
            <Container>

                <h1 className="pageTitle">Find Team-Mates</h1>
                {/* <div className="finderContainer"> */}
                {/* UIKit's slideshow to cycle through the user database. */}
                <div className="uk-visible-toggle uk-light finderContainer" tabindex="-1" uk-slideshow="animation: pull">

                    <ul className="uk-slideshow-items">
                        <li>
                            <h4>User Information Here</h4>
                            <img className="searchImage" src="https://via.placeholder.com/500" alt="user profile" uk-cover></img>
                        </li>
                        <li>
                            <h4>User Information Here</h4>
                            <img className="searchImage" src="https://via.placeholder.com/500" alt="user profile" uk-cover></img>
                        </li>
                        <li>
                            <h4>User Information Here</h4>
                            <img className="searchImage" src="https://via.placeholder.com/500" alt="user profile" uk-cover></img>
                        </li>
                    </ul>

                    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

                </div>
                {/* </div> */}
                <div>

                    <p style={{ margin: "auto" }}>
                        <Link to="/dashboard"><motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large buttons" style={{ color: "white" }}>Back to Dashboard</motion.button></Link>
                        <Link to="/emailUser"><motion.button whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} className="uk-button uk-button-secondary uk-button-large buttons">Ask them to join</motion.button></Link>
                    </p>
                </div>
            </Container>
        </motion.div>
    );
}
export default SearchUsers;