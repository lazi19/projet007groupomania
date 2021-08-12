// import sequelize 
import { Sequelize } from "sequelize";

// const bcrypt = require('bcrypt');
import bcrypt from "bcrypt";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema User
const User = db.define('users', {
  // Define attributes

//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
// },
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
}
},
{
  // Freeze Table Name
  freezeTableName: true,
  
});
export default User;
