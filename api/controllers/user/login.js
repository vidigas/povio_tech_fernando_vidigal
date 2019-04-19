import bcrypt from 'bcrypt';

import { findByUsername } from './helper';

export const login = async (body) => {

	try {
		let userExists = await findByUsername(body.username);

		if(!userExists) return { status: 200, data: { message: 'user not found' }};

		const match = await bcrypt.compare(body.password, userExists.password);
 
    if(match) return { status: 200, data: { message : "sucessfull login" }};
    return  { status: 200, data: { message : "wrong password" }};
	} catch(e){
		return { status: 500, data: e }
	}
}