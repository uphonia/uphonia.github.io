import React from 'react'
import './index.css';
import Summary from './Summary'
import Works from './Works'
import Navbar from './Navbar'
import Contact from './Contact'
import {HashRouter} from 'react-router-dom'

function App() {
	function goToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	return (
		<HashRouter>
			<div className="body-container">
				<Navbar />
				<hr className="solid"/>
				<div className="inner-container home-container">
					<Summary />
				</div>
				<div className="inner-container works-container">
					<Works />
				</div>
				<div className="inner-container contact-container">
					<Contact />
				</div>
			</div>
			<button onClick={goToTop} className="return-btn"></button>
		</HashRouter>
	);
}

export default App;
