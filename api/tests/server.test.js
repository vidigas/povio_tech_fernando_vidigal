import request from 'supertest'
import mongoose from "mongoose";


import app from '../server';
import mongodb from "../db";

import usersModel from "../db/models/users.model";


describe('Test the root path', () => {
    beforeAll(() => {
    		mongoose.model('users', usersModel);

				mongoose.set('useFindAndModify', false);
        mongoose.connect('mongodb://localhost/test');
    });
    afterAll((done) => {
        mongoose.disconnect(done);
    });

    test('It should response the GET method', (done) => {

        request(app).get('/most-liked').then((response) => {
        	console.log(response)
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});