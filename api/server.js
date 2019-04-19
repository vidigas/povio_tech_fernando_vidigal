import express from "express";
import bodyParser from "body-parser";

import usersRouter from "../api/router/users.router";
import profileRouter from "../api/router/profile.router";
import customRouter from "../api/router/custom.router";

export default () => {
	const app = express();

	app.use(bodyParser.json());

// TO DO
 	app.use('/', customRouter());

// //TO CHECK
 	app.use('/user', usersRouter());

// //TO CHECK
 	app.use('/me', profileRouter());


	return app;

}