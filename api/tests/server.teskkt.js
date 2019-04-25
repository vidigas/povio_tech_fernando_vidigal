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

  test('/most-liked - return status 200 and userlist sorted by likes', async function (done) {          

    var server = app.listen(8787, err => {
      if(err) {  console.log(err)} 
      else {
      request(app)
        .get('/most-liked')
        .expect(res => console.log(res.body))
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

//   test('/login - return status 200 and message wrong password', async function (done) {
          

//     var server = app.listen(8787, err => {
//       if(err) {  console.log(err)} 
//       else {
//       request(app)
//         .post('/login')
//         .send({username: 'Michael', password:'passwordTest'})
//         .expect(res => console.log(res.body))
//         .end(function (err, res) {
//            res.status.should.equal(200);
//            res.body.message.should.equal("wrong password");
//                      server.close();

//           done();
//           return
//       })
//       }
//     })
//   });

//   test('/signup - return status 200 and token', async function (done) {
          

//     var server = app.listen(8787, err => {
//       if(err) {  console.log(err)} 
//       else {
//       request(app)
//         .post('/signup')
//         .send({username: 'NewUser', password:'newPassword'})
//         .expect(res => console.log(res.body))
//         .end(function (err, res) {
//            res.status.should.equal(200);
//            res.body.message.should.equal("sucessfull signup");
//            console.log(token)

//           server.close();

//           done();
//           return
//       })
//       }
//     })
//   });

//     test('/login - return status 200 and token for login with created user on signup test', async function (done) {
          

//     var server = app.listen(8787, err => {
//       if(err) {  console.log(err)} 
//       else {
//       request(app)
//         .post('/login')
//         .send({username: 'NewUser', password:'newPassword'})
//         .expect(res => console.log(res.body))
//         .end(function (err, res) {
//            res.status.should.equal(200);
//            res.body.message.should.equal("sucessfull login");
//            console.log(token)

//           server.close();

//           done();
//           return
//       })
//       }
//     })
//   });


// });


