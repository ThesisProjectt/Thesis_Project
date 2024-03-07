const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'employee',
  timestamps: false
});
const getEmployee=()=>{
  return Employee.findAll({})
}
const createEmployee=(obj)=>{
  return Employee.create(obj)
}

module.exports = {Employee,getEmployee,createEmployee};
