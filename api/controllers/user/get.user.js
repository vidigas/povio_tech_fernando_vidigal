import mongoose from 'mongoose';


//getOne func

// route -> /user/:id

//method: GET

// auth required: Yes

// receives body with userId 
// search for existing userId
// return user data



export const getOne = async (params) => {

	const Users = mongoose.model('users');

	try {

		let data = await Users.findOne({ _id: params.id }, { username: 1, likes: 1, _id: 1});
		
		if(!data) return {status : 200, data: {message: 'user not found' }};
	
		 return { status: 200, data };
	} catch(e) {
		return { status: 500, data: e};
	}
}

//getMe func

// route -> /me

//method: POST

// auth required: Yes

// receives body with userId 
// search for existing userId
// return user data


export const getMe = async (body) => {
	const Users = mongoose.model('users');

	try {
		let data = await Users.findOne({ _id: body.userId }, );

		if(!data) return {status : 200, data: {message: 'user not found' }};

		return { status: 200, data};
	} catch(e) {
		return { status: 500, data: e};
	}
}


//getAll func

// route -> /most-liked

//method: GET

// auth required: no

// search for users and sort by likes
// return all users 

export const getAll = async () => {
	const Users = mongoose.model('users');

	try {
		let data = await Users.find({}, { username: 1, _id: 1, likes: 1}).sort({'likes':-1});


		return { status: 200, data};
	} catch(e) {
		return { status: 500, data: e};
	}
}



