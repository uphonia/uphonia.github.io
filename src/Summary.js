import React from 'react'
import {IoLocationOutline} from 'react-icons/io5'
import {SiNuxtDotJs} from 'react-icons/si'

function Summary() {
	return (
		<div className="sub-container">
			<div className="info-container">
				<h1 className="main-header">
					Hi, I'm Angela Wu
				</h1>
				<ul>
					<li style={{flexDirection:"row"}}>
						<IoLocationOutline className="info-icon"/>
						Vancouver, Canada
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
							Software Engineer @ Block Renovation
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Summary;
