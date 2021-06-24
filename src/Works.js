import React from 'react'

const Works = () => {
    return (
        <div className="main-work-container">
            <ul>
                <li className="work-container">
                    <div className="work-img">
                        <img src={process.env.PUBLIC_URL + "/pokeball4.png"}/>
                    </div>
                    <div className="work-info">
                        <div className="work-title">
                            <h2><a href="https://github.com/uphonia/Pokepedia">Pokepedia</a></h2>
                        </div>
                        <div className="work-skills">
                            <p>React, HTML, CSS, Javascript</p>
                        </div>
                        <div className="work-description">
                            <p> Personal rendition of a Pokemon encyclopedia. Includes searching, filtering, and viewing of Pokemon entries. </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Works
