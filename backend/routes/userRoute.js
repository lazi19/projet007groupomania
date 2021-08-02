// Import express
import express from "express";
// Import Product Controller
import { 
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
 } from "../controllers/userControllers.js";
 
 // Init express router
const router = express.Router();
 
// Route get all products
router.get('/users', getAllUsers);
// Route get product by id
router.get('/users/:id', getUserById);
// Route create a new product
router.post('/users', createUser);
// Route update product by id
router.put('/users/:id', updateUser);
// Route delete product by id
router.delete('/users/:id', deleteUser);
 
// export router
export default router;