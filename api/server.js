import express from "express";
import bodyParser from "body-parser";

import usersRouter from "./router/users.router";
import profileRouter from "./router/profile.router";
import customRouter from "./router/custom.router";
import checkToken  from './auth/middleware';


export default () => {

	const app = express();

	app.use(bodyParser.json());

	app.use('/', checkToken);

// TO TEST
	app.use('/', customRouter());

// //TO TEST
 	app.use('/user', usersRouter());

// //TO TEST
 	app.use('/me', profileRouter());


	return app;

}