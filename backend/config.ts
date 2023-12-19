import * as btools from './backendTools.js';
import * as tools from '../src/tools.js';

export const appIdCode = () => {
	const packageJsonObj = btools.readJsonFile('./package.json');
	const idCode = packageJsonObj.name;
	return idCode;
}

export const frontendPort = () => {
	const packageJsonObj = btools.readJsonFile('./package.json');
	const devCommand = packageJsonObj.scripts.frontend;
	const port = tools.extractPortNumber(devCommand);	
	return port;
}

export const backendPort = () => { 
	return 4009;
}

