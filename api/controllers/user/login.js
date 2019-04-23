import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';
import { SECRET } from '../../../env.config';


import { findByUsername } from '../utils';

//login func

// route -> /login

//method POST

// auth required: No

// receives body with username and password 
// search for existing username 
// compare password with hash stored
//generates token
// return logged in userId and token



export const login = async (body) => {
	try {
		let userExists = await findByUsername(body.username);

		if(!userExists) return { status: 200, data: { message: 'user not found' }};

		const match = await bcrypt.compare(body.password, userExists.password);
 
    if(match){

    	let token = jwt.sign({username: body.username, userId: userExists._id}, SECRET, { expiresIn: '1h'});

    	return { status: 200, data: { message : "sucessfull login", userId: userExists._id, token }};

    } else return  { status: 200, data: { message : "wrong password" }};
	} catch(e){
		return { status: 500, data: e }
	}
}
