// my url generator module
const bcrypt = require('bcrypt-nodejs');
const utility = require('../tool/utility');
require('dotenv').config();

//This sets up my generate module
exports.shortURL = () => {
  // string of letters
  const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let URLId = '';

  //This my for loop which is generating a string
  for (let i = 0; i < 5; i++) {
    URLId += string.charAt(Math.floor(Math.random() * string.length));
  }
  reddragon.debug('Creates short url');
  return URLId;
};

// generates a hash of the users password with salt which helps encrypt it.
exports.generateHash = (payload) => {
  const hash = bcrypt.hashSync(payload, bcrypt.genSaltSync(8));
  reddragon.debug('Creates a hashed password');
  //This returns hashed password
  return hash;
};

//compares hashed password
exports.validateHash = (payload) => {
  //This compares my password and returns in BOOLEAN
  const hash = bcrypt.compareSync(payload.password, this.localpassword);
reddragon.debug('Compares the hashed password');
  return hash;


};
