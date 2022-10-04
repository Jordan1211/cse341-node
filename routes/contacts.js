const express = require('express');
const controller = require('../controllers');
const router = express.Router();

router.get('/', controller.getData);
router.get('/:_id', controller.getDataById);

router.post('/', controller.createNewContact);

router.put('/:_id', controller.updateById);

router.delete('/:_id', controller.deleteById);
router.delete('/deleteMany', controller.deleteManyByName);

module.exports = router;
