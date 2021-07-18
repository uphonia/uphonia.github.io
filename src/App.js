import React from 'react'
import './index.css';
import Home from './Home'
import Works from './Works'
import Navbar from './Navbar'
import Contact from './Contact'
import {HashRouter} from 'react-router-dom'

function App() {
	return (
		<HashRouter>
			<div className="body-container">
				<Navbar />
				<hr className="solid"/>
				<div className="inner-container home-container">
					<Home />
				</div>
				<div className="inner-container works-container">
					<Works />
				</div>
				<div className="inner-container contact-container">
					<Contact />
				</div>
			</div>
		</HashRouter>
	);
}

export default App;
