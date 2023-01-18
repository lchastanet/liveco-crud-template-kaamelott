const express = require("express");

const router = express.Router();

const knightController = require("./controllers/knightController");

router.get("/knights", knightController.browse);
router.get("/knights/:id", knightController.read);
router.post("/knights", knightController.create);
router.delete("/knights/:id", knightController.destroy);
router.put("/knights/:id", knightController.edit);

module.exports = router;
