import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


import { findByUsername , hashPassword } from './helper';

//signup func

// route -> /signup

//method: POST

// auth required: No

// receives body with username and password 
// search for existing user with same username 
// encrypt password and and create user on database
//return userId


export const signup = async (body) => {

	const Users = mongoose.model('users');

	try {

		let userExists = await findByUsername(body.username);

		if (userExists) return { status: 200, data: {message : 'username already exists' }};
		
		let hashedPassword = await hashPassword(body.password);

		const newUser = new Users({
			username: body.username,
			password: hashedPassword,
		});

		let data = await newUser.save();

		return { status: 200, data: { userId: newUser._id, message:'sucessfull signup'} };
	} catch(e) {
		return { status:500, data: e };
	}
}

