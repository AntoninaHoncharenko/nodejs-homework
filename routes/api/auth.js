const express = require("express");
const router = express.Router();
const { validateBody, auth, upload } = require("../../middlewares/index");
const { registerSchema, loginSchema } = require("../../models/user");
const controller = require("../../controllers/auth");

router.post("/register", validateBody(registerSchema), controller.register);

router.post("/login", validateBody(loginSchema), controller.login);

router.post("/logout", auth, controller.logout);

router.get("/current", auth, controller.getCurrent);

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  controller.updateAvatar
);

module.exports = router;
