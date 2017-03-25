var express = require('express');
// router variable takes the place of app variable
var router = express.Router();

// First Route
router.get('/', function(req, res) {

  res.send(`
    <h1> Welcome</h1>
    <p>Web Studio Place 'Making your Business Known' </p>
    `);
});

module.exports = router;
