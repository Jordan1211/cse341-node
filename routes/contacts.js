const express = require('express');
const controller = require('../controllers');
const router = express.Router();

router.get('/', controller.getData);
router.get('/:id', controller.getSingle);

router.post('/', controller.createNewContact);

router.put('/:id', controller.updateById);

router.delete('/:id', controller.deleteById);
router.delete('/deleteMany', controller.deleteManyByName);

module.exports = router;
