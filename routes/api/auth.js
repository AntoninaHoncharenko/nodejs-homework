const express = require("express");
const router = express.Router();
const { validateBody } = require("../../middlewares/index");
const { registerSchema, loginSchema } = require("../../models/user");
const controller = require("../../controllers/auth");

router.post("/register", validateBody(registerSchema), controller.register);

router.post("/login", validateBody(loginSchema), controller.login);

module.exports = router;
