
// import sequelize 
import  { Sequelize }  from "sequelize";
// import bcrypt from ("bcrypt");

// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema Post

    const PostComment = db.define('posComment', {
        comment: {
            type: DataTypes.TEXT
        }
    }, {
        freezeTableName: true,
        
    });

    export default PostComment;
