const express = require('express');
const controller = require("../controllers");
const router = express.Router();

router.get("/", controller.getData);
router.get("/:id", controller.getDataById);

module.exports = router;