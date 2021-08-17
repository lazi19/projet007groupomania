const express = require("express");

const auth = require("../middleware/auth");

const router = express.Router();

const userCtrl = require("../controllers/user.js");

// Route create a new user
router.post("/", userCtrl.createUser); // a la place de signup

// router.post('/signup', signup);
router.post("/login", userCtrl.login);

module.exports = router;
