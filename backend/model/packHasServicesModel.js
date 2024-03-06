const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const PackHasServices = sequelize.define('PackHasServices', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pack_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  service_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: true
  }
}, {
  tableName: 'pack_has_services',
  timestamps: false
});

module.exports = {PackHasServices};
