import React from 'react'
import {IoLocationOutline} from 'react-icons/io5'
import {SiNuxtDotJs} from 'react-icons/si'

function Summary() {
	return (
		<div className="info-container">
			<h1 className="main-header">
				Hi, I'm Angela Wu
			</h1>
			<ul>
				<li style={{flexDirection:"row"}}>
					<IoLocationOutline className="info-icon"/>
					New York City
				</li>
				<li>
					<div className="info-header">
						<SiNuxtDotJs className="info-icon"/>
						<span>Education:</span>
					</div><br/>
					<div className="info-text">
						New York University <br/>
						Bachelor's in Computer Science <br/>
						Minor in Game Design
					</div>
				</li>
				<li>
					<div className="info-header">
						<SiNuxtDotJs className="info-icon"/>
						<span>Current role:</span>
					</div><br/>
					<div className="info-text">
						Software Engineer @ Modrokkr
					</div>
				</li>
				<li>
					<div className="info-header">
						<SiNuxtDotJs className="info-icon"/>
						<span>Status:</span>
					</div><br/>
					<div className="info-text">
						I am open to new opportunities that are permanently remote from anywhere (or just North America). I am open to front-end or full-stack roles. Please reach out if you would like to learn more!
					</div>
				</li>
			</ul>
		</div>
	)
}

export default Summary;
