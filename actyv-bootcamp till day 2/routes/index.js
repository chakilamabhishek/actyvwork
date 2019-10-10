var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');
});
router.get('/onlysettimeout', function(req, res, next) {

  res.render('onlysettimeout');
});
router.get('/withcallback', function(req, res, next) {

  res.render('withcallback');
});
module.exports = router;
