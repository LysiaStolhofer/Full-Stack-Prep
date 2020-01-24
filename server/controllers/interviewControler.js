const express = require('express');
const router = express.Router();

// Import the model (cat.js) to use its database functions.
const interview = require('../../models/interview');

// Create all our routes and set up logic within those routes where required.
router.get('/api/db', function (req, res) {
    interview.selectAll(
        {
            table: req.body.table
        },
        function (result) {
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