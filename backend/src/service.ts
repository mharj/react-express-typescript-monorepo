import * as express from 'express';
import {helloShared} from 'mharj-monorepo-shared';
import {Server} from 'http';
import {getHttpPort} from './env';
import {setupExpress} from './middleware';
import {logger} from './logger';

const app = express();

let server: undefined | Server;
export const startExpress = (port: string | number): Promise<express.Express> => {
	setupExpress(app);
	console.log(helloShared());
	return new Promise((resolve, reject) => {
		if (!app) {
			reject(new Error('no express instance found'));
		} else {
			server = app.listen(port, () => {
				resolve(app);
			});
		}
	});
};

export const stopExpress = (): Promise<void> => {
	return new Promise((resolve) => {
		if (server) {
			server.close(() => resolve());
		} else {
			resolve();
		}
	});
};

export const startAll = async (): Promise<void> => {
	const httpPort = await getHttpPort();
	await startExpress(httpPort);
	logger.info(`backend listening on port ${httpPort} [${process.env.NODE_ENV}]`);
	// start mongo etc here if mongo is not required to be up before express
};

// tslint:disable: no-floating-promises
if (process.env.NODE_ENV !== 'test') {
	startAll();
}
