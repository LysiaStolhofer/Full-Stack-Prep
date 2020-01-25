// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm');

const interview = {
    selectAll: function (table, cb) {
        orm.selectAll(table, function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertNew: function (table, cols, vals, cb) {
        orm.insertNew(table, cols, vals, function (res) {
            cb(res);
        });
    },
    selectQuestions: function (topic, level, cb) {
        orm.selectQuestions(topic, level, function (res) {
            cb(res);
        });
    },
    updateUserprogress: function (user, topic, cb) {
        orm.updateUserprogress(user, topic, function (res) {
            cb(res);
        });
    },
    selectWhere: function (objColVals, condition, cb) {
        orm.update('users', objColVals, condition, function (res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (catsController.js).
module.exports = interview;