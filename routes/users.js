var express = require('express');
var router = express.Router();

// GET users listing.
// Using next is best practice
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;