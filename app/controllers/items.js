const utils = require('../../lib/utils');
const itemService = require('../service/items');

module.exports = {
    getItems: async function (req, res) {
        try {
            const data = await itemService.findItems();
            res.status(200).json(utils.createRes(true, null, data));
        } catch (error) {
            console.log(error);
            res.status(500).json(utils.createRes(false, error.message, null));
        }
    },
};
