// Import express
import express from "express";
// Import messages  Controller
import { 
    createMessage,
    getAllMessages,
    getMessageById,
    updateMessage,
    deleteMessage
    
 } from  "../controllers/postMessageControllers.js";
 
 // Init express router
 const router = express.Router();

const auth          = require('../middleware/auth');  
// const postMessageControllers   = require("../controllers/postMessageControllers");
const multer        = require("../middleware/multer-config");

// Route create a new message
router.post("/", auth,  multer, createMessage); 
// router.post("/",            auth,multer,    createMessage);  // Post - Création des messages avec les images.
router.get("/", getAllMessages);
// router.get("/",                             messageCtrl.findAllMessages);

router.get("/:id", getMessageById)
// router.get("/all/:id",                      messageCtrl.findAllMessagesForOne);


router.put('/:id', updateMessage);
// router.get("/:id",                          messageCtrl.findOneMessage);


router.delete('/:id', auth, deleteMessage);
// router.delete("/",           auth,          messageCtrl.deleteMessage);

export default router;
// module.exports = router;
