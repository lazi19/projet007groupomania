// Import express
import express from "express";
// Import users  Controller
import { createMessage } from "../controllers/postMessageControllers.js";

// Init express router
const router = express.Router();

const auth = require("../middleware/auth");

// Route create a new comment

router.get("/", auth, createMessage);

// export router
export default router;
