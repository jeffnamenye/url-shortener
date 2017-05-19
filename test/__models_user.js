const expect = require('chai').expect;
const User = require('../models/data/user');
const utility = require('../tool/utility')
describe('user model', () => {

    let testUser = {
    name: 'jeff',
    username: 'logen1467',
    password: 'password',
    email: 'logen1467@hotmail.com',
    address: '631 lovechio',
    tokenreq: true,
  };


  it('Create users', (done) => {
    User.create(testUser, (fail) => {
      utility.debug('failed to create mock user', fail);
    }, (user) => {
      testId = user.id;
      expect(user.name).to.be.equal(testUser.name);
      expect(user.username).to.be.equal(testUser.username);
      epeect(user.password).to.be.equal(testUser.password);
      epeect(user.email).to.be.equal(testUser.email);
      epeect(user.address).to.be.equal(testUser.adress);
      done();
    }
    );
  });
  it('Read all my users', (done) => {
    User.findAll((fail) => {
      utility.debug('failed to read my user', fail);
    // sucess callback
    }, (users) => {
      this.testUsers = users;
      expect(this.testUsers.length).to.be.above(0);
      done();
    }
  );
  });
  it('Update user', (done) => {
    testUser = {
      id: testId,
      name: 'Tom',
      username: 'abc.com',
      password: 'password',
      email: 'logen1467@hotmail.com',
      address: '631 lovechio'

    };
    // update user method
    User.update(testUser, (fail) => {
      utility.debug('failed to delete fake user', fail);
    // sucess callback
    }, (user) => {
      expect(user.dataValues.name).to.be.equal(testUser.name);
      done();
    }
    );
  });
  it('Delete user', (done) => {
    User.destroy(testUser, (fail) => {
      utility.debug('failed to delete fake user', fail);
    // sucess callback
    }, (res) => {
      expect(res).to.be.equal(1);
      done();
    }
    );
  });
});
