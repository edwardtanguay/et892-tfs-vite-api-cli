import axios from "axios";
import { useEffect, useState } from "react";

const backendUrl = "http://localhost:4009/appData";

function App() {
	const [appData, setAppData] = useState({});

	useEffect(() => {
		(async () => {
			const response = await axios.get(backendUrl);
			const _appData = response.data;
			console.log(_appData);
			setAppData(_appData);
		})();
	}, []);
	return (
		<>
			<h1>Info Site</h1>
			<ul>
				<li>frontend port: {appData.frontendPort}</li>
				<li>backend port: {appData.backendPort}</li>
			</ul>
		</>
	);
}

export default App;
