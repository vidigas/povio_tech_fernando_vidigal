import mongoose from 'mongoose';

//like func

// route -> /user/:id/like

//method: PUT

// auth required: Yes

// receives token with userA Id and params with userB Id 
// search for existing likes in userA
//increment by 1 and update likes count in userB
//save reference of userB in userA likeds obj.

//return sucess

export const like = async (params, body, token) => {
	const Users = mongoose.model('users');
	if(params.id === body.userId) return { status: 200, data: { message: "you can't like yourself" }};

	try {
		
		let liker = await Users.findOne( { _id: token.userId });
		
		if(liker.liked[0][params.id]) return { status: 200, data: {message: 'user already liked' }};
		
		else {

			 await Users.findOneAndUpdate({ _id: params.id }, {$inc: { likes: 1 }} ,{ new: true });
			
			liker.liked[0][params.id] = true;

			let data = await Users.findOneAndUpdate({ _id: token.userId }, {$set: { liked: liker.liked }} ,{ new: true });
			
			return { status: 200, data: { message: 'sucessfull like'}}
		} 
	} catch(e) {
			return { status: 500, data: e}
		}
}

//unlike func

// route -> /user/:id/unlike

//method: PUT

// auth required: Yes

// receives body with userA Id and params with userB Id 
// search for existing likes in userA
//increment  by -1 and update likes count in userB
//remove reference of userB in userA likeds obj.

//return sucess

export const unlike = async (params, body, token) => {
	const Users = mongoose.model('users');
	if(params.id === body.userId) return { status: 200, data: { message: "you can't like yourself" }};

	try {
		
		let unliker = await Users.findOne( {_id: token.userId});
		
		if (!unliker.liked[0][params.id]) return { status: 200, data: { message: 'user not liked'}}
		
		 else {

		 	 await Users.findOneAndUpdate({ _id: params.id }, {$inc: { likes: - 1 }} ,{ new: true });
			
			 delete unliker.liked[0][params.id] ;

			let data = await Users.findOneAndUpdate({ _id: token.userId }, {$set: { liked: unliker.liked }} ,{ new: true });
			
			return { status : 200, data: { message: 'sucessfull unlike'} }
		} 
	} catch(e) {
			return { status: 500, data: e}
		}
}