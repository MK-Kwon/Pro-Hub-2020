// Welcome to the Dream Team's Co-Lab Project! This is our landing page.

import React from 'react';

const Hero = () => {
    return (
            <div id="carousel" className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="autoplay: true; animation: fade">
            <ul className="uk-slideshow-items">
                
                <img className="carousel_img" src={require("../images/clement-falize-9uNFBOXBEBc-unsplash_optimized.jpg")} alt="typing on laptop" uk-cover="true" />
            </ul>
            </div>
    )
    
}


export default Hero;