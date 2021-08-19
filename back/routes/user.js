const express = require("express");

const auth = require("../middleware/auth");

// Init express router
const router = express.Router();

const userCtrl = require("../controllers/user.js");




// Route get all users
router.get("/", auth, userCtrl.getAllUsers);
// Route get user by id
router.get("/:id", auth, userCtrl.getUserById);
// Route update user by id
router.put("/:id", auth, userCtrl.updateUser);
// Route delete user by id
router.delete("/:id", auth, userCtrl.deleteUser);








// Route create a new user
router.post("/", userCtrl.createUser); // a la place de signup

//Route connection du user existant
router.post("/login", userCtrl.login);

module.exports = router;
