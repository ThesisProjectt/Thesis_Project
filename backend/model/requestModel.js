const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const Request = sequelize.define('Request', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  start: {
    type: DataTypes.DATE,
    allowNull: true
  },
  end: {
    type: DataTypes.DATE,
    allowNull: true
  },
  pack_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'request',
  timestamps: false
});

module.exports = {Request};
