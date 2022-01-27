import React, { useState, useRef } from "react";
import "./index.css";

export default function Form() {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		age: "",
		address: "",
	});
	const [FisrtNameError, setFisrstNameError] = useState(false);
	const [FisrtNameError1, setFisrstNameError1] = useState(false);
	const [LastNameError, setLastNameError] = useState(false);
	const [LastNameError1, setLastNameError1] = useState(false);
	const [ageError, setAgeError] = useState(false);
	const [addressError, setAddressError] = useState(false);
	//const [profile, setProfile] = useState("");
	const fileData = useRef();

	const setValue = (event) => {
		const { name, value } = event.target;
		setData((prevState) => ({ ...prevState, [name]: value }));
		validateData(name, value);
	};
	const validateData = (name, value) => {
		let check;
		switch (name) {
			case "firstName":
				check = /^[A-Za-z]+$/.test(value);
				setFisrstNameError1(
					value.length < 21
						? ""
						: "*max 20 charcater are allowed"
				);
				check
					? setFisrstNameError("")
					: setFisrstNameError("*Only Cheacters are allowd");
				break;

			case "lastName":
				check = /^[a-zA-Z ]+$/.test(value);
				setLastNameError1(
					value.length < 21
						? ""
						: "*max 20 charcater are allowed"
				);
				check
					? setLastNameError("")
					: setLastNameError("*Only Charchater are allowd");
				break;

			case "age":
				setAgeError(
					value >= 10 && value < 101
						? ""
						: "*Minimum 10 Year & Maximum 100 Years are allowd"
				);
				break;

			case "address":
				setAddressError(
					value.length > 25
						? "*Maximum 25 Charcaters are allowd"
						: ""
				);
				break;

			default:
				break;
		}
	};
	const sendData = (event) => {
		console.log(data);
		console.log(fileData.current.value);
		event.preventDefault();
	};
	return (
		<div className="container">
			<form className="main-form" onSubmit={sendData}>
				<div className="form-control">
					<label className="main-label">First Name</label>
					<input
						type="text"
						name="firstName"
						value={data.firstName}
						placeholder="First Name"
						className="input-filed"
						onChange={setValue}
					/>
					<p className="error">{FisrtNameError}</p>
					<p className="error">{FisrtNameError1}</p>
				</div>
				<div className="form-control">
					<label className="main-label">Last Name</label>
					<input
						type="text"
						name="lastName"
						value={data.lastName}
						placeholder="Last Name"
						className="input-filed"
						onChange={setValue}
					/>
					<p className="error">{LastNameError}</p>
					<p className="error">{LastNameError1}</p>
				</div>
				<div className="form-control">
					<label className="main-label">Age</label>
					<input
						type="number"
						name="age"
						value={data.age}
						placeholder="Age"
						className="input-filed"
						onChange={setValue}
					/>
					<p className="error">{ageError}</p>
				</div>
				<div className="form-control">
					<label className="main-label">Address</label>
					<textarea
						name="address"
						className="input-filed"
						value={data.address}
						placeholder="Address"
						onChange={setValue}
					/>
					<p className="error">{addressError}</p>
				</div>
				<div className="form-control">
					<input
						type="File"
						name="profile"
						className="input-file"
						ref={fileData}
					/>
				</div>
				<div className="form-control btn-block">
					<input
						type="submit"
						name="submit"
						value="Submit"
						className="btn"
					/>
				</div>
			</form>
		</div>
	);
}
