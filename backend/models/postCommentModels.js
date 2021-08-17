
// import sequelize 
import  { Sequelize }  from "sequelize";
// import bcrypt from ("bcrypt");

// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema Post

    const PostComment = db.define('posComment', {
        id_comment: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        comment: {
            type: DataTypes.TEXT
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
          },
          messageId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true  
          }
    }, {
        freezeTableName: true,
        
    });

    export default PostComment;
