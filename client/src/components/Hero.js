// Welcome to the Dream Team's Co-Lab Project! This is our landing page.
import React from 'react'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { connect } from 'react-redux'
import * as actions from '../actions'
import { ButtonHover } from "./Buttons/Button";
import { ButtonHover2 } from "./Buttons/Button2";
import { ButtonHover3 } from "./Buttons/Button3";
import { ButtonHover4 } from "./Buttons/Button4";
import { ButtonHover5 } from "./Buttons/Button5";

const Hero = (props) => {
  // This determines the movement of the div when the page loads.
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
    <motion.div initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants} className="uk-cover-container" id="hero">
      <h1><span style={{ letterSpacing: "0.25rem", fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji" }}>Welcome to ProHub</span></h1>
      <h6><span style={{ letterSpacing: "0.1rem" }}>Find like minded people for any project you can dream of</span></h6>
      <br></br>
      <div id="carousel" className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="autoplay: true; animation: fade">
        <ul className="uk-slideshow-items">
          <li>
            <Link key="1" to="/createproject" className="carousel_button"><ButtonHover2>Start a Project</ButtonHover2></Link>
            <img className="carousel_img" src={require("../images/subscribe,email,news,subscription,online,newsletter,media,communication,web,message,lost in space,space,discovery,technology,internet,mail subscriber,new subscriber,mail,new discovery,discover,onboard,welcome,connection,tech,1768778.png")} alt="desk with notebook" uk-cover="true" />
          </li>
          <li>
            <Link key="1" to="/profile" className="carousel_button"><ButtonHover>Create a Profile</ButtonHover></Link>
            <img className="carousel_img" src={require("../images/data-2103908-0.png")} alt="typing on laptop" uk-cover="true" />
          </li>
          <li>
            <Link key="1" to="/searchusers" className="carousel_button"><ButtonHover3>Invite your Friends</ButtonHover3></Link>
            <img className="carousel_img" src={require("../images/startup-launch-2040891-1.png")} alt="hand with chalk" uk-cover="true" />
          </li>
          <li>
            <Link key="1" to="/searchprojects" className="carousel_button"><ButtonHover4>Find your Calling</ButtonHover4></Link>
            <img className="carousel_img" src={require("../images/success-2103482-0.png")} alt="gardening" uk-cover="true" />
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="http://weavesilk.com/" className="carousel_button"><ButtonHover5 >Have Some Fun</ButtonHover5></a>
            <img className="carousel_img" src={require("../images/3309870.png")} alt="hands all together" uk-cover="true" />
          </li>
        </ul>
        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"></a>
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>
      </div>
    </motion.div>
  )
}

function get_user_data({ auth }) {
  return { auth }
}
export default connect(get_user_data, actions)(Hero);