const Sequelize = require('sequelize');
require('localenvironment');
require('dotenv').config();
//This defines my db connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

//This defines the user
const user = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  tokenreq: {
    type: Sequelize.BOOLEAN,
  },
});

//This defines the url
const url = sequelize.define('url', {
  url: {
    type: Sequelize.STRING,
  },
  shortURL: {
    type: Sequelize.STRING,
  },
});

//This joins between the user and url
user.hasMany(url, {
  foreignKey: 'userID',
});

sequelize.sync();

exports.sequelize = sequelize;
exports.user = user;
exports.url = url;
