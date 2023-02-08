const mongo = require('mongoose');
const Schema = mongo.Schema;
const itemsCollection = 'items';

const itemSchema = new Schema(
    {
        brand: { type: String, index: true },
        name: { type: String },
        mrp: { type: Number },
    },

    {
        versionKey: false,
        timestamps: true,
    }
);

// Comment added

const Items = mongo.model(itemsCollection, itemSchema, itemsCollection);
module.exports = Items;
