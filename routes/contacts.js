const express = require('express');
const controller = require('../controllers');
const router = express.Router();

router.get('/', controller.getData);
router.get('/:id', controller.getDataById);

router.post('/', controller.createNewContact);

router.put('/', controller.updateById);

router.delete('/', controller.deleteById);
router.delete('/deleteMany', controller.deleteManyByName);

module.exports = router;
