import mongoose from 'mongoose';

export const like = async (body, params) => {
	const Users = mongoose.model('users');

	try {
		
		let liker = await User.find( {_id: body.userId});
		
		if(liker.liked[0][params.id]) return { status: 200, data: {message: 'user already liked' }};
		
		else {

			 await Users.findOneAndUpdate({ _id: params.id }, {$inc: { likes: 1 }} ,{ new: true });
			
			liker.liked[0][params.id] = true;

			let data = await Users.findOneAndUpdate({ _id: body.userId }, {$set: { liked: liker.liked }} ,{ new: true });
			
			return { status: 200, data}
		} catch(e) {
			return { status: 500, data: e}
		}
	}
}

export const unlike = async (body, params) => {
	const Users = mongoose.model('users');

	try {
		
		let unliker = await User.find( {_id: body.userId});
		
		if(!liker.liked[0][params.id]) return { status: 200, data: {message: 'user not liked'}}
		
		else {

			 await Users.findOneAndUpdate({ _id: params.id }, {$inc: { likes: -1 }} ,{ new: true });
			
			delete liker.liked[0][params.id] ;

			let data = await Users.findOneAndUpdate({ _id: body.userId }, {$set: { liked: liker.liked }} ,{ new: true });
			return { status : 200, data }
		} catch(e) {
			return { status: 500, data: e}
		}
	}
}