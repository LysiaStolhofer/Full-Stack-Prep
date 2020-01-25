const express = require('express');
const router = express.Router();

// Import the model (cat.js) to use its database functions.
const interview = require('../../models/interview');

// Create all our routes and set up logic within those routes where required.
router.get('/api/allQuestions', function (req, res) {
    interview.selectAll(
        function (result) {
            res.json({ result });
        });
});

router.get('/api/levelQuestions', function (req, res) {
    interview.selectQuestions(
        {
            topic: req.body.topic,
            level: req.body.level
        },
        function (result) {
            // Send back the JSON
            res.json({ result });
        });
});

router.get('/api/selectUserprogress', function (req, res) {
    interview.selectUserprogress(
        {
            email: req.body.email
        },
        function (result) {
            // Send back the JSON
            res.json({ result });
        });
});

router.post('/api/updateUserProgress', function (req, res) {
    interview.updateUserprogress(
        {
            user: req.body.user,
            topic: req.body.topic
        },
        function (result) {
            // Send back the ID of the new quote
            res.json({ rowsChanged: result.changedRows });
        });
});

router.post('/api/createUser', function (req, res) {
    interview.createNewUser(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            picture: req.body.picture
        },
        function (result) {
            // Send back the ID of the new quote
            res.json({ result });
        });
});

router.post('/api/createquestion', function (req, res) {
    interview.createQuestion(
        {
            topic: req.body.topic,
            question: req.body.question,
            answer: req.body.answer,
            code: req.body.code,
            level: req.body.level,
            timer: req.body.timer
        },
        function (result) {
            // Send back the JSON
            res.json({ result });
        });
});

router.post('/api/db', function (req, res) {
    interview.insertNew(
        {
            table: req.body.table,
            cols: req.body.cols,
            vals: req.body.vals
        },
        function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});

// Export routes for server.js to use.
module.exports = router;