import React from 'react'

import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

const Works = () => {
    return (
        <div className="sub-container">
            <h2> <a id="works">Works</a> </h2>
            <ul>
                <li className="work-container">
                    <div className="work-example">
                        <img alt="pokepedia" src={process.env.PUBLIC_URL+"/pokepedia.png"}/>
                    </div>
                    <div className="overlay-container">
                        <div className="work-contents">
                            <div className="work-title">
                                <h2><a href="https://uphonia.github.io/Pokepedia">Pokepedia</a></h2>
                                <div className="link-box">
                                    <a href="https://github.com/uphonia/Pokepedia">
                                        <FaGithub style={{height:"20px", width:"20px", marginRight:"20px"}}/>
                                    </a>
                                    <a href="https://uphonia.github.io/Pokepedia">
                                        <FaExternalLinkAlt style={{height:"20px", width:"20px"}}/>
                                    </a>
                                </div>
                            </div>
                            <div className="work-skills">
                                <p>React, HTML, CSS, Javascript</p>
                            </div>
                            <div className="work-description">
                                <p> Personal rendition of a Pokemon encyclopedia. Includes searching, filtering, and viewing of Pokemon entries obtained from an API. </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Works
