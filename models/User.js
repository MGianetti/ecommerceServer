const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class User extends Model {}

User.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
    userName: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  { sequelize, modelName: 'user', timestamps: false }
);

module.exports = User;
