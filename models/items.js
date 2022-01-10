const mongo = require('mongoose');
const Schema = mongo.Schema;
const itemsCollection = 'items';

const itemSchema = new Schema(
    {
        brand: { type: String, index: true },
        sku: { type: String, unique: true },
        name: { type: String },
        meta: {
            description: { type: String },
            docLink: { type: String },
            images: [{ type: String }],
        },

        iconImage: { type: String },
        quantityPerUnit: { type: Number },
        mrp: { type: Number },
    },

    {
        versionKey: false,
        timestamps: true,
    }
);

const Items = mongo.model(itemsCollection, itemSchema, itemsCollection);
module.exports = Items;
