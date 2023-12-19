import express from 'express';
import * as config from '../config.js';

const app = express();

app.get('/', (_req, res) => {
	res.status(200).json({ 'message': 'api works' });
});

app.get('/appdata', (_req, res) => {
	res.status(200).json({
		frontendPort: config.frontendPort(),
		backendPort: config.backendPort()
	});
});

app.listen(config.backendPort(), () => {
	console.log(`listening at http://localhost:${config.backendPort()}`);
});