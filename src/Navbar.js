import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="navbar">
	  		<ul className="nav-links">
	  			<li>
	  				<NavLink to="/" exact activeStyle={{textDecoration: "underline"}}>
						Home
					</NavLink>
	  			</li>
				<li>
	  				<NavLink to="/works" exact activeStyle={{textDecoration: "underline"}}>Works</NavLink>
	  			</li>
	  		</ul>
		</nav>
	)
}

export default Navbar
