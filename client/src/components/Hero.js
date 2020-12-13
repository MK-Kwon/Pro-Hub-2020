import React from 'react'
import { motion } from "framer-motion"

const Hero = () => {

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
      <h1>Welcome to Co-Lab!</h1>

      <div id="carousel" className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="autoplay: true; animation: fade">
        <ul class="uk-slideshow-items">
          <li>
            <img src={require("../images/helloquence-5fNmWej4tAA-unsplash_optimized.jpg")} alt="white-boarding" uk-cover />
          </li>
          <li>
            <img src={require("../images/benjamin-combs-wuU_SSxDeS0-unsplash_optimized.jpg")} alt="gardening" uk-cover />
          </li>
          <li>
            <img src={require("../images/john-schnobrich-FlPc9_VocJ4-unsplash_optimized.jpg")} alt="pointing at laptop" uk-cover />
          </li>
        </ul>
        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous">{"⇚"}</a>
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next">{"⇛"}</a>
      </div>

      <h5>Find real-life team members for any project you can dream of. Co-Lab is here for those who prefer face-to-face interaction. Create an account and start searching for your perfect team-mates today.</h5>
    </motion.div>
  )
}

export default Hero;