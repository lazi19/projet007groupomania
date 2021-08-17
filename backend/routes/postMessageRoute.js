// Import express
import express from "express";
// Import messages  Controller

// Init express router
const router = express.Router();
// const postMessageControllers   = require("../controllers/postMessageControllers");
// import {postMessageControllers} from  "../controllers/postMessageControllers.js";
import {
  createMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
} from "../controllers/postMessageControllers.js";

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// Route create a new message
router.post("/", auth, multer, createMessage);

router.get("/", auth, getAllMessages);

router.get("/:id", auth, getMessageById);

router.put("/:id", auth, multer, updateMessage);

router.delete("/:id", auth, deleteMessage);

// export router
export default router;
