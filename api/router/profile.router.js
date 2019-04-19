import express from 'express';
import mongoose from 'mongoose';
import { handle } from './handler';

const profileRouter = () => {
	const Users = mongoose.model('users');

	var router = express.Router();

	router.get('/', handle(Users.getMe));

 	router.put('/update-password', handle(Users.update));

 return router;
}

export default profileRouter ;