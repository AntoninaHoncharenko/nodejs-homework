const express = require("express");
const router = express.Router();
const { validateBody, isValidId, auth } = require("../../middlewares/index");
const { schema, updateFavoriteSchema } = require("../../models/contacts");

const controller = require("../../controllers/contacts");

router.get("/", auth, controller.getListContacts);

router.get("/:id", isValidId, controller.getContactById);

router.post("/", auth, validateBody(schema), controller.addContact);

router.delete("/:id", auth, isValidId, controller.removeContact);

router.put("/:id", isValidId, validateBody(schema), controller.updateContact);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  controller.updateStatusContact
);

module.exports = router;
