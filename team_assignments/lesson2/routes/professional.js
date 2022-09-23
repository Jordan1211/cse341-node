const express = require('express');
const controller = require("../controller/controller");
const router = express.Router();

router.get("/", controller.getData);

// console.log(router.get("/", controller.getData));

module.exports = router;
