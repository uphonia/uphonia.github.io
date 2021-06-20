import React from 'react'
import './App.css';
import './fonts.css'
import Home from './Home'
import Works from './Works'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className="main-container">
				<h1 className="main-header">
					<span>
						WELCOME
					</span>
				</h1>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/works">
						<Works />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
