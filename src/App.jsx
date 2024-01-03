import "./App.css";
import { Skills } from "./Skills";
import { devOverview } from "./mock.js";
import { Resume } from "./Resume.jsx";

function App() {
	console.log(devOverview, "OVER")
	const {name, description, imagePath} = devOverview
	return (
		<div className='card'>
			<Resume name={name} desc={description} imagePath={imagePath} />
			<Skills listOfTechnologies={devOverview.technologies} />
		</div>
	);
}

export default App;
