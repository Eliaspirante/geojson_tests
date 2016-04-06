var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('base/index', { title: 'IX Consult' });
});

module.exports = router;
