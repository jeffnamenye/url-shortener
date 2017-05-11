const db = require('./db');
const utility = require('../../tool/utility');
require('localenvironment');
// creates user in DB
exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
  utility.debug('Creates the user');
};

// find all users
exports.findAll = (err, success) => {
  db.user.findAll().then(success).catch(err);
  utility.debug('Reads all users');
};

// find user by id
exports.find = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
    // find all relations in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  utility.debug('Reads the users by id');
};

// updates the user info
exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  utility.debug('Updates the user');
};

// delete the user
exports.destroy = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  utility.debug('Deletes the User');
};
