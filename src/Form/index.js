import React, { useState, useRef } from "react";
import Display from "../Display";
import "./index.css";

export default function Form() {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		age: "",
		address: "",
		profile: "",
	});
	const [FisrtNameError, setFisrstNameError] = useState(true);
	const [FisrtNameError1, setFisrstNameError1] = useState(true);
	const [LastNameError, setLastNameError] = useState(true);
	const [LastNameError1, setLastNameError1] = useState(true);
	const [ageError, setAgeError] = useState(true);
	const [addressError, setAddressError] = useState(true);
	const [show, setShow] = useState(true);
	const [finalError, setfinalError] = useState();
	const fileData = useRef();

	const setValue = (event) => {
		const { name, value } = event.target;
		event.target.type === "file"
			? setData((prevState) => ({ ...prevState, profile: fileData.current.files[0] }))
			: setData((prevState) => ({ ...prevState, [name]: value }));
		validateData(name, value);
	};
	const validateData = (name, value) => {
		let check;
		switch (name) {
			case "firstName":
				check = /^[A-Za-z ]+$/.test(value);
				setFisrstNameError1(
					value.length < 21
						? false
						: "*max 20 character are allowed"
				);
				check
					? setFisrstNameError(false)
					: setFisrstNameError("*Only Characters are allowed");
				break;

			case "lastName":
				check = /^[a-zA-Z ]+$/.test(value);
				setLastNameError1(
					value.length < 21
						? false
						: "*max 20 character are allowed"
				);
				check
					? setLastNameError(false)
					: setLastNameError("*Only Character are allowed");
				break;

			case "age":
				setAgeError(
					value >= 10 && value < 101
						? false
						: "*Minimum 10 Year & Maximum 100 Years are allowed"
				);
				break;

			case "address":
				setAddressError(
					value.length > 25
						? "*Maximum 25 characters are allowed"
						: false
				);
				break;

			default:
				break;
		}
	};
	const sendData = (event) => {
		if(!FisrtNameError && !FisrtNameError1 && !LastNameError && !LastNameError1 && !ageError && !addressError && data.profile != ''){
			setfinalError('');
			setShow(!show);
			event.preventDefault();
		}else{
			setfinalError("*Please filed out all fields");
			event.preventDefault();
		}
	};
	return show ? (
		<div className="container">
			<form className="main-form" onSubmit={sendData}>
				<p className="error">{finalError}</p>
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
						onChange={setValue}
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
	) : (
		<Display data={data} />
	);
}
