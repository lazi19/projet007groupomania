
// import sequelize 
import  { Sequelize }  from "sequelize";
// import bcrypt from ("bcrypt");

// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema Post

    const PostMessage = db.define('postMessage', {
      id_message: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      message: {
        type: DataTypes.TEXT
      },
      messageUrl: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: DATE
      },
      updatedAt: {
        type: DATE
      },
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true
      }
    }, {
        freezeTableName: true,
        
    });

    export default PostMessage;
