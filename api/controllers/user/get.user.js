import mongoose from 'mongoose';

export const getOne = async (params) => {
	const Users = mongoose.model('users');

	try {
		let data = await Users.findOne({ _id: params.id }, {likes:1, username: 1});

		if(!data) return {status : 200, data: {message: 'user not found' }};

		return { status: 200, data};
	} catch(e) {
		return { status: 500, data: e};
	}
}

export const getMe = async (body) => {
	const Users = mongoose.model('users');

	try {
		let data = await Users.findOne({ _id: body.userId });

		if(!data) return {status : 200, data: {message: 'user not found' }};

		return { status: 200, data};
	} catch(e) {
		return { status: 500, data: e};
	}
}

export const getAll = async () => {
	const Users = mongoose.model('users');

	try {
		let data = await Users.find().sort({'likes':-1});

		return { status: 200, data};
	} catch(e) {
		return { status: 500, data: e};
	}
}



