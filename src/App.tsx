import axios from "axios";
import { useEffect, useState } from "react";
import { IAppData } from "./interfaces";
import * as tools from "./tools";
import * as config from "../backend/config";

const backendUrl = `http://localhost:${config.backendPort()}/appData`;
const test = "abc 8273 ksdkfj sdkfj";

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
			<h2>App Data</h2>
			<table>
				<tbody>
					<tr>
						<td>app idCode:</td>
						<td className="data">{appData.appIdCode}</td>
					</tr>
					<tr>
						<td>frontend port</td>
						<td className="data">{appData.frontendPort}</td>
					</tr>
					<tr>
						<td>backend port</td>
						<td className="data">{appData.backendPort}</td>
					</tr>
				</tbody>
			</table>
			<h2>Shared Tools</h2>
			<ul>
				<li>
					string with number: <code>{test}</code>
				</li>
				<li>
					number extracted:{" "}
					<code>{tools.extractPortNumber(test)}</code>
				</li>
			</ul>
		</>
	);
}

export default App;
