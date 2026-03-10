const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const { getProfile, deleteAccount } = require("../controllers/user.controller");

router.get("/profile", authMiddleware, getProfile);
router.delete("/delete-account", authMiddleware, deleteAccount);

module.exports = router;
