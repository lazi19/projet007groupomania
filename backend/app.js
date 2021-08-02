// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const path = require('path') ;    // Plugin qui sert dans l'upload des images et permet de travailler avec les répertoires et chemin de fichier
// require('dotenv').config({path: './config/.env'});
// // require('./config.db');

// const { sequelize } = require('./models/userModels');   // création d'une instance Sequelize pour pouvoir se connecter à la base de données

//  // On importe la route dédiée aux user
// const userRoutes = require('./routes/userRoutes');

// const app = express();

// // gestion CORS
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//   next();
// });


// app.use(bodyParser.json());

// app.use('/api/user', userRoutes); // Va servir les routes dédiées au users

// const dbTest = async function () {

//   try {
//     await sequelize.authenticate();
//     console.log('Connection to the database has been established successfully .');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// };

// dbTest();





// module.exports = app;