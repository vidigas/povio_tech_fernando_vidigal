import express from "express";
import bodyParser from "body-parser";

import authRouter from "./router/auth.router";
import noAuthRouter from "./router/noAuth.router";
import checkToken  from './auth/middleware';


export default () => {

	const app = express();

	app.use(bodyParser.json());

	app.use('/', checkToken);

	app.use('/', noAuthRouter());

 	app.use('/', authRouter());

 	


	return app;

}