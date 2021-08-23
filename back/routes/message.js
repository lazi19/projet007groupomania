// Import express
const express = require ("express")

// Init express router
const router = express.Router();

// Import messages  Controller
const messageCtrl   = require("../controllers/message");

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// Route create a new message
router.post("/", multer, messageCtrl.createMessage);

router.get("/", messageCtrl.getAllMessages);

router.get("/:id", auth, messageCtrl.getMessageById);

router.put("/:id", auth, multer, messageCtrl.updateMessage);

router.delete("/:id", auth, messageCtrl.deleteMessage);

// export router
// export default router;
module.exports = router;
