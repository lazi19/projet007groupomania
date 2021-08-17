// import sequelize 
// import { DATE, Sequelize } from "sequelize";
import pkg from 'sequelize';
const { DATE, Sequelize } = pkg;

// const bcrypt = require('bcrypt');
import bcrypt from "bcrypt";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema User
const User = db.define('users', {
  // Define attributes

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true //supprime les espaces
  },
  lastname: {
    type: DataTypes.STRING
  },
  mail: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false

  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
},
createdAt: {
  type: DATE
},
updatedAt: {
  type: DATE
}
},
{
  // Freeze Table Name
  freezeTableName: true,
  
});
export default User;
