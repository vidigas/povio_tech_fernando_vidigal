import request from 'supertest';
import express from 'express';


import should from 'should';

import { populateTestDB } from './tests.utils'
import Server from '../server';

describe('Test API', () => {

var token = 'test'
var app
var userId

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
        .expect( res => {
        	//save userId for test likes later

        	userId = res.body[0]._id
        })
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

   // /me - get logged in user info by token.

  test('/me - require token auth', async function (done) {
          
  	var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .get('/me')
        .expect(res => {
        	res.body.success.toBe(false);

        })
        .end(function (err, res) {
           res.status.should.equal(200);
        	
        	res.body.message.should.equal('Auth token is not supplied')

          server.close();

          done();
          return
      })
      }
    })
  });


 // /me - get logged in user info by token.

  test('/me - return status 200 and user object with username and userId', async function (done) {
          
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

// user/:id -  get user info by id
  test('/user/:id - return status 200 and userObj with likes equals to 6', async function (done) {
          
  	var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .get(`/user/${userId}`)
        .end(function (err, res) {
           res.status.should.equal(200);
           res.body.likes.should.equal(6);

          server.close();

          done();
          return
      })
      }
    })
  });

  // user/:id -  get user info by id
  test('/user/:id/like - return status 200 and success message', async function (done) {
          
  	var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .put(`/user/${userId}/like`)
        .set('Authorization', token)
        .end(function (err, res) {
           res.status.should.equal(200);
           res.body.message.should.equal("successful like");

          server.close();

          done();
          return
      })
      }
    })
  });

    test('/user/:id/like - require token auth', async function (done) {
          
  	var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .put(`/user/${userId}/like`)
        .expect(res => {
        	res.body.success.toBe(false);

        })
        .end(function (err, res) {
           res.status.should.equal(200);
        	
        	res.body.message.should.equal('Auth token is not supplied')

          server.close();

          done();
          return
      })
      }
    })
  });

    // user/:id -  get user info by id
  test('/user/:id - return status 200 and userObj with likes now equals to 7', async function (done) {
          
  	var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .get(`/user/${userId}`)
        .end(function (err, res) {
           res.status.should.equal(200);
           res.body.likes.should.equal(7);

          server.close();

          done();
          return
      })
      }
    })
  });

    // user/:id/like -  repeat like on same user
  test('/user/:id/like - return status 200 and user already liked message message', async function (done) {
          
  	var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .put(`/user/${userId}/like`)
        .set('Authorization', token)
        .end(function (err, res) {
           res.status.should.equal(200);
           res.body.message.should.equal("user already liked");

          server.close();

          done();
          return
      })
      }
    })
  });


        // user/:id/like -  repeat like on same user
  test('/user/:id/unlike - return status 200 and user successful unlike message', async function (done) {
          
  	var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .put(`/user/${userId}/unlike`)
        .set('Authorization', token)
        .end(function (err, res) {
           res.status.should.equal(200);
           res.body.message.should.equal("successful unlike");

          server.close();

          done();
          return
      })
      }
    })
  });

      // user/:id -  get user info by id
  test('/user/:id - return status 200 and userObj with likes equals to 6 again', async function (done) {
          
  	var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .get(`/user/${userId}`)
        .end(function (err, res) {
           res.status.should.equal(200);
           res.body.likes.should.equal(6);

          server.close();

          done();
          return
      })
      }
    })
  });


        // user/:id/like -  repeat like on same user
  test('/me/update-password - return status 200 and user successful unlike message', async function (done) {
          
  	var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .put(`/me/update-password`)
        .set('Authorization', token)
        .send({password: 'changePassword'})
        .end(function (err, res) {
           res.status.should.equal(200);
           res.body.message.should.equal('update password succesful')

          server.close();

          done();
          return
      })
      }
    })
  });



});