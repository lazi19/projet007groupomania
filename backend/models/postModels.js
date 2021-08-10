
// import sequelize 
import  { Sequelize }  from "sequelize";
// import bcrypt from ("bcrypt");

// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema

    const Post = db.define('post', {
        annotation_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.DATE,
            field: 'first_name'
        },
        lastName: {
            type: DataTypes.DATE,
            field: 'last_name'
        },
       
          bio: {
            type: DataTypes.STRING
          },
          imageUrl: {
            type: DataTypes.BLOB,
            default: "./uploads/profil/random-user.png"
          },
          isAdmin: {
            type: DataTypes.BOOLEAN
          },
          
          likes: {
            type: DataTypes.STRING
          }
    }, {
        freezeTableName: true,
        // instanceMethods: {
        //     generateHash(password) {
        //         return bcrypt.hash(password, bcrypt.genSaltSync(8));
        //     },
        //     validPassword(password) {
        //         return bcrypt.compare(password, this.password);
        //     }
        // }
    });

    export default Post;
