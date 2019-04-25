import mongodb from "../db";
import mongoose from "mongoose";


import data from '../../scripts/data.sample';

import usersModel from "../db/models/users.model";



export const populateTestDB = async () => {
  const db = mongodb();

  return db.then( async () => {
    const Users = mongoose.model('users');
    await Users.deleteMany({});

    await Promise.all(data.users.map(user => new Users(user).save()));
  })
  .catch(e =>{
    console.log('MONGODB: ', 'Failed to connect.');
    console.log(e);
  });
}