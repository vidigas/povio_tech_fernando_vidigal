import mongoose from 'mongoose';
import mongodb from "../api/db";

import data from './data.sample';

(() => {
  console.log('connecting to db...');
  mongodb().
    then(async () => {
      const Users = mongoose.model('users');

      console.log('creating users...');
      await Users.deleteMany({});

      await Promise.all(data.users.map(user => new Users(user).save()));
      console.log('creating users...done');

      process.exit();
    });
})();