import React from 'react'
import Summary from './Summary'
import Links from './Links'

const Home = () => {
    return (
        <div className="sub-container">
            <Summary />
            <hr className="solid"/>
            <Links />
        </div>
    )
}

export default Home
