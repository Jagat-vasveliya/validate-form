import React from "react";
import "./index.css";
export default function Display(props) {
	return (
		<div className="main-container">
			<div className="sub-container">
				<img
					src={URL.createObjectURL(props.data.profile)}
					alt="Profile"
					height="200px"
					width="200px"
				/>
				<h1>
					{props.data.firstName} {props.data.lastName}
				</h1>
				<h2>{props.data.age} Year</h2>
				<p className="address">{props.data.address}</p>
			</div>
		</div>
	);
}
