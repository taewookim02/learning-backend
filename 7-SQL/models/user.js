const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  // username: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // password: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // isAdmin: {
  //   type: Sequelize.BOOLEAN,
  //   allowNull: false,
  // },
});

module.exports = User;
