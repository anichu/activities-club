import React from "react";
import "./card.css";

const Card = ({ card, setActivitiesTime }) => {
	const { id, img, name, time } = card;
	return (
		<div className="card">
			<img src={img} alt={name} />
			<div className="card-info">
				<h2>{name}</h2>
				<h4>Time required: {time}m</h4>
			</div>
			<button onClick={() => setActivitiesTime((prevTime) => prevTime + time)}>
				Add to list
			</button>
		</div>
	);
};

export default Card;
