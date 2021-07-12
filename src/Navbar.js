import React from 'react'
import { NavLink } from 'react-router-dom'
import {FiMail} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {IoCodeWorking} from 'react-icons/io5'

const Navbar = () => {
	return (
		<nav className="navbar">
	  		<ul className="nav-links">
	  			<li>
	  				<NavLink to="/" exact activeStyle={{textDecoration: "underline"}}>
						<AiFillHome className="nav-icon"/>
						HOME
					</NavLink>
	  			</li>
				<hr className="solid"/>
				<li>
	  				<NavLink to="/works" exact activeStyle={{textDecoration: "underline"}}>
						<IoCodeWorking className="nav-icon"/>
						WORKS
					</NavLink>
	  			</li>
				<hr className="solid"/>
				<li>
	  				<FiMail className="nav-icon"/>CONTACT
	  			</li>
	  		</ul>
		</nav>
	)
}

export default Navbar
