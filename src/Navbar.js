import React from 'react'
import {FiMail} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {IoCodeWorking} from 'react-icons/io5'

const Navbar = () => {
	return (
		<nav className="navbar">
	  		<ul className="nav-links">
	  			<li>
	  				<a href="#home">
						<AiFillHome className="nav-icon"/> HOME
					</a>
	  			</li>
				<li>
	  				<a href="#works">
						<IoCodeWorking className="nav-icon"/> WORKS
					</a>
	  			</li>
				<li>
					<a href="#contact">
						<FiMail className="nav-icon"/> CONTACT
					</a>
				</li>
	  		</ul>
		</nav>
	)
}

export default Navbar
