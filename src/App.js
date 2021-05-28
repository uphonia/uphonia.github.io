import React from 'react'
import './App.css';
import Summary from './Summary'
import Links from './Links'

function App() {
	return (
		<div className="main-container">
			<div className="main-header">
				ANGELA WU
			</div>
			<div className="sub-container">
				<Summary />
				<Links />
			</div>
		</div>
	);
}

export default App;
