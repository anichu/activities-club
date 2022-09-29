import Cards from "../card/Cards";
import "./left.css";

const Left = ({ setActivitiesTime }) => {
	return (
		<div className="left-side-container">
			<h3 className="left-side-header">Select today’s activities</h3>
			<Cards setActivitiesTime={setActivitiesTime} />
		</div>
	);
};

export default Left;
