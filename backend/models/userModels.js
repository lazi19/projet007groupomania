// import sequelize 
import { Sequelize } from "sequelize";

// const bcrypt = require('bcrypt');
import bcrypt from "bcrypt";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const User = db.define('users', {
  // Define attributes

//   annotation_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
// },
  firstname: {
    type: DataTypes.STRING,

    trim: true //supprime les espaces
  },
  lastname: {
    type: DataTypes.STRING
  },
  mail: {
    type: DataTypes.STRING,
    unique: true

  },
  password: {
    type: DataTypes.STRING
  },
  // bio: {
  //   type: DataTypes.STRING
  // },
  // imageUrl: {
  //   type: DataTypes.BLOB,
  //   default: "./uploads/profil/random-user.png"
  // },
  // isAdmin: {
  //   type: DataTypes.BOOLEAN
  // },
  
  // likes: {
  //   type: DataTypes.STRING
  // }

},{
  // Freeze Table Name
  freezeTableName: true,
  instanceMethods: {
    generateHash(password) {
        return bcrypt.hash(password, bcrypt.genSaltSync(8));
    },
    validPassword(password) {
        return bcrypt.compare(password, this.password);
    }
}
});
 

//play function before save into display: 'block',
// User.pre("save", async function(next) {
//   const salt = await bcrypt.genSalt();
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// Export model Product
export default User;