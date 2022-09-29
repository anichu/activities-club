import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Left from "./components/main/Left";
import Right from "./components/main/Right";

function App() {
	const [activitiesTime, setActivitiesTime] = useState(0);
	return (
		<div className="container">
			<Header />
			<div className="main">
				<Left setActivitiesTime={setActivitiesTime} />
				<Right activitiesTime={activitiesTime} />
			</div>
		</div>
	);
}

export default App;
