

// // const http = require('http');
// import http from 'http'
// // const app = require('./app');
// import app from './app'

// const normalizePort = val => {
//   const port = parseInt(val, 10);

//   if (isNaN(port)) {
//     return val;
//   }
//   if (port >= 0) {
//     return port;
//   }
//   return false;
// };
// const port = normalizePort(process.env.PORT || '3001');
// app.set('port', port);

// const errorHandler = error => {
//   if (error.syscall !== 'listen') {
//     throw error;
//   }
//   const address = server.address();
//   const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
//   switch (error.code) {
//     case 'EACCES':
//       console.error(bind + ' requires elevated privileges.');
//       process.exit(1);
//       break;
//     case 'EADDRINUSE':
//       console.error(bind + ' is already in use.');
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// };



// const server = http.createServer(app);

// server.on('error', errorHandler);
// server.on('listening', () => {
//   const address = server.address();
//   const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
//   console.log('Listening on ' + bind);
// });

// server.listen(port);



// Import express
import express from "express";

// Import cors
import cors from "cors";

// Import connection
import db from "./config/database.js";

// Import router
import Router from "./routes/userRoute.js";
 
// Init express
const app = express();
// use express json
app.use(express.json());

// const corsOptions = {
//     origin: process.env.CLIENT_URL,
//     credentials: true,
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId'],
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false
//   }
//   app.use(cors(corsOptions));


// use cors
app.use(cors());
 
// Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');

} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
// use router
app.use(Router);
 
// listen on port
app.listen((5000), () => console.log('Server running at http://localhost:5000'));