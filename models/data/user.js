const db = require('./db');
require('dotenv').config();
require('localenvironment');
// create
exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
};

// find all
exports.findAll = (err, success) => {
  db.user.findAll().then(success).catch(err);
};

// find by id
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
};

// update
exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

// delete
exports.destroy = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
