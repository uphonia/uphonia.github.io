import React from 'react'
import './index.css';
import Home from './Home'
import Works from './Works'
import Navbar from './Navbar'
import { Route, Switch } from 'react-router-dom'
import {HashRouter} from 'react-router-dom'

function App() {
	return (
		<HashRouter>
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
					<Route path="/works">
						<Works />
					</Route>
				</Switch>
			</div>
		</HashRouter>
	);
}

export default App;
