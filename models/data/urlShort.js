const db = require('./db');
const reddragon = require('reddragon');
require('dotenv').config();
// This creates the urls in the db
exports.create = (payload, err, success) => {
  db.urlShort.create(payload).then(success).catch(err);
  reddragon.debug('Creates the url');
};

//This finds all the urls in my db
exports.findAll = (err, success) => {
  db.urlShort.findAll().then(success).catch(err);
  reddragon.debug('Reads the url');
};

//This finds the urls by id
exports.find = (payload, err, success) => {
  db.urlShort.find({
    where: {
      id: payload.id,
    },
    //This find all of the relations in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
    reddragon.debug('Reads the url by id');
};

// redirect
exports.go = (payload, err, success) => {
  // finds where shortURL is same as payload
  db.urlShort.find({
    where: {
      shortURL: payload.shortURL,
    },
  }).then(success).catch(err);
  reddragon.debug('Redirects the url ');
};

//This updates my db
exports.update = (payload, err, success) => {
  db.urlShort.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
  reddragon.debug('Updates the url');
};

//This deletes the urls in the db
exports.destroy = (payload, err, success) => {
  db.urlShort.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
  reddragon.debug('Deletes the url');
};
