import express from 'express';
import mongoose from 'mongoose';
import { handle } from './handler';

const customRouter = () => {
	const Users = mongoose.model('users');

	var router = express.Router();

	router.post('/login', handle(Users.login));

	router.post('/signup', handle(Users.signup));

	router.get('/most-liked', handle(Users.getAll));

	return router;
}

export default customRouter;