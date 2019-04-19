import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


import { findByUsername , hashPassword } from './helper';

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

		return { status: 200, data };
	} catch(e) {
		return { status:500, data: e };
	}
}

