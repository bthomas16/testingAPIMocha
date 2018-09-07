'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const assert = require('chai').assert;

chai.use(require('chai-http'));

const app = require('../app.js');

describe('API User /', function() {
    this.timeout(5000);

    before(function() {

    });

    after(function() {

    });

    it("Should return user's name", function() {
        return chai.request(app)
            .get('/user')
            .then(function(res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                assert.equal(res.body.user.name, 'BillyBop','The name are equal');
            });
    });

    it('should return Not Found', function() {
        return chai.request(app)
          .get('/INVALID_PATH')
          .then(function(res) {
            expect(res).to.have.status(404);
          })
          .catch(function(err) {
            expect(err).to.have.status(404);
          });
      });

      it('should add new color', function() {
        return chai.request(app)
          .post('/user')
          .send({
            name: 'newstUser',
            gender: 'Dont Matter'
          })
          .then(function(res) {
            expect(res).to.have.status(201);
            expect(res).to.be.json;
            expect(res.body).to.be.an('object');
            assert(res.body.isSuccess, true);
            assert(res.body.message, 'user created');
          });
      });
    
      // POST - Bad Request
    //   it('should return Bad Request', function() {
    //     return chai.request(app)
    //       .post('/user')
    //       .type('form')
    //       .send({
    //         name: 'newstUser',
    //         gender: 'Dont Matter'
    //       })
    //       .then(function(res) {
    //         expect(err).to.have.status(400);
    //       })
    //       .catch(function(err) {
    //         expect(err).to.have.status(400);
    //       });
    //   });

});
