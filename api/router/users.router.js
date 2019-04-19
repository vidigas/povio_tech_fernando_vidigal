import express from 'express';
import mongoose from 'mongoose';
import { handle } from './handler';

const usersRouter = () => {
	const Users = mongoose.model('users');

	var router = express.Router();

	router.get('/:id', handle(Users.getOne));

	router.put('/:id/like', handle(Users.like));

	router.put('/:id/unlike', handle(Users.unlike));

	return router;
}

export default usersRouter;