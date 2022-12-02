const express = require("express");
const postController = require("../controllers/post");

const router = express.Router();

router.get("/", postController.getAll);
router.get("/:id", postController.getById);
router.post("/", postController.create);

module.exports = router;
