const $ = require('../../lib/utils').tryCatch;
const handleError = require('../../lib/utils').handleError;

const itemRepo = require('../repositories/items');

module.exports = {
    findItemGivenSku: async function (sku) {
        return itemRepo.findOne({ sku });
    },

    findItems: async function () {
        return itemRepo.find({});
    },

    addItem: async function (item) {
        const itemObject = itemRepo.newItem(item);
        let [_, err] = await $(itemRepo.save(itemObject));
        handleError(err);
        return true;
    },
};
