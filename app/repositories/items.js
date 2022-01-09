const Items = require('../../models/index').Items;

module.exports = {
    findOne: function (query, project = {}) {
        return Items.findOne(query).select(project).lean();
    },

    find: function (query, project = {}) {
        return Items.find(query).select(project).lean();
    },

    newItem: function (item) {
        return new Items(item);
    },

    save: function (item) {
        return item.save();
    },
};
