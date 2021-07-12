import React from 'react'
import './index.css';
import Home from './Home'
import Works from './Works'
import Navbar from './Navbar'
import Contact from './Contact'
import { Route, Switch } from 'react-router-dom'
import {HashRouter} from 'react-router-dom'

function App() {
	return (
		<HashRouter>
			<div className="body-container">
				<div className="inner-container home-container">
					<h1 className="main-header">
						Hi, I'm Angela Wu
					</h1>
					<Navbar />
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
