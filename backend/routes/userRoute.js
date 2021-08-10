// Import express
import express from "express";
// Import users  Controller
import { 
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
 } from  "../controllers/userControllers.js";

//  import signup from  "../controllers/authControllers";
 
 // Init express router
const router = express.Router();

 //Routes for users (enregistrement ou creation du compte)

// Route get all users
router.get('/', getAllUsers);
// Route get user by id
router.get('/:id', getUserById);
// Route create a new user
router.post('/', createUser);
// Route update user by id
router.put('/:id', updateUser);
// Route delete user by id
router.delete('/:id', deleteUser);

// Route creation de  user 
// router.post('/signup', signup);



 
// export router
export default router;