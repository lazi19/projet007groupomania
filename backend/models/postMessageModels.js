
// import sequelize 
import  { Sequelize }  from "sequelize";
// import bcrypt from ("bcrypt");

// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema Post

    const PostMessage = db.define('postMessage', {
      message: {
        type: DataTypes.TEXT
      },
      messageUrl: {
        type: DataTypes.STRING
      },
      likes: {
            type: DataTypes.STRING
      }
    }, {
        freezeTableName: true,
        
    });

    export default PostMessage;
