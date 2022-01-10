const Joi = require('joi');

const itemName = Joi.string().required();
const brand = Joi.string().required();
const mrp = Joi.number().required();

const itemSchema = Joi.object({
    name: itemName,
    brand,
    mrp,
});

module.exports = {
    addItemQuery: (input) => {
        return itemSchema.validate(input);
    },
};
