import express from 'express';
import mongoose from 'mongoose';
import { handle } from './handler';


//routes of the application that require authentication


const authRouter = () => {

	const Users = mongoose.model('users');

	var router = express.Router();

	

	router.put('/user/:id/like', handle(Users.like));

	router.put('/user/:id/unlike', handle(Users.unlike));



	router.get('/me/', handle(Users.getMe));

 	router.put('/me/update-password', handle(Users.update));

	return router;
}

export default authRouter;