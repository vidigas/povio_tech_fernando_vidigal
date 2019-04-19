import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export const update = async (params, body) => {
	const Users = mongoose.model('users');

	try {

		let hashedPassword = await hashPassword(body.password);
		let data = await Users.findOneAndUpdate({ _id: body.userId }, {$set: { password: hashedPassword }} ,{ new: true });
		return { status: 200, data};
	} catch(e) {
		return { status:500, data:e};
	}

}
