import request from 'supertest';
import express from 'express';


import should from 'should';

import { populateTestDB } from './tests.utils'
import Server from '../server';

describe('Test API', () => {

var token = 'test'
var app

	beforeAll( async (done) => {
  	await populateTestDB()
  	app = Server();
  	done() 

   });


	//most-liked - return user in database sorted by number of likes

  test('/most-liked - return status 200 and userlist sorted by likes', async function (done) {          

    var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .get('/most-liked')
        .end(function (err, res) {

           res.status.should.equal(200);
           for( var i = 0; i < res.body.length - 2; i++){

            expect(res.body[i].likes).toBeGreaterThanOrEqual(res.body[i + 1].likes)
           }
          server.close();
          return done();

      })
      }
    })
  });



	// Signup Test

  test('/signup - return status 200 and token', async function (done) {
          

    var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .post('/signup')
        .send({username: 'NewUser', password:'newPassword'})
        .end(function (err, res) {
           res.status.should.equal(200);
           res.body.message.should.equal("sucessfull signup");
           token = res.body.token;

          server.close();

          done();
          return
      })
      }
    })
  });

//Login Test - Existing user wrong password

	test('/login - return status 200 and message wrong password', async function (done) {      

    var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .post('/login')
        .send({username: 'Michael', password:'wrongPasswordTest'})
        .end(function (err, res) {
           res.status.should.equal(200);
           res.body.message.should.equal("wrong password");
           server.close();
          done();
          return
      })
      }
    })
  });


//Login Test with created user on signup test

  test('/login - return status 200 and token for login with created user on signup test', async function (done) {
          

    var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .post('/login')
        .send({username: 'NewUser', password:'newPassword'})
        .end(function (err, res) {
           res.status.should.equal(200);
           res.body.message.should.equal("sucessfull login");

          server.close();

          done();
          return
      })
      }
    })
  });


 // /me - get user info.

  test('/me - return status 200 and user object', async function (done) {
          
  	var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .get('/me')
        .set('Authorization', token)
        .expect(res => {
        	res.body.userId.toBeTruthy();
        })
        .end(function (err, res) {
           res.status.should.equal(200);
        	
        	res.body.username.should.equal('NewUser')

          server.close();

          done();
          return
      })
      }
    })
  });

  test('/me - return status 200 and userObj', async function (done) {
          
  	var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .get('/me')
        .set('Authorization', token)
        .expect(res => console.log(res.body))
        .end(function (err, res) {
           res.status.should.equal(200);
           ///res.body.message.should.equal("user not found");

          server.close();

          done();
          return
      })
      }
    })
  });


});