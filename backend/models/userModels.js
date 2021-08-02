// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const User = db.define('users', {
  // Define attributes
  firstname: {
    type: DataTypes.STRING
  },
  lastname: {
    type: DataTypes.STRING
  },
  mail: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
//   bio: {
//     type: DataTypes.STRING
//   },
//   imageUrl: {
//     type: DataTypes.BLOB
//   },
//   isAdmin: {
//     type: DataTypes.STRING
//   }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
export default User;