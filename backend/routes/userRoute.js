// Import express
import express from "express";
// Import users  Controller
import { 
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    login
 } from  "../controllers/userControllers.js";

//  import signup from  "../controllers/authControllers";
//  import login from  "../controllers/authControllers";
 
 // Init express router
const router = express.Router();

 //Routes for users (enregistrement ou creation du compte)

// Route get all users
router.get('/', auth, getAllUsers);
// Route get user by id
router.get('/:id', auth,getUserById);
// Route update user by id
router.put('/:id', auth, updateUser);
// Route delete user by id
router.delete('/:id', auth, deleteUser);

 
// Route create a new user
router.post('/', createUser);   // a la place de signup 
// router.post('/signup', signup);
router.post('/login', login);



 
// export router
export default router;