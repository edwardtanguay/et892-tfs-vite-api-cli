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
			<table>
				<tr><td>app idCode:</td> <td className="data">{appData.appIdCode}</td></tr>
				<tr><td>frontend port</td> <td className="data">{appData.frontendPort}</td></tr>
				<tr><td>backend port</td> <td className="data">{appData.backendPort}</td></tr>
			</table>
		</>
	);
}

export default App;
