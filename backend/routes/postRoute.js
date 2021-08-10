// Import express
import express from "express";
// Import Product Controller
import  {
    createPost,
    // getAllPosts
 } 
 from "../controllers/postControllers.js";
 
 // Init express router
const router = express.Router();

 //Routes for users (enregistrement ou creation du compte)

// Route get all users
// router.get('/', getAllUsers);
// Route get user by id
// router.get('/:id', getUserById);
// Route create a new user
router.post('/', createPost);
// Route update user by id
// router.put('/:id', updateUser);
// Route delete user by id
// router.delete('/:id', deleteUser);


 
// export router
export default router;
 