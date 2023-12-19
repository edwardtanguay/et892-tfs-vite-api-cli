import * as btools from './backendTools.js';

export const frontendPort = () => {
	const packageJsonObj = btools.readJsonFile('./package.json');
	const devCommand = packageJsonObj.scripts.dev;
	const port = btools.extractPortNumber(devCommand);	
	return port;
}

export const backendPort = () => {
	return 4009;
}

