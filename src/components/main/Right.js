import React, { useEffect, useState } from "react";
import anis from "../../images/anis molla.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./right.css";

const Right = ({ activitiesTime }) => {
	const [breakTime, setBreakTime] = useState(0);
	const notify = () =>
		toast.success("Congratulations! You have done your activity.", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	useEffect(() => {
		let breakTimeFromStorage = localStorage.getItem("break-time");
		if (breakTimeFromStorage) {
			setBreakTime(breakTimeFromStorage);
		}
	}, []);

	const times = [
		{
			id: 1,
			time: 10,
		},
		{
			id: 2,
			time: 20,
		},
		{
			id: 3,
			time: 40,
		},
		{
			id: 4,
			time: 60,
		},
	];

	const addToLocalStorage = (time) => {
		setBreakTime(time);
		localStorage.setItem("break-time", time);
	};

	return (
		<div className="right-side-container">
			<div className="profile">
				<img src={anis} alt="anis molla" />
				<div className="profile-info">
					<h1>Md.Anis Molla</h1>
					<p>Junior Web Developer</p>
					<p>Barishal,Bangladesh</p>
				</div>
			</div>
			<div className="breaks">
				<h1>Add a Break</h1>
				<div className="breaks-container">
					{times.map((time) => (
						<button
							key={time.id}
							onClick={() => addToLocalStorage(time.time)}
							className="break"
						>
							{time.time}m
						</button>
					))}
				</div>
			</div>
			<div className="activities-details">
				<h3 className="activities-time">Activities time: {activitiesTime}m</h3>
				<h3 className="activities-time">Break time: {breakTime}m</h3>
				<button className="activity-button" onClick={notify}>
					Activity Completed
				</button>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</div>
		</div>
	);
};

export default Right;
