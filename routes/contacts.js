const express = require('express');
const controller = require("../controllers");
const router = express.Router();

router.get("/", controller.getData);
router.get("/:id", controller.getDataById);

router.post("/", controller.createNewContact);


router.put("/update/:id", controller.updateById);
router.delete("/delete/:id", controller.deleteById);

module.exports = router;