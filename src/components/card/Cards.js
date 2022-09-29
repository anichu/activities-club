import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./cards.css";

const Cards = ({ setActivitiesTime }) => {
	const [cards, setCards] = useState([]);
	useEffect(() => {
		fetch("data.json")
			.then((response) => response.json())
			.then((data) => setCards(data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className="cards">
			{cards.map((card) => (
				<Card key={card.id} card={card} setActivitiesTime={setActivitiesTime} />
			))}
		</div>
	);
};

export default Cards;
