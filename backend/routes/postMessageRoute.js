// Import express 
import express from "express";
// Import messages  Controller

 // Init express router
const router = express.Router();
// const postMessageControllers   = require("../controllers/postMessageControllers");
import postMessageControllers from  "../controllers/postMessageControllers.js";
// import { 
//     createMessage, 
//     getAllMessages, 
//     getMessageById,
//     updateMessage,
//     deleteMessage
    
//  } from "../controllers/postMessageControllers.js";



const auth          = require('../middleware/auth'); 
const multer        = require("../middleware/multer-config");

// Route create a new message
router.post("/", auth,  multer, postMessageControllers.createMessage); 

router.get("/", auth, postMessageControllers.getAllMessages);

router.get("/:id", auth, postMessageControllers.getMessageById)


router.put('/:id', auth, multer, postMessageControllers.updateMessage);


router.delete('/:id', auth, postMessageControllers.deleteMessage);

// export default router;
module.exports = router;
