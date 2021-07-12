import React from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import {FiPaperclip} from 'react-icons/fi'

const Contact = () => {
    return (
        <div className="inner-contact-container">
            <h2> Contact </h2>
            <div className="info-container">
                <ul>
                    <li>
                        <FiPaperclip className="nav-icon"/>RESUME
                    </li>
                    <hr className="solid"/>
                    <li>
                        <FaGithub className="nav-icon"/>GITHUB
                    </li>
                    <hr className="solid"/>
                    <li>
                        <FaLinkedin className="nav-icon"/>LINKEDIN
                    </li>
                    <hr className="solid"/>
                </ul>
            </div>
        </div>
    )
}

export default Contact
