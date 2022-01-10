var router = require('express').Router();
const itemController = require('../controllers/items');

router.route('/').get(itemController.getItems);
router.route('/').post(itemController.addItem);

module.exports = router;
