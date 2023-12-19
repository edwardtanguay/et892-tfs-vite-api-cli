import axios from "axios";
import { useEffect, useState } from "react";
import { IAppData } from "./interfaces";

const backendUrl = "http://localhost:4009/appData";

function App() {
	const [appData, setAppData] = useState<IAppData>({} as IAppData);

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
				<li>app idCode: {appData.appIdCode}</li>
				<li>frontend port: {appData.frontendPort}</li>
				<li>backend port: {appData.backendPort}</li>
			</ul>
		</>
	);
}

export default App;
