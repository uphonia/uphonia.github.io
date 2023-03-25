import React from 'react'
import { Links } from './components/ContactLink/contactLink.consts.ts';

const Contact = () => {
    return (
        <div className="sub-container">
            <h2> <a id="contact">Contact</a> </h2>
            <div className="info-container contact-info-container">
                <ul>
                    { Links.map((entry) => <ContactLink icon={entry.icon} link={entry.link} name={entry.name} /> )}
                </ul>
            </div>
        </div>
    )
}

export default Contact
