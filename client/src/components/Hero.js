import React from 'react';

const Hero = () => {
    return (

        <div className="uk-cover-container" id="hero">
            <h1>Welcome to Pro Hub 2020!</h1>
            <div id="carousel" className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="autoplay: true; animation: fade">
                <ul class="uk-slideshow-items">
                    <li>
                        <img src={require("../images/stanley-dai-73OZYNjVoNI-unsplash.jpg")} alt="white-boarding" uk-cover />
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

            <h5>Find real-life team members for any project you plan of. Pro-Hub-2020 is here for those who want to form a perfect team. Create an account and start searching today!</h5>
        </div>
    )

}

export default Hero;