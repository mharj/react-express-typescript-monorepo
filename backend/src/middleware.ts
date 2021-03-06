import {Express, urlencoded, json} from 'express';
import {HttpError} from './lib/HttpError';
import {errorMiddleWare} from './middlewares/errorMiddleware';
import {routes} from './routes';

export const setupExpress = (app: Express) => {
	// express settings
	app.set('etag', false);
	app.disable('x-powered-by');
	// body parsers
	app.use(urlencoded({extended: false}));
	app.use(json());
	// apply middlewares here
	// app.use(corsMiddleware);
	// routes
	app.use('/api', routes);
	// error handling
	app.get('*', (req, res, next) => {
		next(new HttpError(404, 'route_not_found'));
	});
	app.use(errorMiddleWare);
};
