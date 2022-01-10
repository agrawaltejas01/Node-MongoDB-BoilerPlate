const Joi = require('joi');

const itemName = Joi.string().required();
const sku = Joi.string().required();
const brand = Joi.string().required();
const description = Joi.string().required();
const quantityPerUnit = Joi.number().required();
const mrp = Joi.number().required();
const iconImage = Joi.string();
const docLink = Joi.string();
const images = Joi.array().items(Joi.string());

const itemSchema = Joi.object({
    name: itemName,
    sku,
    brand,
    meta: { description, images, docLink },
    quantityPerUnit,
    mrp,
    iconImage,
});

module.exports = {
    addItemQuery: (input) => {
        return itemSchema.validate(input);
    },
};
