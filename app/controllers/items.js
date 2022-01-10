const $ = require('../../lib/utils').tryCatch;
const itemService = require('../service/items');
const itemValidator = require('../validators/items');
const response = require('../../lib/utils').response;

module.exports = {
    getItems: async function (req, res) {
        const [data, internalServerError] = await $(itemService.findItems());
        if (internalServerError) {
            console.log(internalServerError);
            return response.internalServerError(
                res,
                internalServerError.message
            );
        }
        return response.success(res, data);
    },

    addItem: async function (req, res) {
        let { value, error } = itemValidator.addItemQuery(req.body);
        if (error) {
            return response.invalidInput(res, error.message);
        }
        let [_, internalServerError] = await $(itemService.addItem(value));
        if (internalServerError) {
            return response.internalServerError(
                res,
                internalServerError.message
            );
        }
        return response.success(res);
    },
};
