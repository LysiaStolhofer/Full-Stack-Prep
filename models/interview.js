// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm');

const interview = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    selectQuestions: function (topic, level, cb) {
        orm.selectQuestions(topic, level, function (res) {
            cb(res);
        });
    },
    createQuestion: function (topic, question, answer, code, level, timer, cb) {
        orm.createQuestion(topic, question, answer, code, level, timer, function (res) {
            cb(res);
        });
    },
    updateUserprogress: function (user, topic, cb) {
        orm.updateUserprogress(user, topic, function (res) {
            cb(res);
        });
    },
    createNewUser: function (firstname, lastname, email, picture, cb) {
        orm.createNewUser(firstname, lastname, email, picture, function (res) {
            cb(res);
        });
    },
    selectUserprogress: function (email, cb) {
        orm.selectUserprogress(email, function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertNew: function (table, cols, vals, cb) {
        orm.insertNew(table, cols, vals, function (res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (catsController.js).
module.exports = interview;