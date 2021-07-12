import React from 'react'
import {IoLocationOutline} from 'react-icons/io5'
import {SiNuxtDotJs} from 'react-icons/si'

function Summary() {
	return (
		<div className="info-container">
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
						I am open to new opportunities that are fully remote within the US and Canada. I am mainly looking for a front-end role, or any other positions I may be fit. Please reach out if you would like to learn more!
					</div>
				</li>
			</ul>
		</div>
	)
}

export default Summary;
