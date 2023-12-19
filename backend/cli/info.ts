import * as btools from '../backendTools.js';

const tsconfigObj = btools.readJsonFile('./backend/tsconfig.json');

console.log(`Current Typescript target is: ${tsconfigObj.compilerOptions.target}`);