const itemRepo = require('../repositories/items');

module.exports = {
    findItemGivenSku: async function (sku) {
        return itemRepo.findOne({ sku });
    },

    findItems: async function () {
        return itemRepo.find({});
    },
};
