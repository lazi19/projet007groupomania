// Import express
import express from "express";
// Import users  Controller
import { 
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
    
 } from  "../controllers/userControllers.js";


 // Init express router
const router = express.Router();


const auth          = require('../middleware/auth'); 


// Route create a new comment
router.post("/", auth, createComment); 

router.get("/", auth, getAllComments);

router.get("/:id", auth, getCommentById)


router.put('/:id', auth, updateComment);


router.delete('/:id', auth, deleteComment);

// export default router;
module.exports = router;

