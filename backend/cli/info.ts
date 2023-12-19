import * as bt from '../backendTools.js';

const tsconfigObj = bt.readJsonFile('./backend/tsconfig.json');

console.log(`Current Typescript target is: ${tsconfigObj.compilerOptions.target}`);