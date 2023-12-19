import * as btools from './backendTools.js';

export const appIdCode = () => {
	const packageJsonObj = btools.readJsonFile('./package.json');
	const idCode = packageJsonObj.name;
	return idCode;
}

export const frontendPort = () => {
	const packageJsonObj = btools.readJsonFile('./package.json');
	const devCommand = packageJsonObj.scripts.frontend;
	const port = btools.extractPortNumber(devCommand);	
	return port;
}

export const backendPort = () => { 
	return 4009;
}

