import { Schema } from "mongoose";
import * as controllers from "../../controllers";

let ObjectId = Schema.Types.ObjectId;

const likesModel = new Schema({
	from: { type: ObjectId, ref: 'users' },
	to: { type: ObjectId, ref: 'users' }
});

likesModel.statics = controllers;

export default likesModel;
