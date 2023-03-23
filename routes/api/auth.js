const express = require("express");
const router = express.Router();
const { validateBody, auth } = require("../../middlewares/index");
const { registerSchema, loginSchema } = require("../../models/user");
const controller = require("../../controllers/auth");

router.post("/register", validateBody(registerSchema), controller.register);

router.post("/login", validateBody(loginSchema), controller.login);

router.post("/logout", auth, controller.logout);

router.get("/current", auth, controller.getCurrent);

module.exports = router;
