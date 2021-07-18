import React from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import {FiMail, FiPaperclip} from 'react-icons/fi'

const Contact = () => {
    return (
        <div className="sub-container">
            <h2> <a id="contact">Contact</a> </h2>
            <div className="info-container contact-info-container">
                <ul>
                    <li>
                        <FiPaperclip className="nav-icon"/><a href={process.env.PUBLIC_URL + '/WuAngela_Resume.pdf'} target="_blank">
    						Resume
    					</a>
                    </li>
                    <li>
                        <FaGithub className="nav-icon"/><a href="https://github.com/uphonia">
    						Github
    					</a>
                    </li>
                    <li>
                        <FaLinkedin className="nav-icon"/><a href="https://www.linkedin.com/in/angela-wu-118075b9/">
    						LinkedIn
    					</a>
                    </li>
                    <li>
    					<FiMail className="nav-icon"/>
    					<a href="mailto:wu.angela96@icloud.com">
    						Email Me
    					</a>
    				</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact
