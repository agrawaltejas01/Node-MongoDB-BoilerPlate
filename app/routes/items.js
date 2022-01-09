var router = require('express').Router();
const itemController = require('../controllers/items');

router.route('/').get(itemController.getItems);

module.exports = router;
