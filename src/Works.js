import React from 'react'

const Works = () => {
    return (
        <div className="main-work-container">
            <ul>
                <li className="work-container">
                    <div className="work-img">
                        <img src="../pika.png"/>
                    </div>
                    <div className="work-info">
                        <div className="work-title">
                            <h2><a href="https://github.com/uphonia/Pokepedia">Pokepedia</a></h2>
                        </div>
                        <div className="work-description">
                            <p> React project of a Pokemon encyclopedia. It is hugely inspired by <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page"><u>Bulbapedia</u></a>. Work in progress.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Works
