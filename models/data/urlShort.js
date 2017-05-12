const db = require('./db');
const utility = require('../../tool/utility');
require('dotenv').config();
// This creates the urls in the db
exports.create = (payload, err, success) => {
  db.url.create(payload).then(success).catch(err);
  utility.debug('Creates the url');
};

//This finds all the urls in my db
exports.findAll = (err, success) => {
  db.url.findAll().then(success).catch(err);
  utility.debug('Reads the url');
};

//This finds the urls by id
exports.find = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
    //This find all of the relations in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
    utility.debug('Reads the url by id');
};

// redirect
exports.go = (payload, err, success) => {
  // finds where shortURL is same as payload
  db.url.find({
    where: {
      shortURL: payload.shortURL,
    },
  }).then(success).catch(err);
  utility.debug('Redirects the url ');
};

//This updates my db
exports.update = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  utility.debug('Updates the url');
};

//This deletes the urls in the db
exports.destroy = (payload, err, success) => {
  db.url.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  utility.debug('Deletes the url');
};
