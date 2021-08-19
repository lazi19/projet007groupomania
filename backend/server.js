
// const http = require ("http");
// Import express
import express from "express";
import bodyParser from "body-parser";

// Import cors
import cors from "cors";

// Import connection
import db from "./config/database.js";

// Import router
// import Router from "./routes/userRoute.js";
import userRoutes from "./routes/userRoute.js";
import postMessageRoute from "./routes/postMessageRoute.js";
import postCommentRoute from "./routes/postCommentRoute.js";
 
// Init express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// use express json
app.use(express.json());

// use cors
app.use(cors());
 
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }
  app.use(cors(corsOptions));



// Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');

} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
// use router
app.use('/api/users', userRoutes); // Va servir les routes dédiées au users

app.use('/api/postMessage', postMessageRoute); // Va servir les routes dédiées au poste

app.use('/api/postCommentaire', postCommentRoute); // Va servir les routes dédiées au poste


// app.use(Router);
 
// listen on port
app.listen((5000), () => console.log('Server running at http://localhost:5000'));




