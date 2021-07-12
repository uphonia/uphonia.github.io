import React from 'react'
import { FaGithub, FaLinkedin} from 'react-icons/fa'
import {FiMail, FiPaperclip} from 'react-icons/fi'

function Links() {
	return (
		<div className="links-container">
			<ul>
				<li>
					<FiPaperclip/>
					<a href={process.env.PUBLIC_URL + '/WuAngela_Resume.pdf'} target="_blank">
						Resume
					</a>
				</li>
				<li>
					<FaGithub/>
					<a href="https://github.com/uphonia">
						Github
					</a>
				</li>
				<li>
					<FaLinkedin/>
					<a href="https://www.linkedin.com/in/angela-wu-118075b9/">
						LinkedIn
					</a>
				</li>
				<li>
					<FiMail/>
					<a href="mailto:wu.angela96@icloud.com">
						Contact
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Links;
