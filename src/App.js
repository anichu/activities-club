import { useState } from "react";
import Blog from "./components/blog/Blog";
import Header from "./components/header/Header";
import Left from "./components/main/Left";
import Right from "./components/main/Right";
import "./App.css";

function App() {
	const [activitiesTime, setActivitiesTime] = useState(0);
	return (
		<div className="container">
			<Header />
			<div className="main">
				<div className="card-section">
					<Left setActivitiesTime={setActivitiesTime} />
					<Right activitiesTime={activitiesTime} />
				</div>
				<div className="blog-section">
					<Blog />
				</div>
			</div>
		</div>
	);
}

export default App;
